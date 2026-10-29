# ADR 0094: ESLint e Prettier para lint e formatação

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0086](0086-gates-obrigatorios-em-todo-pr.md), [ADR 0092](0092-npm-workspaces.md)

## Contexto

O gate de Lint (ADR 0086) precisava de uma ferramenta. As opções eram ESLint com Prettier, o padrão do ecossistema, ou o Biome, que faz lint e formatação numa ferramenta só e roda mais rápido, mas não tem as regras específicas do Expo e do React Native.

## Decisão

Usar **ESLint** para o lint e **Prettier** para a formatação:

- Uma config ESLint única na raiz, no formato flat (`eslint.config.js`).
- O app usa o `eslint-config-expo`. Os pacotes usam o `typescript-eslint`.
- O `eslint-config-prettier` desliga as regras de estilo do ESLint, e a formatação fica toda com o Prettier.
- O gate de Lint roda o ESLint e o `prettier --check`.

## Consequências

- O app ganha as regras oficiais do Expo, incluindo as de React Hooks.
- A regra `import/no-extraneous-dependencies` impede um pacote de importar uma dependência que não declarou, o que cobre a brecha do npm workspaces (ADR 0092).
- São duas ferramentas para configurar e manter, e o lint fica mais lento que o do Biome. Para o tamanho do MVP, a diferença é aceitável.
