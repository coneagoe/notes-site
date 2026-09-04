import { QuartzTransformerPlugin } from "../types"
import { Root, Code, Image } from "mdast"
import { visit } from "unist-util-visit"
import { deflateRawSync } from "node:zlib"

export interface Options {
  /** PlantUML server base URL (no trailing slash). */
  server: string
  /** Output format path segment: svg | png | txt */
  format: "svg" | "png" | "txt"
}

const defaultOptions: Options = {
  server: "https://www.plantuml.com/plantuml",
  format: "svg",
}

/** PlantUML's custom base64 alphabet (see https://plantuml.com/text-encoding). */
function encode64(data: Buffer): string {
  let r = ""
  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 === data.length) {
      r += append3bytes(data[i], data[i + 1], 0)
    } else if (i + 1 === data.length) {
      r += append3bytes(data[i], 0, 0)
    } else {
      r += append3bytes(data[i], data[i + 1], data[i + 2])
    }
  }
  return r
}

function append3bytes(b1: number, b2: number, b3: number): string {
  const c1 = b1 >> 2
  const c2 = ((b1 & 0x3) << 4) | (b2 >> 4)
  const c3 = ((b2 & 0xf) << 2) | (b3 >> 6)
  const c4 = b3 & 0x3f
  return encode6bit(c1 & 0x3f) + encode6bit(c2 & 0x3f) + encode6bit(c3 & 0x3f) + encode6bit(c4 & 0x3f)
}

function encode6bit(b: number): string {
  if (b < 10) return String.fromCharCode(48 + b)
  b -= 10
  if (b < 26) return String.fromCharCode(65 + b)
  b -= 26
  if (b < 26) return String.fromCharCode(97 + b)
  b -= 26
  if (b === 0) return "-"
  if (b === 1) return "_"
  return "?"
}

export function encodePlantUML(source: string): string {
  const compressed = deflateRawSync(Buffer.from(source, "utf8"), { level: 9 })
  return encode64(compressed)
}

/**
 * Turn ```plantuml / ```puml fences into <img> pointing at a PlantUML server.
 * Diagrams are rendered on demand by the server (not stored in the repo).
 */
export const PlantUML: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  return {
    name: "PlantUML",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "code", (node: Code, index, parent) => {
              if (!parent || typeof index !== "number") return
              const lang = (node.lang ?? "").toLowerCase()
              if (lang !== "plantuml" && lang !== "puml") return

              const encoded = encodePlantUML(node.value)
              const url = `${opts.server.replace(/\/$/, "")}/${opts.format}/${encoded}`
              const image: Image = {
                type: "image",
                url,
                alt: "PlantUML diagram",
              }
              parent.children.splice(index, 1, image)
            })
          }
        },
      ]
    },
  }
}
