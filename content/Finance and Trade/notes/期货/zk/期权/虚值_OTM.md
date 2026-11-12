---
title: 虚值（OTM）
created: 2026-11-12T10:42
updated: 2026-11-12T11:25
tags:
  - futures
  - options
  - otm
publish: true
---

虚值（`Out-of-the-Money`，OTM）：该期权现在立即行权，其内在价值为 0。（理性投资者不会行权。）

| 类型   | 内在价值        |
| ---- | ----------- |
| Call | 0 ($S < K$) |
| Put  | 0 (S > K)   |
- S：标的当前价格
- K：行权价

例：S = 3000。Call 3300 为虚值，Put 2800 为虚值。
