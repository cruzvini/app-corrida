# ADR 0072: Permissão activity:read_all no Strava, sem guardar mapa ou GPS

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

No OAuth, `activity:read` só dá acesso a atividades públicas ou para seguidores. Muita gente registra academia e treinos curtos como privados, e com o ADR 0069 essas atividades contam como carga.

## Decisão

- O app pede `activity:read_all`, que inclui as atividades marcadas como "só você".
- A tela "por que conectar o Strava" (critério 1.3) explica que o app vê também as atividades privadas.
- O app **não guarda mapa, polyline nem GPS**, só o resumo do ADR 0068.
- Se o usuário desmarcar a permissão, vale o critério 1.5.

## Consequências

- A carga das outras atividades fica completa.
- O refresh token dá acesso a dados privados, o que reforça a proteção dos tokens (ADR 0074).
