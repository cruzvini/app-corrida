# ADR 0015: Nível de corrida sugerido pelo Strava e confirmado pelo usuário

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O nível de corrida é uma entrada do plano genérico (ADR 0008). O público é misto, com iniciantes e experientes. Um nível só autodeclarado depende da percepção da pessoa. Um nível só inferido não funciona para quem não tem histórico no Strava.

## Decisão

- Quando houver histórico no Strava, o app sugere o nível a partir da atividade recente (frequência, volume, maior distância contínua), e a pessoa confirma ou ajusta.
- Sem histórico (ex.: conectou o Strava, que é obrigatório pelo ADR 0019, mas ainda não tem atividades), a pessoa escolhe o nível.
- Em qualquer caso, cada nível aparece com uma descrição curta, para facilitar a escolha.

## Consequências

- As descrições dos níveis viram texto de produto, validado pelo usuário (em `docs/concepcao.md`).
- Os critérios de inferência (limites de frequência, volume e distância) serão definidos no épico "Motor de regras" e testados como regras unitárias (ADR 0004).
- A sugestão precisa ser explicável (ex.: "sugerimos intermediário porque você correu 2x por semana nas últimas 8 semanas").
- O nível pode mudar com o tempo. Reavaliar o nível é uma forma de replanejamento.
