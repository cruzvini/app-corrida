# ADR 0221: `engine-strict` no npm para barrar outra versão do Node

- **Status:** Aceita
- **Data:** 2026-11-17
- **Complementa:** [ADR 0130](0130-node-24-lts.md)

## Contexto

O ADR 0130 fixou o Node 24 LTS com o `.nvmrc` e o campo `engines` (`>=24 <25`). Por padrão, o npm só mostra um aviso quando a versão do Node está fora do `engines` e instala as dependências mesmo assim. A máquina de desenvolvimento tem o Node 25 como padrão do terminal e o Node 24 no fnm, então é fácil instalar com a versão errada sem perceber.

## Decisão

Criar um `.npmrc` na raiz com `engine-strict=true`. O `npm install` falha quando o Node não está na faixa do `engines`.

## Consequências

- Instalar com o Node 25 (ou outra versão fora da faixa) dá erro, e não só um aviso. É preciso rodar `fnm use` antes.
- A CI já usa a versão do `.nvmrc` (ADR 0130), então não é afetada.
- O critério de aceitação do card #15 passa a ser: o `npm install` funciona com o Node 24 e falha com outra versão.
