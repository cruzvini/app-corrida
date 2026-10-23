# ADR 0069: Corrida é o foco; outras atividades são declaradas no setup e contam como carga

- **Status:** Aceita
- **Data:** 2026-10-22
- **Substitui:** [ADR 0014](0014-musculacao-como-carga-no-plano.md)
- **Revisa:** [ADR 0027](0027-atividade-fora-do-plano-conta-como-carga.md), [ADR 0038](0038-conteudo-da-aba-perfil.md) e [ADR 0063](0063-quantidade-de-dias-com-dias-e-divisao-opcionais.md)

## Contexto

O ADR 0014 tratava só a musculação como carga. Na prática, o usuário pode fazer funcional, HIIT, natação, bike e outras atividades, e todas afetam o esforço das corridas.

## Decisão

- **Corrida** (tipos Run, TrailRun e VirtualRun do Strava) é o foco do plano.
- **Qualquer outra atividade** entra como **carga, medida pelo esforço** (ADR 0070). O motor de regras considera essa carga ao posicionar as corridas mais puxadas.
- **No setup**, o usuário declara a rotina de outras atividades: tipo, quantas vezes por semana e, opcionalmente, os dias (como no ADR 0063). A musculação vira um item dessa lista, com a divisão opcional.
- O plano reserva essas atividades. O Strava confirma o que foi feito, e o que não estava previsto vira carga extra.
- O app não prescreve exercícios, séries ou cargas de nenhuma outra atividade.

## Consequências

- A tela de musculação do setup (tela 05 dos wireframes) vira uma lista genérica de atividades. Os fluxos da jornada 2 e o critério 2.3 precisam ser atualizados.
- O mapeamento dos tipos do Strava para as atividades declaradas fica no motor de regras. Uma atividade de tipo diferente do previsto conta como carga extra, e o usuário pode corrigir (ADR 0025).
- O modelo de dados troca "musculação" por "atividade" com tipo.
