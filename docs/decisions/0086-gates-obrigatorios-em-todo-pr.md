# ADR 0086: Todos os quality gates rodam e bloqueiam o merge em todo PR

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md), [ADR 0085](0085-repositorio-publico.md)

## Contexto

Com o repositório público (ADR 0085), o GitHub Actions passou a não ter limite de minutos. Faltava decidir o que roda em cada PR e o que é obrigatório para o merge. O E2E no emulador Android é o check mais lento e o mais sujeito a falhas por instabilidade do emulador.

## Decisão

Em todo PR para a `main`, rodam os checks abaixo, e todos são obrigatórios no ruleset:

1. Lint
2. Typecheck
3. Scanner de segredos
4. Testes unitários (Jest, ADR 0082)
5. Testes de integração com o Supabase local
6. E2E com o Maestro no emulador Android (ADR 0083)

O E2E tem um retry automático: só falha se falhar de novo na segunda tentativa.

## Consequências

- Nenhuma regressão de fluxo entra na `main` sem ser vista. É o caminho mais fiel ao ADR 0011.
- O PR demora mais para ficar verde por causa do E2E (estimativa de 10 a 15 minutos).
- O retry reduz falsos negativos, mas pode esconder um teste instável. Um teste que precisa do retry com frequência deve ser corrigido.
- Os checks rápidos rodam em paralelo com os lentos, para dar retorno cedo.
- Os checks e o ruleset são configurados no setup do monorepo (ADR 0081).
