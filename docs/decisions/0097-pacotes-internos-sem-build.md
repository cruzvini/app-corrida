# ADR 0097: Pacotes internos consumidos como TypeScript fonte, sem build

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0001](0001-monorepo-com-pasta-de-testes.md), [ADR 0092](0092-npm-workspaces.md)

## Contexto

O app consome os pacotes `rules-engine` e `ai-provider`, que também são testados pelo Jest (ADR 0082). As opções eram consumir o TypeScript fonte direto ou compilar cada pacote para `dist/` com project references (`tsc --build`) e consumir o JavaScript gerado.

## Decisão

Os pacotes internos são consumidos como **TypeScript fonte, sem build**:

- O `package.json` de cada pacote aponta para `src/index.ts`.
- O Metro e o Jest compilam o TypeScript direto.
- Um `tsconfig.base.json` na raiz é estendido por cada pacote e pelo app, e o typecheck roda em todos eles.

## Consequências

- Não há passo de build nem watch: uma mudança num pacote aparece no app e nos testes na hora.
- A CI economiza uma etapa.
- Os limites entre pacotes ficam menos rígidos que com project references. O lint (ADR 0094) ajuda a evitar importações indevidas.
- Os pacotes não podem ser publicados no npm sem antes ganhar um build. O MVP não precisa publicá-los.
