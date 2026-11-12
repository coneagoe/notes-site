---
created: 2026-09-20T15:37
updated: 2026-11-12T13:53
title: short hedge vs long hedge
publish: true
---

# short hedge vs long hedge

> [!Note]
> 对冲的目的是提前锁定价格，降低风险。临近交割日，$S \approx F$。因为你最终是要买入/卖出现货的。这里我们用平仓的 future price 代替现货价格。

|             | 适用场景                   | 理想预期获利                                         |
| ----------- | ---------------------- | ---------------------------------------------- |
| short hedge | 未来要<mark>卖出</mark>某项资产 | $\lvert F_1 - F_2 \rvert \times \text{volume}$ |
| long hedge  | 未来要<mark>买入</mark>某项资产 | $\lvert F_1 - F_2 \rvert \times \text{volume}$ |

- $F_1$：建仓 futures price（锁定参考价）
- $F_2$：平仓 futures price（≈ 现货成交价）
- 绝对值表示现货相对 $F_1$ 的偏离幅度；期货盈亏与之同幅、符号相反地抵消现货敞口
- 无论届时现货价格如何（高于或低于 $F_{1}$），你都可以通过期货或现货赚钱


## 参见

- [[3.1 BASIC PRINCIPLES]]
