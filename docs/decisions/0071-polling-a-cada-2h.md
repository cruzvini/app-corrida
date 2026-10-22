# ADR 0071: Polling no Supabase a cada 2h, das 5h às 23h

- **Status:** Aceita
- **Data:** 2026-10-22
- **Complementa:** [ADR 0006](0006-strava-polling-e-pull-to-refresh.md)

## Contexto

O ADR 0006 limitou a 1 consulta ao Strava por usuário a cada 30 minutos, somando o polling e a atualização manual. Com polling a cada 30 min, a atualização manual quase nunca estaria liberada.

## Decisão

- O agendador do Supabase (pg_cron) chama uma Edge Function **a cada 2h, das 5h às 23h** no fuso do usuário.
- Somam-se a consulta da rotina das 22h (ADR 0044) e a atualização manual, sempre respeitando o limite de 30 min.

## Consequências

- São cerca de 10 consultas por usuário por dia, bem abaixo da cota do app (1.000 leituras por dia com 1 atleta e 2.000 com até 10).
- Depois de um treino, a atualização manual mostra o resultado na hora.
- Webhooks continuam como evolução futura (ADR 0006).
