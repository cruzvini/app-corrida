# ADR 0155: Chip de não feito

- **Status:** Aceita (texto revisto pelo ADR 0166)
- **Data:** 2026-11-12
- **Complementa:** [ADR 0142](0142-tons-de-status-e-selos.md) e [ADR 0149](0149-chips-de-status-do-treino.md)

## Contexto

O ADR 0149 definiu os chips de status do treino (Previsto, Pendente e Feito · Strava) e deixou o chip de não feito para o detalhe do treino, onde ele aparece pela primeira vez, "no mesmo padrão com as cores de não feito". Na tela de detalhe em alta fidelidade (ADR 0148), a forma final do chip era uma proposta nova.

## Decisão

Chip "Não feito" no mesmo padrão do "Feito · Strava":

- Pílula (`raio-pilula`) de 24 px de altura, texto de 12 px com peso 500.
- **Contorno** em `status-nao-feito`, **fundo** em `status-nao-feito-fundo` e **texto** em `texto`.
- **Ícone** Phosphor `x` preenchido (o quadrado com ✕, par do `check` preenchido do feito), de 14 px, em `status-nao-feito`.
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Texto sobre o fundo de não feito (sobre `fundo` / `superficie`) | 14,1:1 / 15,0:1 | 11,5:1 / 9,8:1 |
  | Ícone sobre o fundo de não feito | 4,0:1 a 4,2:1 | 5,9:1 a 6,9:1 |
  | Contorno sobre `fundo` / `superficie` | 4,6:1 / 4,9:1 | 9,8:1 / 8,6:1 |

## Consequências

- O status continua sendo lido pela palavra; o amarelo só reforça, sem culpa (ADR 0142).
- O componente ChipDeStatus do design system Live Run ganha a variante "Não feito" (ADR 0143).
