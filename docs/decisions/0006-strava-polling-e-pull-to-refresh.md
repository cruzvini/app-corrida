# ADR 0006: Strava como fonte inicial, com polling agendado e pull-to-refresh

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O app precisa receber os treinos registrados pelo usuário. O Strava concentra os dados da maioria dos corredores e tem API OAuth.

## Decisão

Usar o Strava como fonte inicial de dados. Novos treinos são detectados por polling agendado no backend e por pull-to-refresh no app.

## Consequências

- O polling é mais simples de começar que webhooks, mas tem atraso e consome cota da API (os limites de taxa do Strava precisam ser respeitados).
- Os tokens OAuth do Strava são armazenados com segurança no backend.
- Webhooks podem substituir o polling no futuro, com novo ADR.
- Outras fontes ficam para depois (ver ADR 0009).
