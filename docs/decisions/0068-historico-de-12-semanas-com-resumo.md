# ADR 0068: Histórico do Strava: 12 semanas, só o resumo de cada atividade

- **Status:** Aceita
- **Data:** 2026-10-22
- **Complementa:** [ADR 0040](0040-falha-na-importacao-do-strava.md)

## Contexto

O motor de regras usa o histórico para sugerir o nível (ADR 0015) e o pace alvo (ADR 0021). O nível "Avançado" fala em correr "há meses", então a janela precisa cobrir uns 3 meses.

## Decisão

Ao conectar o Strava, o app importa as **últimas 12 semanas**, só com o resumo de cada atividade: data, tipo, distância, tempo em movimento e pace médio. Não importa detalhe por km, por volta nem streams.

## Consequências

- A importação sai em 1 ou 2 chamadas à listagem de atividades.
- Regras que precisem de mais detalhe (ex.: melhor trecho de 5 km) exigem rever este ADR.
