# ADR 0224: ESLint 9 por compatibilidade com o Expo

- **Status:** Aceita
- **Data:** 2026-11-17
- **Complementa:** [ADR 0131](0131-eslint-e-prettier.md)

## Contexto

O setup da raiz (card #15) instalou a versão mais nova do ESLint, a 10. O `eslint-config-expo`, que o app vai usar (ADR 0131), depende do `eslint-plugin-import` 2.x, que só aceita até o ESLint 9. Com o ESLint 10, o npm recusa instalar a config do Expo por conflito de peer dependencies. A regra `no-extraneous-dependencies` (ADR 0131) também vem do `eslint-plugin-import`.

As opções eram fixar o ESLint 9 ou manter o 10 com o fork `eslint-plugin-import-x`, montando as regras do Expo à mão ou instalando com `--legacy-peer-deps`.

## Decisão

Fixar o **ESLint 9** (e o `@eslint/js` 9) na raiz. A regra `import/no-extraneous-dependencies` vem do `eslint-plugin-import`, o mesmo plugin que o Expo usa.

## Consequências

- O app instala o `eslint-config-expo` sem conflito, e o monorepo tem um plugin de import só.
- O projeto fica uma versão maior atrás do ESLint. O ESLint 9 continua com o formato flat config.
- A troca para o ESLint 10 vira um novo ADR quando o `eslint-config-expo` e o `eslint-plugin-import` aceitarem essa versão.
