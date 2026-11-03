---
created: 2026-11-03T14:26
updated: 2026-11-03T16:50
title: Bear Put Spread（熊市看跌价差）
publish: true
---
## 适用场景

短期、中度看空

## 构造方式

`Bear Put Spread` 由 2 条腿构成：
- 买入 `In-the-Money` Put（较高行权价）
- 卖出 `Out-of-the-Money` Put（较低行权价）

因买入 Put 的行权价更高，整体为 **净付出**（`net debit`）。

> [!Caution]
> 两腿必须是同一标的、同一到期月。

## 相对单买 Put

卖出低行权价 Put 降低成本，并把盈亏平衡点抬高，代价是封顶最大收益。

## 风险

有限，等于 **净权利金**（`net debit`）

## 收益

有限：

$$
\text{最大收益} = (\text{行权价差} - \text{净权利金}) \times \text{手数}
$$

## 盈亏平衡点

$$
\text{Long Put 行权价} - \text{净权利金}
$$

## 例子

假设 Nifty 现价 5500；买入 3 手行权价 5600、权利金 150 的 Put；卖出 3 手行权价 5400、权利金 50 的 Put。

$$
\begin{align*}
\text{净权利金} &= 150 - 50 = 100 \\
\text{盈亏平衡点} &= 5600 - 100 = 5500 \\
\text{最大收益} &= ((5600 - 5400) - 100) \times 3 = 300
\end{align*}
$$

到期结果：
- ≤ 5400：拿满最大利润
- 低于 5500：整体有利
- ≥ 5600：亏满净权利金

若只买 5600 Put，$BE = 5600 - 150 = 5450$。

![[bear_put_spread_payoff_20261103165000.png]]


## 参见

- [[12. Bear Put Spread（熊市看跌价差）]]
