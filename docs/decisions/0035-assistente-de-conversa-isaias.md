# ADR 0035: Assistente de conversa chamado Isaias

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

A conversa livre com a IA é o caminho para replanejar e editar o plano (ADR 0018). Dar um nome ao assistente torna a conversa mais próxima, em linha com o tom de parceiro de treino (ADR 0033).

## Decisão

O assistente de conversa do Live Run se chama **Isaias**. Ele dá nome à aba de conversa (ADR 0034) e fala no tom de parceiro de treino, sem emojis (ADR 0033).

## Consequências

- Os prompts do provedor de IA (`packages/ai-provider`) apresentam o assistente como Isaias. O nome não depende do provedor (ADR 0005).
- Mensagens automáticas em Notificações (ajustes, semanas novas) continuam sendo do app. Se elas devem ser assinadas pelo Isaias fica em aberto para os fluxos (card 3).
