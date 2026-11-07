---
title: contract size (合约规模 / 交易单位)
updated: 2026-11-07T23:21
created: 2024-02-17T19:13:24
publish: true
tags:
  - futures
  - contract-specs
---

也叫**交易单位**，指一份合约对应的[[asset_标的资产|标的资产]]数量。

例：一份纯碱期货合约 `contract size` 为 20 吨/手


### 对交易所的重要性

- 太大，不能满足小风险敞口交易者的对冲需求，也不能满足小头寸投机者的投机需求
- 太小，交易手续费相对偏贵
- <span class="tyee-blue">这些都会影响交易所的交易量，交易所是要靠交易量来收费的。</span>

> [!Tips]
> 在设计 contract size 时，要充分考虑潜在用户的需求。


## 参见

- [[2.2.2 The Contract Size]]
- [[查看期货合约]]
