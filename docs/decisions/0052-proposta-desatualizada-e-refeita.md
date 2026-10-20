# ADR 0052: Proposta pendente vence quando o plano muda e é refeita pelo Piu

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Uma proposta de ajuste gerada a partir do feedback (critério 5.5) fica em Notificações esperando o usuário aceitar, editar ou descartar. Enquanto isso, o plano pode mudar por um ajuste automático (ADRs 0026 e 0027), por uma semana nova detalhada (ADR 0044) ou por uma ação do próprio usuário. O "antes e depois" da proposta deixaria de corresponder ao plano atual.

## Decisão

Quando algum dia afetado pela proposta muda, a proposta vence.

- A mensagem em Notificações é marcada como "desatualizada" e perde o botão de aceitar.
- O Piu gera na hora uma proposta nova sobre o plano atual, considerando o mesmo feedback, com o fluxo "IA propõe, regras validam" (ADR 0022).
- Se a nova análise concluir que não é preciso mudar nada, nenhuma proposta nova é enviada, e a mensagem desatualizada explica isso.

## Consequências

- O usuário nunca aplica um "antes e depois" que não corresponde mais ao plano.
- Cada proposta guarda a lista de dias que afeta e a versão do plano usada como base, para o app detectar quando ela vence.
- Uma proposta refeita gera uma chamada a mais à IA, sujeita ao controle de custos (ADR 0031).
- Mudanças em dias que a proposta não afeta não fazem a proposta vencer.
