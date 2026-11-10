# ADR 0126: Gitleaks na CI e push protection do GitHub

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0122](0122-repositorio-publico.md), [ADR 0123](0123-gates-obrigatorios-em-todo-pr.md)

## Contexto

Com o repositório público (ADR 0122), um segredo commitado fica exposto na hora. O ADR 0122 colocou um scanner de segredos na CI, e faltava escolher qual.

## Decisão

Duas camadas, sem custo:

1. **Push protection do GitHub:** o secret scanning com push protection fica ativado no repositório e recusa o push de chaves com formato conhecido antes mesmo do PR.
2. **Gitleaks na CI:** roda como check obrigatório em todo PR (ADR 0123), sobre os commits do PR. Também detecta padrões genéricos que o GitHub não cobre.

## Consequências

- Um segredo é barrado no push ou, no máximo, no PR, antes de chegar à `main`.
- Não há hook local. Um segredo ainda pode ir para uma branch remota se tiver um formato que só o Gitleaks reconhece. Nesse caso, o segredo deve ser **revogado** imediatamente, e não apenas apagado do histórico.
- Falsos positivos são tratados num `.gitleaks.toml` versionado, com justificativa.
- A push protection pode ser ativada já. O check do Gitleaks entra no setup do monorepo.
