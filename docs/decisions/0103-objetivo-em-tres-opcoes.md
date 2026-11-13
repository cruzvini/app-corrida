# ADR 0103: Objetivo em três opções: completar uma distância, melhorar o tempo ou sem objetivo definido

- **Status:** Aceita (revisada pelo ADR 0214)
- **Data:** 2026-11-10

## Contexto

O setup perguntava o tipo de plano: genérico (sem data final) ou específico (distância e data da prova ou prazo, com pace alvo sugerido pelo Strava) (ADRs 0008, 0016 e 0021). Objetivos como "correr 3 km sem parar" cabiam só em parte: o plano específico exigia uma data e tinha cara de prova, e quem quer completar uma distância normalmente não tem prazo.

## Decisão

A pergunta "Tipo de plano" vira **"Qual é o seu objetivo?"**, com três opções:

1. **Completar uma distância** (ex.: "3 km sem parar", "meus primeiros 10 km").
   - O usuário informa a distância.
   - A data é opcional: sem data, o app sugere um prazo realista pelo nível e pelo histórico do Strava, e o usuário aceita ou ajusta.
   - Não há pace alvo: o foco é completar a distância. Os treinos podem alternar corrida e caminhada, em blocos por duração e intensidade (ADR 0024).
2. **Melhorar o tempo numa distância** (prova ou recorde).
   - O usuário informa a distância e a data.
   - O app sugere o pace alvo pelo Strava, e o usuário aceita ou ajusta (ADR 0021).
3. **Sem objetivo definido, só correr com regularidade.**
   - É o plano genérico, sem data final (ADR 0008).

As opções 1 e 2 são planos específicos: sempre terminam numa data, informada ou sugerida. O aviso de risco vale para as duas (ADR 0017). Objetivos que não cabem nas três (ex.: "correr 30 minutos sem parar") são combinados com o Piu depois do onboarding.

## Consequências

- O usuário escolhe pelo que quer, e não por um termo técnico como "plano específico".
- Como o prazo sugerido é calculado (pelas regras ou pela IA) fica para o próximo ADR. *Decidido no ADR 0104: pelas regras.*
- "Adiar objetivo" (ADR 0060) vale para as opções 1 e 2, que têm data.
- Um objetivo em texto livre, interpretado pela IA, fica para depois do MVP, nas ideias de features.
- Revisa os ADRs 0008, 0016 e 0021 e os critérios 2.4 a 2.6.
