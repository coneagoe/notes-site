---
created: 2026-11-09T14:50
updated: 2026-11-12T15:57
title: Bull Put Spread
publish: true
---
> [!caution] 量纲
> 本文权利金和 BE 计算采用同一量纲（点 / 价格），不乘 [[contract_size_合约规模_交易单位|合约规格]] 。换算金额参见 [[权利金计算]]。

## 适用场景

短期、中度<mark>看涨</mark>

## 构造方式

`Bull Put Spread` 由 2 条腿构成：
- 卖出 [[实值_ITM|In-the-Money]] Put（较高行权价）
- 买入 [[虚值_OTM|Out-of-the-Money]] Put（较低行权价）

因卖出 Put 的行权价更高、权利金更高，整体为 **净收入**（`net credit`）。买入的低行权价 Put 给已卖出 Put 的下行风险上保险。

> [!Caution]
> 两腿必须是同一标的、同一到期月。

## 相对 Bull Call Spread

到期损益形状与 [[bull_call_spread]] 相同；差别在建仓现金流——本策略净收款，侧重赚取权利金收入。

## 风险

有限：

$$
\text{最大损失} = (\text{行权价差} - \text{净权利金}) \times \text{手数}
$$

## 收益

有限，等于 **净权利金**（`net credit`）

$$
\text{最大收益} = \text{净权利金} \times \text{手数}
$$

## 盈亏平衡点

$$
\text{Short Put 行权价} - \text{净权利金}
$$

## 例子

假设 Nifty 现价 5500；卖出 1 手行权价 5600、权利金 150 的 Put；买入 1 手行权价 5400、权利金 50 的 Put。

$$
\begin{align*}
\text{净权利金} &= 150 - 50 = 100 \\
\text{盈亏平衡点} &= 5600 - 100 = 5500 \\
\text{最大收益} &= 100 \times 1 = 100 \\
\text{最大风险} &= ((5600 - 5400) - 100) \times 1 = 100
\end{align*}
$$

到期结果：
- ≥ 5600：拿满最大收益（净权利金）
- 高于 5500：整体有利
- ≤ 5400：亏满最大风险

![[bull_put_spread_payoff_20261029195223.png]]


## 参见

- [[10. Bull Put Spread]]
