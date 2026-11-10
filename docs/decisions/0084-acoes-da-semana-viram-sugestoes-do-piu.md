# ADR 0084: "Semana mais leve" e "Adiar objetivo" viram sugestões de pedido ao Piu

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0036 punha as ações prontas da semana, "semana mais leve" (ADR 0059) e "adiar a prova" (ADR 0060), no cabeçalho da semana, na aba Plano. A tela inicial do Plano deve ser de consulta, e replanejar é conversar com o Piu (ADR 0078). Além disso, o objetivo do plano específico nem sempre é uma prova: pode ser uma meta de distância ou de tempo (ADR 0008).

## Decisão

- **"Semana mais leve" e "Adiar objetivo" saem da tela inicial do Plano.**
- As duas aparecem como **sugestões de pedido no chat do Piu**, por exemplo quando ele é aberto pelo "Editar plano com o Piu" (ADR 0081).
- **"Adiar objetivo"** também é um atalho no detalhe do plano (ADR 0083), só no plano específico.
- Na interface, o termo é **"objetivo"**, e não "prova". "Adiar a prova" passa a ser "Adiar objetivo".
- O que acontece ao tocar numa sugestão no Piu (ação pronta aplicada na hora ou proposta do Piu para aceitar) fica para o próximo ADR.

## Consequências

- Revisa os ADRs 0036, 0060 e 0078 e o critério 6.1.
- Nenhuma ação de replanejamento fica solta na tela inicial do Plano. Elas ficam no Piu e, para o objetivo, no detalhe do plano.
