# ADR 0090: Conversa única e contínua com o Piu

- **Status:** Aceita (revisada pelo ADR 0106)
- **Data:** 2026-11-10

## Contexto

A aba Piu segue o estilo de apps de mensagem (ADR 0034). O Piu é aberto de vários lugares: a própria aba, o "Replanejar" de um treino (ADR 0078), o "Editar plano com o Piu" (ADR 0081) e as mensagens de Notificações (ADRs 0050 e 0053). Foram avaliados: uma conversa única e contínua ou conversas separadas por assunto, com uma lista de conversas.

## Decisão

*Revisado pelo ADR 0106: o card de contexto e o que vai para a IA trazem o plano e o texto do usuário, nunca dados do Strava.*

Existe **uma conversa só** com o Piu, contínua, separada por dia.

- Quando o Piu é aberto de um treino, do plano ou de uma notificação, um **card de contexto** entra na conversa naquele ponto (ex.: "Intervalado · seg 9 nov"), e o Piu recebe esse contexto junto.
- Todas as aberturas levam à mesma conversa, na aba Piu.

## Consequências

- Não há lista de conversas, e a navegação fica mais simples.
- O card de contexto marca onde cada assunto começou, sem separar a conversa.
- A conversa cresce sem fim. O que vai como contexto para a IA a cada mensagem (ex.: só as mensagens recentes) fica para o épico de IA, por causa do custo (ADR 0031).
