# ADR 0157: Ações diretas no detalhe do treino

- **Status:** Aceita
- **Data:** 2026-11-12
- **Revisa:** [ADR 0076](0076-acoes-e-feedback-no-rodape-do-detalhe.md) (ações no rodapé) e [ADR 0154](0154-cabecalho-e-secoes-do-detalhe.md) (lugar do chip de status)
- **Complementa:** [ADR 0140](0140-direcao-visual-esportiva.md) e [ADR 0142](0142-tons-de-status-e-selos.md)

## Contexto

Na tela de detalhe em alta fidelidade (ADR 0148), as ações do treino eram botões com texto numa linha do rodapé (ADR 0076): "Marcar como feito", "Desmarcar como feito" e "Corrigir divisão", além de "Aceitar", "Editar" e "Descartar" na proposta do Piu. A primeira proposta, com botões principal e secundário em pílula, foi recusada: tudo parecia a mesma coisa, e ela não tinha seguido as skills de design (ADR 0141). A `expo-design-system` pede um botão de destaque por tela e rótulo explícito em controles só com ícone.

Foram comparadas, para as ações diretas: só ícone, ícone com rótulo curto e a ação no próprio elemento. Para o "marcar como feito", foram comparados depois um círculo sem texto, um círculo com rótulo, uma pílula com texto e o texto no rodapé. O círculo sem texto não deixava claro que era um botão.

## Decisão

- **Marcar e desmarcar como feito: pílula de alternância no cabeçalho** do detalhe, logo abaixo da linha de apoio (ou do número em destaque, no treino previsto), no padrão "Seguir / Seguindo":
  - **Desligada:** contorno de 1,5 px em `primaria`, ícone Phosphor `circle` e o texto "Marcar como feito" em `primaria`, 15 px, peso 500.
  - **Ligada:** fundo em `status-feito`, ícone `check` e o status em `sobre-status`: "Feito · Strava" ou "Feito · por você". Tocar desmarca.
  - Pílula (`raio-pilula`) de 44 px de altura. É um controle de alternância, com o estado exposto (ligado ou desligado).
  - **No status feito, a pílula ocupa o lugar do chip de status**, para o status não aparecer duas vezes. Nos outros status (previsto, pendente e não feito), o ChipDeStatus fica na linha de apoio, antes da data, e não mais à direita do título.
  - No não feito, o aviso das 22h passa a dizer "Se você treinou, marque como feito e o ajuste é revisto".
- **Corrigir divisão:** tocar no card da divisão, que ganha o ícone `pencil-simple` em `primaria` no canto direito, com área de toque de 44 px. Só na musculação feita.
- **Proposta do Piu:** "Aceitar", "Editar" e "Descartar" viram **botões de ícone com rótulo**: círculo de 44 px com o ícone (`check`, `pencil-simple` e `x`) e o rótulo de 12 px, peso 500, em `texto-secundario` embaixo. Aceitar é preenchido em `primaria` com o ícone em `sobre-primaria`; os outros têm contorno de 1 px e ícone em `primaria`.
- **Botões com texto** ficam só para "Replanejar com o Piu" (treino previsto) e para o diálogo de confirmação.
- **Rodapé:** perde a linha de ações nos status feito, não feito e pendente. Fica o campo de feedback e o acesso ao Piu, e, no treino previsto, "Replanejar com o Piu".
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Pílula desligada: texto, ícone e contorno em `primaria` sobre `fundo` | 6,6:1 | 9,1:1 |
  | Pílula ligada: texto e ícone em `sobre-status` sobre `status-feito` | 4,6:1 | 8,4:1 |
  | Pílula ligada sobre `fundo` | 4,4:1 | 8,4:1 |
  | Lápis e botões de ícone em `primaria` sobre `superficie` | 7,1:1 | 7,9:1 |
  | Ícone de Aceitar em `sobre-primaria` sobre `primaria` | 7,1:1 | 9,1:1 |
  | Rótulo dos botões de ícone em `texto-secundario` sobre `superficie` | 6,8:1 | 7,1:1 |

  No tema claro, o texto da pílula ligada fica perto do limite de 4,5:1. Por isso o texto não desce abaixo de 15 px com peso 500.

## Consequências

- O cabeçalho do detalhe mostra o status e a ação de feito no mesmo lugar, e o rodapé fica mais curto.
- O ADR 0076 continua valendo para o feedback e o acesso ao Piu no rodapé; as ações de feito e de divisão saem de lá.
- No ADR 0154, o chip deixa de ficar à direita do título e passa para a linha de apoio; no status feito, a pílula o substitui.
- O design system Live Run ganha os componentes AlternarFeito e BotaoDeIcone, e o CabecalhoDoDetalhe e o ChipDeStatus são atualizados (ADR 0143).
