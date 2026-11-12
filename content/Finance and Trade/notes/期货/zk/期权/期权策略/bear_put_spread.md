---
created: 2026-11-03T14:26
updated: 2026-11-12T16:06
title: Bear Put Spread
publish: true
---
> [!caution] 量纲
> 本文权利金和 BE 计算采用同一量纲（点 / 价格），不乘 [[contract_size_合约规模_交易单位|合约规格]] 。换算金额参见 [[权利金计算]]。

## 适用场景

短期、中度<mark>看空</mark>

## 构造方式

`Bear Put Spread` 由 2 条腿构成：
- 买入 [[实值_ITM|In-the-Money]] Put（较高行权价）
- 卖出 [[虚值_OTM|Out-of-the-Money]] Put（较低行权价）

> [!Caution]
> 两腿必须是同一标的、同一到期月。

## 风险

有限，等于 **净权利金**（`net debit`）

$$
\text{最大损失} = \text{净权利金} \times \text{手数}
$$

## 收益

有限：

$$
\text{最大收益} = (\text{行权价差} - \text{净权利金}) \times \text{手数}
$$

因为买入 Put 的行权价更高，整体为 **净付出**（`net debit`）。

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

- [[12. Bear Put Spread]]
