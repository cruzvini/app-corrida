# ADR 0073: Selos ✓ e ✕ reforçam a cor do contorno na faixa de 7 dias

- **Status:** Aceita (cor e forma finais no ADR 0142)
- **Data:** 2026-11-10

## Contexto

Na faixa de 7 dias, o status do dia aparece na cor do contorno (ADR 0070), e o dia misto já tem um selo "!" (ADR 0071). Feito e não feito dependiam só do verde e do vermelho, o par de cores mais confundido por quem tem deficiência na visão de cores (cerca de 8% dos homens).

## Decisão

Além da cor do contorno, cada dia resolvido ganha um **selo pequeno no canto superior direito**, no mesmo lugar e formato do selo "!":

- **✓** no dia feito (contorno verde).
- **✕** no dia não feito (contorno vermelho).
- **!** no dia misto (contorno verde, ADR 0071).
- Dia planejado, pendente ou de descanso fica **sem selo**.

## Consequências

- O status pode ser lido pela forma do selo, sem depender da cor.
- O ✓ e o ✗ que o ADR 0070 tirou de baixo dos ícones voltam como selo no canto, e os ícones de modalidade continuam no lugar.
- Os três selos formam um conjunto do sistema visual, com cor e forma finais definidas no card 5.
