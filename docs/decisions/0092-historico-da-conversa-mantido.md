# ADR 0092: O histórico da conversa com o Piu é mantido

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

A conversa com o Piu é única e contínua (ADR 0090). As mensagens lidas de Notificações são excluídas depois de 30 dias (ADR 0089), e foi avaliado se a conversa teria a mesma regra.

## Decisão

O histórico da conversa com o Piu é **mantido**, sem exclusão automática.

## Consequências

- O usuário pode rever o que pediu e o que o Piu respondeu, junto com as propostas e o status de cada uma.
- A conversa pode conter dados de saúde e é enviada ao provedor de IA (ADR 0029). Ela fica guardada até a exclusão de conta, que está fora do MVP (ADR 0030).
- O histórico de replanejamentos do Perfil (ADR 0038) continua sendo o registro das mudanças no plano. A conversa é o registro do diálogo.
