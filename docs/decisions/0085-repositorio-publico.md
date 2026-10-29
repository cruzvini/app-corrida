# ADR 0085: Repositório público para os quality gates bloquearem o merge

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md), [ADR 0084](0084-ci-no-github-actions.md)

## Contexto

O ADR 0011 diz que um PR só é integrado com todos os quality gates passando. O repositório é privado e está no plano GitHub Free. Nesse plano, a proteção de branch e os rulesets não bloqueiam o merge em repositório privado, e o Actions tem cota de 2.000 minutos por mês, que o E2E no emulador Android consome rápido. As opções eram tornar o repositório público, assinar o GitHub Pro ou manter privado e depender só de disciplina.

## Decisão

- **Tornar o repositório público.**
- Configurar um ruleset na `main` que exige PR e os checks da CI passando antes do merge.

## Consequências

- Os gates bloqueiam o merge de verdade, e o Actions passa a não ter limite de minutos.
- Sem custo.
- Os ADRs, o design, os fluxos e o código ficam visíveis para qualquer pessoa.
- Antes de tornar o repositório público, o histórico é varrido em busca de segredos. A regra de nunca commitar segredos (CLAUDE.md) passa a ser ainda mais crítica, então um scanner de segredos entra na CI.
- Os workflows não podem expor segredos a PRs vindos de forks (não usar `pull_request_target` com checkout do código do PR).
- O ruleset é criado no setup do monorepo, junto com os primeiros checks.
