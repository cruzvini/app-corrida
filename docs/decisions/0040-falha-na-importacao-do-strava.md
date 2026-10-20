# ADR 0040: Falha na importação do histórico do Strava não bloqueia o setup

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Depois de conectar o Strava, o app importa o histórico recente (critério 1.4) para sugerir o nível (ADR 0015) e o pace alvo (ADR 0021). A importação pode falhar por motivos de terceiros (Strava fora do ar, limite da API). A conexão é obrigatória (ADR 0019), mas a importação depende de um serviço externo.

## Decisão

Se a importação falhar, o app avisa e oferece duas saídas:

- **Tentar de novo.**
- **Seguir e escolher o nível manualmente**, como no caso sem histórico (critério 1.6).

Se o usuário seguir, a importação é refeita em segundo plano, e o histórico passa a ser usado nos ajustes seguintes.

## Consequências

- O setup não fica travado por indisponibilidade do Strava.
- Quem segue sem histórico perde a sugestão de nível e de pace no setup. O pace alvo pode ser sugerido depois, pela caixa de entrada (Notificações), como previsto no critério 5.1.
- O backend precisa de uma rotina de nova tentativa da importação, respeitando o limite de consultas ao Strava (ADR 0006).
