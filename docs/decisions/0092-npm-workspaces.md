# ADR 0092: npm workspaces como gerenciador do monorepo

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0001](0001-monorepo-com-pasta-de-testes.md)

## Contexto

O ADR 0001 deixou a ferramenta de workspaces (npm, pnpm ou yarn) para o setup do monorepo. O monorepo tem um app Expo (React Native) e pacotes TypeScript puros. O Metro, o bundler do React Native, funciona melhor com as dependências numa `node_modules` única na raiz.

## Decisão

Usar **npm workspaces**. O `package.json` da raiz declara `apps/*` e `packages/*` como workspaces, e o `package-lock.json` é commitado.

## Consequências

- Não há ferramenta extra para instalar, nem na máquina nem na CI: o npm já vem com o Node.
- As dependências ficam numa `node_modules` única na raiz, que é o modo com menos atrito com o Metro e o Expo.
- A instalação é mais lenta que a do pnpm, e o npm não impede um pacote de importar uma dependência que não declarou. O lint e a revisão precisam pegar esses casos.
- Os comandos do monorepo usam `npm run <script> --workspaces` ou `-w <pacote>`.
