# ADR 0161: Aviso neutro com link

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md) e [ADR 0157](0157-acoes-diretas-no-detalhe.md)

## Contexto

O ADR 0150 definiu o aviso neutro, com um botão principal como ação ("Reconectar o Strava"). No detalhe de um treino não feito (ADR 0026), o aviso explica por que o treino contou como não feito e leva ao ajuste em Notificações. Na tela de detalhe em alta fidelidade (ADR 0148), esse aviso usava um link no lugar do botão, uma variante nova sem ADR. Com um botão principal ali, o aviso disputaria atenção com a pílula "Marcar como feito" (ADR 0157), que é a ação desse status.

## Decisão

- O AvisoNeutro ganha a **variante com link**: mesmo bloco do ADR 0150 (fundo `neutro-suave`, `raio-card`, título em negrito com ícone de 20 px e texto de apoio em `legenda`), com a ação como **link em `primaria`**, peso 500, com `caret-right` no fim e área de toque de 44 px.
- **Quando usar cada um:**
  - **Botão principal:** quando a ação resolve o problema (ex.: "Reconectar o Strava").
  - **Link:** quando a ação só leva a outra tela para ver mais (ex.: "Ver o ajuste em Notificações").
- **Aviso do treino não feito:** ícone `clock`, título "Contou como não feito às 22h", texto "Não havia atividade nem marcação até as 22h, então o plano foi ajustado. Se você treinou, marque como feito e o ajuste é revisto." e o link "Ver o ajuste em Notificações".
- Contrastes: título 15,2:1 (claro) e 12,4:1 (escuro); texto de apoio 5,9:1 e 6,2:1; link 6,1:1 e 6,9:1.

## Consequências

- O aviso informa e oferece o caminho sem competir com a ação principal da tela.
- O componente AvisoNeutro do design system Live Run ganha a variante com link (ADR 0143).
