# ADR 0099: Todos os quality gates ativos desde o setup, com testes de fumaça

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0086](0086-gates-obrigatorios-em-todo-pr.md), [ADR 0088](0088-fluxos-cobertos-pelo-e2e.md)

## Contexto

O ADR 0086 manda rodar os 6 checks em todo PR e bloquear o merge se algum falhar. No setup do monorepo, porém, ainda não existem banco nem telas reais, e portanto não há o que os checks de integração e de E2E testarem. As opções eram ativar todos os checks com testes mínimos ou deixar a integração e o E2E para os épicos seguintes.

## Decisão

Os 6 checks entram no ruleset já no setup, cada um com um teste mínimo:

- **Integração:** a CI sobe o Supabase local e roda um teste de fumaça que confirma que o banco responde.
- **E2E:** um fluxo do Maestro abre o app no emulador Android e navega pelas 5 abas da casca (ADR 0034).
- **Unitários:** um teste por pacote, para o Jest e a cobertura (ADR 0087) rodarem de verdade.

Os épicos seguintes substituem esses testes de fumaça pelos testes reais.

## Consequências

- A pipeline completa fica provada desde o primeiro PR de código, sem exceção ao ADR 0086.
- Os problemas de infraestrutura (Docker do Supabase na CI, emulador Android) aparecem no setup, e não no meio de um épico de produto.
- O setup fica maior e o primeiro PR demora mais para ficar verde.
- Os testes de fumaça não protegem regras de negócio. Eles só garantem que cada camada da pipeline funciona.
