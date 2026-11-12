---
created: 2026-11-09T16:36
updated: 2026-11-12T13:55
title: Buy Call
publish: true
---
> [!caution] 量纲
> 本文权利金和 BE 计算采用同一量纲（点 / 价格），不乘 [[contract_size_合约规模_交易单位|contract size]] 。换算金额参见 [[权利金计算]]。

## 适用场景

短期看涨

## 构造方式

`Buy Call` 由 1 条腿构成：
- 买入 Call

## 风险

有限，等于 **权利金**（`premium paid`）

$$
\text{最大损失} = \text{权利金} \times \text{手数}
$$

标的到期时，如果期货价格 ≤ 行权价，Call option 无内在价值。

## 收益

理论上无限

## 盈亏平衡点

### 标的 BE（到期）

$$
\text{BE} = \text{行权价} + \text{权利金}
$$

### 期权 BE（提前平仓）

平仓收回的权利金 ≥ 建仓付出（未计手续费/滑点）：

$$
C_{\text{curr}} \ge C_{\text{init}}
$$


## 例子

假设 Nifty 现价 5500；买入 1 手行权价 5500、权利金 50 的 Call。

$$
\begin{align*}
\text{盈亏平衡点} &= 5500 + 50 = 5550 \\
\text{最大风险} &= 50 \times 1 = 50
\end{align*}
$$

到期结果：
- ≤ 5500：亏满 50
- 5550：回本
- 高于 5550：盈利随涨幅增大

![[buy_call_payoff_20261029154605.png]]


## 参见

- [[1. Buy Call]]
