---
created: 2026-07-17T16:54:00
updated: 2026-09-04T09:53
tags:
  - booting
title: from power-on to bootloader
publish: true
slug: from-poweron-to-bootloader
platforms: []
status: draft
---
# from power-on to bootloader

> [!Note]
> 这篇文档描述的是通用 SoC 启动流程

从上电到首阶段启动代码的典型路径。不同 SoC/MCU 的复位向量映射与启动介质处理方式不同：

```plantuml
@startuml
skinparam shadowing false
skinparam activity {
    RoundCorner 8
    FontName "Microsoft YaHei"
}
skinparam activity<<power>> {
    BackgroundColor #FFE9B8
    BorderColor #D9A83A
    FontColor #4A3712
}
skinparam activity<<config>> {
    BackgroundColor #CDEEFF
    BorderColor #62B9DA
    FontColor #1F3A44
}
skinparam activity<<reset>> {
    BackgroundColor #CFF5E5
    BorderColor #63C99E
    FontColor #1F4637
}
skinparam activity<<firmware>> {
    BackgroundColor #E3D9FF
    BorderColor #A58BE0
    FontColor #332B4A
}
skinparam activity<<media>> {
    BackgroundColor #FFE9B8
    BorderColor #D9A83A
    FontColor #4A3712
}
skinparam activity<<boot>> {
    BackgroundColor #CFF5E5
    BorderColor #63C99E
    FontColor #1F4637
}

start
if (启动事件) then ([上电 / POR])
    :保持复位、初始化电源与时钟; <<power>>
    :硬件逻辑电路对 Boot Mode Pin 采样 / 锁存; <<config>>
else ([外部复位 / Watchdog])
    :reset; <<reset>>
endif
:reset flow; <<reset>>
:release reset; <<reset>>
:reset vector; <<reset>>

if (reset vector 映射到哪里？) then ([片内 BootROM])
    :读 Boot Mode register; <<firmware>>
    :从启动源 load bootloader; <<media>>
else ([片外 NOR (XIP)])
    :片外 NOR（XIP）; <<firmware>>
endif

:bootloader; <<boot>>
stop
@enduml
```

## 说明

| 阶段                   | comment                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 启动事件                 | 上电触发的 POR，或外部复位、Watchdog 等复位事件                                                                                                 |
| 保持复位、初始化电源与时钟        | 在电源、时钟等达到要求前保持 SoC 复位；由复位逻辑电路完成必要初始化。                                                                                          |
| 采样 / 锁存 Boot Mode    | [[2_boot_mode_pin]]                                                                                                            |
| reset                | 外部复位或 Watchdog 等事件使 SoC 进入复位状态。                                                                                                |
| reset flow           | [[3_power-on_reset_POR_procedure]]                                                                                             |
| release reset        | CPU 退出复位状态，随后从 reset vector 指定的复位入口开始取指。                                                                                       |
| reset vector         | [[4_reset_vector]]                                                                                                             |
| 外部 NOR（XIP）          | [[2_what_is_xip]]。CPU 可直接从该映射区域取指并执行启动代码。                                                                                      |
| 读 Boot Mode register | [[5_bootrom]]。BootROM 读 Boot Mode register，决定从哪个启动源加载 image。                                                                   |
| 从启动源 load bootloader | eMMC、SD、NOR、NAND、SPI、UART/USB 等。这里的 NOR 是通过控制器读取存在 NOR 上的 image，加载到 SRAM/DRAM 后跳转执行，不要求 SoC 支持 XIP 。                           |


## 参见

- [[7_from_rcw_to_kernel_ARM]]
- [[0_深入理解SoC上电和boot流程]]
