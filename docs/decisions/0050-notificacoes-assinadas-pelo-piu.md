# ADR 0050: Mensagens em Notificações assinadas pelo Piu

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O ADR 0035 criou o Piu, assistente de conversa do app, e deixou em aberto se as mensagens automáticas em Notificações (ADRs 0007 e 0034) devem sair assinadas por ele. São ajustes automáticos, semanas novas detalhadas, sugestões e propostas geradas a partir do feedback.

## Decisão

Todas as mensagens em Notificações saem assinadas pelo Piu, com o avatar dele e no tom de parceiro de treino (ADR 0033).

- Cada mensagem traz o botão "Conversar com o Piu sobre isso", que abre a conversa com a mensagem como contexto.
- Nos ajustes antigos, que não podem mais ser desfeitos (ADR 0047), esse botão é o caminho para mudar o ajuste.

## Consequências

- O usuário ouve uma voz só no app, seja nas mensagens automáticas, seja na conversa.
- As mensagens automáticas também precisam seguir o guia de tom de voz, inclusive os textos gerados por template sem IA.
- O Piu precisa receber a mensagem de origem como contexto da conversa, junto com o plano (ADR 0035).
- Continua valendo que o app não faz diagnóstico (ADR 0028).
