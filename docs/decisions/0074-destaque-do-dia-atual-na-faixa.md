# ADR 0074: Dia atual na faixa se destaca pelo fundo preenchido

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Na faixa de 7 dias (ADR 0065), o dia atual se destacava pelo contorno mais grosso e escuro. Com a cor de status no contorno (ADR 0070) e os selos (ADRs 0071 e 0073), os dias resolvidos também passaram a ter contorno de 2px, e a espessura sozinha já não separa o dia atual dos outros.

## Decisão

- O dia atual se destaca pelo **fundo preenchido**, que nenhum outro dia da faixa tem.
- Enquanto não está resolvido (ADR 0072), o dia atual tem **contorno escuro e mais grosso**, na cor do texto do app.
- Quando está resolvido, o contorno passa para a **cor do status**, com o selo correspondente (✓, ✕ ou !), como nos outros dias.
- No dia de descanso atual, o fundo preenchido aparece com o contorno tracejado do descanso.

## Consequências

- O dia atual continua fácil de achar na faixa em qualquer status.
- O fundo preenchido do dia atual precisa ter contraste suficiente com a cor do status nos dois temas, a validar no card 5.
