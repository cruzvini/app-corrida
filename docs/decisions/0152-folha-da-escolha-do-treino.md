# ADR 0152: Folha da escolha do treino

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0069](0069-dia-com-dois-treinos-abre-escolha.md) e [ADR 0142](0142-tons-de-status-e-selos.md)

## Contexto

Tocar num dia com dois treinos na faixa abre uma escolha entre os dois (ADR 0069), em que cada linha mostra o status daquele treino (ADR 0070). Na tela Hoje em alta fidelidade (ADR 0148), a forma da folha era uma proposta nova, sem ADR.

## Decisão

- **Véu** sobre a tela, com o token novo `veu`: preto a 45% no tema claro (`rgba(15, 18, 19, 0.45)`) e a 60% no escuro (`rgba(0, 0, 0, 0.6)`).
- **Folha** que sobe da borda de baixo, em `superficie`, com cantos de 24 px em cima e uma alça de 36 × 5 px em `borda-forte`.
- **Título:** o dia, em 18 px negrito (ex.: "Terça, 10 nov").
- **Uma linha por treino**, com:
  - contorno de 2 px e fundo na cor do status (`status-feito` ou `status-nao-feito`, com o fundo de 12% ou 18%); contorno `borda` de 1 px quando o treino ainda está previsto;
  - ícone da atividade numa caixa de 36 px em `primaria-suave`;
  - nome em negrito e resumo de 13 px em `texto-secundario` (ex.: "Feito · 5,1 km · 6:28/km");
  - seta `caret-right` no fim. Tocar na linha abre o detalhe do treino.
- Contrastes: resumo sobre o fundo de status de 5,8:1 (claro) e de 4,9:1 a 5,1:1 (escuro); contorno sobre a superfície de 4,6:1 a 8,6:1.

## Consequências

- O design system Live Run ganha o token `veu` e o componente FolhaDeEscolha (ADR 0143).
- Outras folhas do app podem usar o mesmo véu, a mesma alça e os mesmos cantos.
