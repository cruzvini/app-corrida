# ADR 0055: Feedback salvo antes da análise, e falha da IA sem mensagem de erro

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Quando o usuário envia um feedback, a IA analisa se ele pede uma mudança no plano (ADR 0028). Essa análise pode falhar por erro do provedor, resposta fora do formato ou limite de custo (ADR 0031).

## Decisão

- O feedback é salvo no histórico do treino antes de qualquer análise, e o usuário vê "Feedback salvo".
- A análise roda em segundo plano, com novas tentativas automáticas.
- Se todas as tentativas falharem, o feedback continua valendo como contexto nos próximos detalhamentos e ajustes (ADR 0028), e o usuário não recebe mensagem de erro.
- Para pedir uma mudança na hora, o usuário conversa com o Piu (ADR 0035).

## Consequências

- O feedback nunca se perde por falha da IA.
- O usuário não fica sabendo que a análise falhou. Se o feedback pedia mudança, a mudança só chega no próximo detalhamento ou ajuste, ou quando ele fala com o Piu.
- O backend registra as falhas de análise para monitoramento. O número de tentativas será definido no épico "Motor de regras", junto com o comportamento de reserva sem IA.
- Nos testes, o provedor fake (ADR 0005) simula a falha.
