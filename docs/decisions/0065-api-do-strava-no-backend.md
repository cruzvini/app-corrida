# ADR 0065: Integração com a API do Strava no backend, sem o Strava MCP

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

O registro inicial do projeto previa um protótipo com feedback de IA via Strava MCP. Já os ADRs 0006 e 0019 descrevem o backend usando a API do Strava com OAuth e polling. O Strava MCP é um conector para o assinante usar os próprios dados numa conversa com IA, e não serve para rotinas agendadas nem para outros usuários.

## Decisão

O backend usa a **API do Strava**, com OAuth, polling e tokens próprios. O Strava MCP não faz parte do app. Ele pode ser usado pelo desenvolvedor, fora do app, para explorar os próprios dados.

## Consequências

- O que é construído no protótipo já vale para o app com amigos e família.
- Os dados do Strava não passam pela IA (ADR 0066), o que tira do MVP a análise de treinos por IA.
