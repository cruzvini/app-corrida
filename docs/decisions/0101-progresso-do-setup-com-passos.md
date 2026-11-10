# ADR 0101: Progresso do setup com barra e contagem de passos

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O setup é um fluxo linear com barra de progresso (ADR 0037). Foram avaliados: só a barra ou a barra com a contagem de passos.

## Decisão

O setup mostra a **barra de progresso** e a **contagem** (ex.: "3 de 7") no topo de cada tela, abaixo do voltar. O login e a conexão com o Strava ficam fora da contagem.

## Consequências

- O usuário sabe quanto falta.
- Passos que só aparecem em alguns casos (ex.: objetivo e pace alvo, só no plano específico) mudam o total. A contagem usa o total do caminho escolhido.
