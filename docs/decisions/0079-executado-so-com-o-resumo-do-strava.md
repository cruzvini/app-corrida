# ADR 0079: O executado no detalhe do treino usa só o resumo do Strava

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0075 mostra o executado no treino feito e compara previsto e feito só no geral. Ficou em aberto se o executado mostraria também o pace de cada km ou volta, o que precisa dos dados detalhados da atividade no Strava (voltas ou streams). O ADR 0024 deixou esses dados de fora.

## Decisão

O executado mostra só o **resumo da atividade do Strava**: distância, duração e pace médio. Não há pace por km nem por volta.

## Consequências

- Confirma o ADR 0024: o backend só busca o resumo das atividades, o que reduz chamadas à API do Strava e dados guardados.
- Mostrar o pace por km ou volta depois do MVP exige um novo ADR.
