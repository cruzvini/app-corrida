# ADR 0163: Diálogo de confirmação próprio

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0077](0077-apagar-feedback-pede-confirmacao.md), [ADR 0140](0140-direcao-visual-esportiva.md), [ADR 0142](0142-tons-de-status-e-selos.md) e [ADR 0152](0152-folha-da-escolha-do-treino.md)

## Contexto

O ADR 0077 pede confirmação para apagar um feedback, a única ação sem desfazer do detalhe do treino. Na tela de detalhe em alta fidelidade (ADR 0148), o diálogo era uma proposta nova, sem ADR.

Foram comparados um diálogo próprio do Live Run e o alerta nativo do sistema. A skill `expo-design-system` (ADR 0141) recomenda o alerta nativo para confirmações sérias. O alerta nativo, porém, muda de aparência entre iOS e Android, o que contraria o design system igual nos dois sistemas (ADR 0140), e no iOS pinta de vermelho a ação destrutiva, o que contraria o vermelho reservado para risco (ADR 0142). Pelo ADR 0141, vale o ADR quando há conflito com uma skill.

## Decisão

- **Diálogo próprio**, igual em iOS e Android:
  - Caixa centralizada em `superficie`, com 24 px de margem nas laterais da tela, cantos de 24 px e padding de 24 px, sobre o `veu` (ADR 0152).
  - Título em 18 px negrito, em `texto` (ex.: "Apagar este feedback?").
  - Texto de apoio em 15 px, em `texto-secundario`, dizendo o que acontece (ex.: "O texto é removido de vez e deixa de ser usado nos próximos ajustes.").
  - Dois botões com texto lado a lado, com a mesma largura e 44 px de altura: **"Cancelar"**, sem fundo, com contorno de 1 px e texto em `primaria`; e a **ação**, preenchida em `primaria`, com texto em `sobre-primaria`.
  - **A ação destrutiva não fica vermelha.** "Apagar" usa `primaria`, como qualquer ação principal.
  - Tocar no véu ou usar o voltar do Android cancela.
- **Uso:** só para ações sem desfazer. Ações que podem ser desfeitas não pedem confirmação.
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Título (`texto` sobre `superficie`) | 17,5:1 | 14,2:1 |
  | Texto de apoio (`texto-secundario` sobre `superficie`) | 6,8:1 | 7,1:1 |
  | Ação (`sobre-primaria` sobre `primaria`) | 7,1:1 | 9,1:1 |
  | "Cancelar", texto e contorno (`primaria` sobre `superficie`) | 7,1:1 | 7,9:1 |
  | Borda da caixa contra o véu | 3,2:1 | 1,2:1 |

  No tema escuro, a borda da caixa contra o véu fica com 1,2:1. A caixa não é clicável, e o título e os botões mantêm contraste alto, então não há ajuste.

## Consequências

- A confirmação tem a mesma cara nos dois sistemas e não abre exceção no uso do vermelho.
- O app assume o que o alerta nativo daria de graça: foco, leitura por leitor de tela (depois do MVP, ADR 0140) e fechamento pelo voltar do Android.
- O design system Live Run ganha o componente DialogoDeConfirmacao (ADR 0143). É o único lugar do detalhe com botões com texto lado a lado (ADR 0157).
