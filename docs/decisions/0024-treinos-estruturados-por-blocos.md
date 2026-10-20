# ADR 0024: Treinos estruturados por blocos com pace alvo

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Treinos como limiar, intervalado, longão e progressivo não têm um pace único: cada parte do treino tem um objetivo diferente. Um pace médio para o treino inteiro não orienta a execução, nem permite avaliar se o treino foi bem feito.

## Decisão

- Os treinos de corrida são estruturados em **blocos** (ex.: aquecimento, repetições, recuperação, desaquecimento), e cada bloco tem distância ou duração e um **pace alvo** (valor ou faixa).
- A estrutura de blocos se adapta ao tipo de treino. Exemplos:
  - **Intervalado:** aquecimento, N repetições em pace forte com recuperações, desaquecimento.
  - **Limiar:** aquecimento, bloco(s) contínuo(s) em pace de limiar, desaquecimento.
  - **Progressivo:** blocos com pace cada vez mais rápido.
  - **Longão:** bloco longo em pace confortável, podendo ter um trecho final mais forte.
  - **Leve / regenerativo:** um bloco único com faixa de pace confortável.
- O usuário pode ver a evolução do pace ao longo do treino, comparando o pace de cada bloco com o alvo.

## Consequências

- A proposta da IA (ADR 0022) inclui os blocos, e o motor de regras valida a coerência deles (ex.: pace alvo compatível com o nível e com o pace de referência).
- O modelo de dados precisa representar o treino como uma lista de blocos.
- Sem meta de pace (ADR 0021), os blocos usam faixas por intensidade (ex.: confortável, moderado, forte) em vez de valores fixos.
- Para comparar o executado com o previsto, o app precisa dos dados detalhados da atividade no Strava (laps ou streams de pace), e não só do resumo.
- Falta definir se a visão de evolução do pace é ao vivo, durante a corrida, ou na análise depois do treino.
