# ADR 0037: Onboarding e setup em fluxo linear, sem a barra de abas

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Antes de existir um plano ativo, o usuário passa pelas jornadas 1 (onboarding), 2 (setup) e 3 (geração do plano). O plano só fica ativo depois do aceite (critério 3.7), então as abas (ADR 0034) não teriam conteúdo nessa fase. Foram avaliados: fluxo linear em tela cheia, setup como conversa com o Piu e formulário único.

## Decisão

Onboarding, setup e geração formam um **fluxo linear em tela cheia, sem a barra de abas**, com uma pergunta por tela, barra de progresso e botão de voltar:

1. Login por e-mail com link mágico (ADR 0020).
2. Conexão com o Strava, obrigatória (ADR 0019).
3. Nível de corrida, sugerido e confirmado (ADR 0015).
4. Idade e peso.
5. Frequência de corrida e de musculação, com a divisão (ADR 0014).
6. Tipo de plano: genérico ou específico.
7. No plano específico: distância, data ou prazo, e pace alvo sugerido (ADRs 0016 e 0021), com aviso de risco quando necessário (ADR 0017).
8. Resumo editável das respostas (critério 2.8).
9. Geração do plano, com estado de carregamento e nova tentativa em caso de falha (critério 3.9).
10. Revisão e aceite. "Pedir ajustes" abre o Piu (ADR 0035) com o plano como contexto.

Depois do aceite, o app passa para a barra de abas e abre no Hoje.

## Consequências

- Não há telas vazias nas abas antes de existir um plano.
- O fluxo funciona sem IA até a etapa de geração.
- Se o usuário fechar o app no meio do fluxo, ele volta ao passo em que parou, com as respostas salvas.
- Editar o setup depois (critério 6.5) é feito pelo Perfil, reaproveitando as mesmas telas fora do fluxo linear.
