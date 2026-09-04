---
title: Power-on Reset (POR) procedure
tags:
  - booting
created: 2026-07-17
updated: 2026-09-04T14:52
publish: true
---

# Power-on Reset (POR) procedure

POR procedure 覆盖从 SoC 上电或外部 reset 进入复位，到 CPU release 之前的硬件准备，为后续进入 [[5_bootrom|BootROM]] 做准备。其中 POR 释放后由 FSM 推进的阶段常称 **reset flow**。

> [!Caution]
> POR 释放前须完成对 [[2_boot_mode_pin|Boot Mode Pin]] 采样与锁存。

## Reset flow

POR 释放后进入 **reset flow** 阶段。SoC 内部通常由控制 reset sequence 的状态机 `FSM` 按序推进；具体步骤与 SoC 实现强相关。

典型任务包括：

1. 确认 [[phase_locked_loop_PLL_锁相环|PLL]] 输出时钟是否稳定可用
2. 启动外设时钟
3. 模块解复位：按依赖顺序 release 各模块的 reset
4. OTP 配置：（可选）读取一次性可编程熔丝，配置内部模块参数
5. Power-On Self-Test (POST)：（可选）非 x86 BIOS 的 POST，多为片内 BIST 一类自检

> [!Note]
> 这里讲的是通用流程。越复杂的 SoC，该阶段任务越多。

reset flow 完成后 CPU release reset，从 [[4_reset_vector|reset vector]] 取指。

## 参见

- [[1_上电复位（Power-On Reset）]]
- [[0_深入理解SoC上电和boot流程]]
