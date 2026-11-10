# ADR 0139: Detalhamento semanal pela IA, sem dados do Strava

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Na rotina das 22h do último dia de cada semana do plano, a IA detalha a semana seguinte (ADR 0044), com base nos treinos reais (ADR 0023). Esses treinos reais vêm do Strava, e o ADR 0106 proíbe enviar à IA dados do Strava, inclusive derivados. Foram avaliados: manter a IA, sem dados do Strava, ou passar o detalhamento para o motor de regras.

## Decisão

O detalhamento semanal continua com o fluxo **"IA propõe, regras validam"** (ADR 0022), mas a IA recebe só o que o ADR 0106 permite:

- O **plano**, com a estrutura (fases e volume) e as semanas já detalhadas, incluindo os ajustes que as regras fizeram.
- As **marcações manuais** do usuário (feito, não feito, divisão corrigida).
- O **texto do usuário**: feedbacks e conversa com o Piu.
- Os dados do perfil e do setup informados ou confirmados pelo usuário.

Não vão para a IA: atividades, métricas, status marcado automaticamente pelo Strava, nem carga calculada a partir delas. É o **motor de regras** que usa esses dados: ele ajusta o plano durante a semana (ADR 0107) e **valida** a semana proposta pela IA contra a carga real, corrigindo o volume se for preciso.

## Consequências

- Os treinos continuam variados e com a estrutura de blocos (ADR 0024), e a política do Strava é respeitada.
- O risco residual do ADR 0106 continua: o plano ajustado pelas regras pode ser visto como dado derivado. Se o Strava esclarecer a regra, este ADR é revisto.
- O backend precisa montar o contexto da IA a partir da origem de cada dado (Strava ou usuário), com testes que garantam que nada do Strava passa.
- Revisa os ADRs 0023 e 0044.
