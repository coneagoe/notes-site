---
created: 2026-11-03T16:28
updated: 2026-11-12T13:41
title: Bear Call Spread
publish: true
---
## 适用场景

短期、中度<mark>看空</mark>

## 构造方式

`Bear Call Spread` 由 2 条腿构成：
- 卖出 [[实值_ITM|In-the-Money]] Call（较低行权价）
- 买入 [[虚值_OTM|Out-of-the-Money]] Call（较高行权价）

因卖出 Call 的行权价更低、权利金更高，整体为 **净收入**（`net credit`）。

> [!Caution]
> 两腿必须是同一标的、同一到期月。

## 风险

有限

$$
\text{最大损失} = (\text{行权价差} - \text{净权利金}) \times \text{手数}
$$

> [!caution] 量纲
> 本文权利金和 BE 计算采用同一量纲（点 / 价格），不乘 [[contract_size_合约规模_交易单位|合约规格]] 。换算金额参见 [[权利金计算]]。

## 收益

有限

$$
\text{最大收益} = \text{净权利金} \times \text{手数}
$$

## 盈亏平衡点

$$
\text{Short Call 行权价} + \text{净权利金}
$$

## 例子

假设 Nifty 现价 5500；卖出 3 手行权价 5400、权利金 150 的 Call；买入 3 手行权价 5600、权利金 50 的 Call。

$$
\begin{align*}
\text{净权利金} &= 150 - 50 = 100 \\
\text{盈亏平衡点} &= 5400 + 100 = 5500 \\
\text{最大收益} &= 100 \times 3 = 300 \\
\text{最大风险} &= ((5600 - 5400) - 100) \times 3 = 300
\end{align*}
$$

到期结果：
- ≤ 5400：拿满最大利润（净权利金）
- 低于 5500：整体有利
- ≥ 5600：亏满最大风险

若只卖 5400 Call，$BE = 5400 + 150 = 5550$，但上行亏损不封顶。

![[bear_call_spread_payoff_20261103165000.png]]


## 参见

- [[bear_call_spread_vs_bear_put_spread]]
- [[11. Bear Call Spread]]
