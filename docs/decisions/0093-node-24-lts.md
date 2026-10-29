# ADR 0093: Node 24 LTS fixado no projeto

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0092](0092-npm-workspaces.md)

## Contexto

O npm workspaces (ADR 0092) depende da versão do Node instalada. A máquina de desenvolvimento usava o Node 25, que não é LTS e cujo suporte pelo Expo não é garantido. A CI no GitHub Actions (ADR 0084) precisa usar a mesma versão que a máquina local.

## Decisão

Fixar o **Node 24 LTS**:

- Um `.nvmrc` na raiz com `24`.
- O campo `engines` do `package.json` da raiz exige `>=24 <25`.
- A CI lê a versão do `.nvmrc` com `actions/setup-node`.

## Consequências

- A máquina local e a CI rodam a mesma versão, numa LTS suportada pelo Expo.
- A máquina de desenvolvimento precisa de um gerenciador de versões do Node (por exemplo, fnm ou nvm-windows) com o Node 24 instalado.
- A troca para o próximo LTS vira uma decisão explícita, com um novo ADR.
