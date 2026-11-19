# ADR 0225: Babel compila o TypeScript no Jest, também nos pacotes

- **Status:** Aceita
- **Data:** 2026-11-18
- **Complementa:** [ADR 0119](0119-runner-jest.md), [ADR 0134](0134-pacotes-internos-sem-build.md)

## Contexto

O ADR 0119 escolheu o Jest em todo o monorepo, com o preset `jest-expo` no app e "suporte a TypeScript" nos pacotes, sem dizer qual. O app já compila com o Babel (`babel-preset-expo`), tanto no Metro quanto no `jest-expo`. Para os pacotes `rules-engine` e `ai-provider`, as opções eram o Babel, o `ts-jest` (que checa os tipos ao rodar os testes) ou o `@swc/jest` (mais rápido).

## Decisão

Usar o **Babel em todo o monorepo**: os pacotes e os testes deles passam pelo `babel-jest` com o `babel-preset-expo`, o mesmo preset que o Metro usa para compilar esses pacotes dentro do app (ADR 0134).

## Consequências

- Um transformador só, com o mesmo resultado no app, nos testes do app e nos testes dos pacotes.
- Nenhuma configuração extra por causa do `"type": "module"` dos pacotes.
- O Jest não checa tipos. Quem faz isso é o `npm run typecheck`, que inclui a pasta `tests/` e é um gate próprio da CI (ADR 0123).
- Se os testes dos pacotes ficarem lentos, a troca pelo SWC vira um novo ADR.
