---
created: 2026-11-05T16:57
updated: 2026-11-05T20:20
title: Buy Straddle（买入跨式）
publish: true
---
## 适用场景

方向中性、看多波动率（预期标的大幅上涨或下跌）

## 构造方式

`Buy Straddle` 由 2 条腿构成：
- 买入**同一行权价**的 Call
- 买入**同一行权价**的 Put

> [!Tips]
> 实践中，常选接近平值（ATM）的行权价。

> [!Caution]
> 两腿必须是同一标的、同一到期月、同一行权价。

## 风险

有限

$$
\text{最大损失} = \text{净权利金} \times \text{手数}
$$

最大亏损落在行权价：两腿到期均无内在价值（或内在价值之和仍盖不住净权利金）。

## 收益

理论上无限；实际上，因为标的价格不能低于 0，下跌方向有限。（但是现在有负油价了。）

## 盈亏平衡点

### 标的 BE（到期）

持有到到期、按内在价值兑现时，有两个固定的标的价：

$$
\begin{align*}
\text{上方 BE} &= \text{行权价} + \text{净权利金} \\
\text{下方 BE} &= \text{行权价} - \text{净权利金}
\end{align*}
$$

### 期权组合 BE（提前平仓）

实际上，很多时候我们不行权，而是直接平仓期权组合。此时盈亏是权利金差价，BE 为：

$$
\text{净权利金}_{curr} \ge \text{净权利金}_{init} \\
C_{curr} + P_{curr} \ge C_{init} + P_{init}
$$

（未计手续费/滑点）。

具体来说

- 上方 BE

$$
C_{curr} \ge C_{init} + P_{init} - P_{curr}
$$

- 下方 BE

$$
P_{curr} \ge C_{init} + P_{init} - C_{curr}
$$

即上涨一方的权利金要覆盖初始权利金 + 另一个权利金的缩水

> [!Note]
> 盘中**没有**一个像到期那样固定的标的 BE：同样涨跌幅，IV 升、时间尚早可能已赚；IV crush / 时间衰减可能标的已过 $K \pm \text{净权利金}$ 仍亏。提前离场盯组合权利金是否回本；到期分析才用标的 BE。

## 例子

假设 Nifty 现价 5500、`contract size` 50；买入 3 手行权价 5500、权利金 65 的 Call；买入 3 手行权价 5500、权利金 35 的 Put。

$$
\begin{align*}
\text{净权利金} &= 65 + 35 = 100 \\
\text{下方 BE} &= 5500 - 100 = 5400 \\
\text{上方 BE} &= 5500 + 100 = 5600 \\
\text{最大风险} &= 100 \times 3 \times 50 = 15000
\end{align*}
$$

到期结果：
- 正好在 5500：亏满最大风险（净权利金）
- 低于 5400 或高于 5600：整体有利
- 离开 BE 越远，盈利随距离增大

![[buy_straddle_payoff_20261105170500.png]]


## 参见

- [[buy_straddle_vs_long_strangle]]
- [[5. Buy Straddle（买入跨式组合）]]
- [[跨式与宽跨式：只对波动率下注]]
- [[long_strangle_买入宽跨式]]
- [[带方向的买波动：Strap、Strip 与 Backspread]]
