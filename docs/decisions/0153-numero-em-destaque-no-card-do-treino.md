# ADR 0153: Número em destaque no card do treino

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0140](0140-direcao-visual-esportiva.md)

## Contexto

O ADR 0140 colocou a energia visual do app na tipografia, com números grandes de pace, distância e tempo. Na tela Hoje em alta fidelidade (ADR 0148), o número em destaque do card do treino era uma proposta nova, sem ADR.

## Decisão

- **Antes do treino:** o número grande é a **distância total prevista**, no estilo `numero` (30 px, negrito, algarismos tabulares). A duração estimada fica ao lado, no estilo `legenda` (13 px) em `texto-secundario`. Ex.: "8,6 km ~50 min".
- **Treino definido só por tempo** (ex.: "40 min leve"): a **duração** vira o número grande, e não há número ao lado.
- **Treino feito:** três números lado a lado, no estilo novo `numero-medio` (24 px, negrito, algarismos tabulares), cada um com o rótulo embaixo em `legenda`: distância, duração e pace médio.
- O número grande aparece só no card principal do Hoje e no detalhe do treino. Listas e linhas resumidas usam o texto normal.

## Consequências

- O design system Live Run ganha o estilo `numero-medio` e o componente CardDoTreino (ADR 0143).
- Fecha as cinco propostas da tela Hoje em alta fidelidade.
