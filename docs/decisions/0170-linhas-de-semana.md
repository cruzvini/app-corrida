# ADR 0170: Linhas de semana e volume da semana em texto

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0081](0081-tela-inicial-do-plano.md), [ADR 0165](0165-secoes-em-grupo-sem-contorno.md) e [ADR 0169](0169-dias-da-semana-em-grupo.md)

## Contexto

A aba Plano tem as semanas anteriores recolhidas numa linha, que abre ao toque, e as próximas semanas só com a fase e o volume previsto (ADR 0081). A semana aberta mostra o volume feito e o previsto. A forma dessas linhas e do volume era uma proposta nova na tela de alta fidelidade. Foram comparadas três formas para o volume: em texto ao lado do título, com uma barra de progresso e com o feito em número de 24 px.

## Decisão

- **Linhas de semana** num grupo sem contorno (ADR 0165), uma semana por linha, com pelo menos 56 px e divisórias em `borda`:
  - a semana com peso 500, em frase ("Semana 4, de 16 a 22 nov");
  - embaixo, o volume e a fase em `legenda` e `texto-secundario` ("24 km na base, detalhada no domingo às 22h", "25 de 26 km na base");
  - à direita, `caret-down` (recolhida, abre no lugar), `caret-up` (aberta) ou `caret-right` (abre a semana), em `texto-secundario`.
- "Semanas anteriores" é a primeira linha do grupo, com o total ("Semanas 1 e 2, 49,3 de 55 km"). Aberta, a última semana passada vem expandida e as outras ficam em linha.
- As próximas semanas terminam com uma linha sem toque, em `legenda`: "Mais 4 semanas até o objetivo".
- **Semana aberta:** o título da seção ("Esta semana" ou "Semana 2, de 2 a 8 nov") com o volume à direita, em `legenda`: o feito em negrito, em `texto`, e o previsto em `texto-secundario` ("13,8 de 31,6 km"). Na semana atual, a data e a fase vêm embaixo do título, em `legenda`. Sem barra de progresso: os dias já mostram o andamento (ADR 0169).
- Contrastes: semana e feito 16,4:1 (claro) e 16,3:1 (escuro) sobre `fundo`, 17,5:1 e 14,2:1 sobre `superficie`; volume e setas 6,4:1 a 6,8:1 e 7,1:1 a 8,1:1.

## Consequências

- O único número grande da aba continua sendo o objetivo (ADR 0167).
- O design system Live Run ganha o componente LinhaDeSemana (ADR 0143).
