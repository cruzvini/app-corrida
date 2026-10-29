# ADR 0084: CI no GitHub Actions

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md)

## Contexto

O ADR 0011 pede quality gates de CI que bloqueiem o merge. O repositório, os PRs e o board já estão no GitHub. As opções eram GitHub Actions, EAS Workflows (a CI da Expo) ou as duas juntas.

## Decisão

Usar o **GitHub Actions** para toda a CI: lint, typecheck, testes unitários, testes de integração e E2E.

## Consequências

- Os checks aparecem em cada PR. Como o repositório é privado, a cota gratuita é de 2.000 minutos por mês. A forma de bloquear o merge será decidida à parte.
- Os runners Linux já trazem o que a CI precisa: Node, Docker para o Supabase local e emulador Android para o Maestro (ADR 0083).
- Só uma plataforma para configurar e manter.
- Se algum dia for preciso gerar builds nativos ou rodar E2E em iOS, o EAS pode entrar como complemento.
