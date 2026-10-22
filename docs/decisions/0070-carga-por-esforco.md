# ADR 0070: Carga de cada atividade: intensidade por tipo vezes duração, com nota de esforço opcional

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

O motor de regras precisa de um número de carga para comparar corrida, musculação, natação e outras atividades (ADR 0069), sem usar IA (ADR 0066).

## Decisão

- **Padrão:** carga = intensidade do tipo de atividade (tabela fixa no motor de regras) × tempo em movimento.
- **Ajuste opcional:** se o usuário der uma **nota de esforço de 1 a 10** no card do treino, a carga passa a ser nota × tempo (método session-RPE) e substitui o valor da tabela.

## Consequências

- O cálculo nunca fica sem número, mesmo sem relógio com frequência cardíaca.
- A nota de esforço é dado do usuário, então a IA pode vê-la (ADR 0066).
- A tabela de intensidades é definida e testada no épico 5.
- O card do treino ganha um campo opcional de nota de esforço, que precisa entrar no design.
- O "esforço relativo" do Strava, baseado em frequência cardíaca, fica como possível melhoria futura, depois de confirmar se vem pela API.
