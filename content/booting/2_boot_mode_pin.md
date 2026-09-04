---
title: Boot Mode Pin
tags:
  - booting
created: 2026-07-17
updated: 2026-09-04T14:16
publish: true
---

# Boot Mode Pin

现代很多 SoC 支持从多种不同的源（eMMC、SD、NOR、UART 下载等）启动。

刚上电的时候 [[5_bootrom|BootROM]] 还没有运行，启动路径只能由硬件配置决定。

硬件上会设计一套电路，上电时通过拉高/拉低芯片的若干引脚，告诉 SoC 当前选的是哪一个源。这组引脚就是 Boot Mode Pin（或 `BOOT_CFG`、`BOOT_MODE` 等）。

> 通常 1～3 根(视支持的启动源数量而定)

复位逻辑电路在 [[3_power-on_reset_POR_procedure|POR release]] 之前，完成对 Boot Mode pin 的电平采样，并写入 Boot Mode register，且**锁存**。

> 锁存完成后，即使 Boot Mode pin 变化也**不影响**已选定的启动源。

## 工程实践

- 原理图表示为**上拉/下拉电阻**
- 开发板常把 Boot Mode pin 接到**跳线帽或拨码开关**。
- 量产板直接电阻焊死。

1. **BootROM 决策**：BootROM 读取该寄存器，选择对应存储控制器与协议，加载 SPL 或下一阶段 Bootloader。

## 常见启动源

| 典型选项     | 说明                             |
| -------- | ------------------------------ |
| eMMC     | 手机、平板、工控板量产常见                  |
| SD/MMC   | 开发板、可插拔启动                      |
| SPI NOR  | 常支持 [[2_what_is_xip\|XIP]]，启动快 |
| NAND     | 需 BootROM 先拷到 SRAM             |
| UART/USB | 工厂烧录、救砖                        |


## 与其他配置手段的关系

| 机制          | 与 Boot Mode Pin 的关系                                       |
| ----------- | --------------------------------------------------------- |
| OTP / eFuse | 部分芯片有一次性熔丝（类似于保险丝，通过电流将其熔断）；可覆盖或补充引脚默认值，用于量产后固定启动策略       |
| RCW（NXP 等）  | 复位配置字，功能类似：上电时决定启动介质与早期参数；参见 [[7_from_rcw_to_kernel_ARM]] |
| Strap pin   | 广义的启动绑定引脚，Boot Mode Pin 常是其子集                             |

## 与 eMMC「Boot Mode」的区别

|     | SoC Boot Mode Pin  | eMMC Boot Mode                   |
| --- | ------------------ | -------------------------------- |
| 层级  | SoC 硬件配置           | eMMC 协议工作模式                      |
| 作用  | 选择 SoC 从**哪个设备**启动 | Host 触发 eMMC 从 **Boot 分区**送出启动数据 |
| 时机  | POR 释放时锁存          | Power-on / Reset 后由 Host 发 CMD   |


## 参见

- [[1_上电复位（Power-On Reset）]]
- [[2_0_Boot 阶段]]
- [[0_深入理解SoC上电和boot流程]]