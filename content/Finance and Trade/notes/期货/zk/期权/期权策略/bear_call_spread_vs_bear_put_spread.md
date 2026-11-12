---
created: 2026-11-03T17:00
updated: 2026-11-12T16:15
title: Bear Call Spread vs Bear Put Spread
publish: true
---

同为中度看空，[[bear_call_spread|bear call spread]] 和 [[bear_put_spread|bear put spread]] 的到期损益是一样的。差别主要在于 **净收权利金 vs 净付权利金**、保证金占用，以及对波动率的偏好。

## 对照

|          | Bear Call Spread        | Bear Put Spread       |
| -------- | ----------------------- | --------------------- |
| 腿        | 买高行权价 Call + 卖低行权价 Call | 买高行权价 Put + 卖低行权价 Put |
| 现金流      | **净收入**（`net credit`）   | **净付出**（`net debit`）  |
| 最大收益     | 净权利金                    | 行权价差 − 净权利金           |
| 最大风险     | 行权价差 − 净权利金             | 净权利金                  |
| 盈亏平衡     | Short Call 行权价 + 净权利金   | Long Put 行权价 − 净权利金   |
| 到期在哪一侧赚钱 | 跌破 BE（偏空）               | 跌破 BE（偏空）             |

## 什么时候用哪个

- **偏收权利金、IV 偏高** → Bear Call Spread
- **偏付权利金、IV 偏低** → Bear Put Spread

> [!Note]
> 净收价差通常要占用保证金；净付价差的初始风险就是已付权利金。具体以保证金规则为准。
