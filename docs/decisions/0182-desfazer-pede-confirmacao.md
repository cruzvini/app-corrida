# ADR 0182: Desfazer um ajuste pede confirmação e não tem refazer

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0047](0047-so-o-ajuste-mais-recente-pode-ser-desfeito.md), [ADR 0077](0077-apagar-feedback-pede-confirmacao.md), [ADR 0163](0163-dialogo-de-confirmacao.md) e [ADR 0181](0181-acoes-do-ajuste.md)

## Contexto

Só o ajuste mais recente pode ser desfeito, pela mensagem dele em Notificações (ADRs 0047 e 0094). Os ADRs e os wireframes não diziam o que acontece ao tocar em "Desfazer": se o toque pede confirmação, se dá para refazer e como a mensagem fica depois. A regra do app, até aqui, é confirmar só o que não tem volta (ADR 0077).

Foram comparadas três opções: pedir confirmação, sem refazer; aplicar direto, sem refazer; e aplicar direto, com um "Refazer" enquanto a mensagem for a mais recente, o que exigiria guardar e reaplicar o ajuste no motor de regras.

## Decisão

- Tocar em "Desfazer" abre o **DialogoDeConfirmacao** (ADR 0163):
  - Título: **"Desfazer este ajuste?"**
  - Texto: "O plano volta a como estava antes. Depois disso, não dá para refazer."
  - Botões: "Cancelar" (secundário) e **"Desfazer"** (principal, em `primaria`).
- **Não há "Refazer".** Depois de desfeito, o ajuste não pode ser reaplicado pelo botão. Para mudar de novo, o caminho é falar com o Piu.
- Depois de confirmar, o plano volta ao estado de antes do ajuste, e o usuário continua na mensagem, que passa ao estado **desfeito**:
  - o chip neutro **"Desfeito"** embaixo do título, antes do tipo (mesma forma dos chips neutros do ADR 0180);
  - o antes e o depois em tom secundário, só como registro, com o título "Antes e depois, quando foi feito";
  - uma nota com o ícone `info`: "Desfeito hoje às 12:25. O plano voltou a como estava antes.";
  - sem o botão "Desfazer"; o link "Falar com o Piu sobre este ajuste" continua.
- A mensagem desfeita **continua na lista**, com a linha de apoio "Ajuste automático, desfeito", e segue a regra de exclusão das lidas (ADR 0089).
- Vale para todo ajuste que pode ser desfeito: automático, de ação pronta ou de proposta aceita.
- O ajuste anterior não volta a poder ser desfeito (ADR 0047).

## Consequências

- Um toque sem querer não muda o plano sem volta.
- O motor de regras precisa só de restaurar o estado anterior do ajuste mais recente, sem reaplicar ajustes.
- É a segunda confirmação do app, junto com apagar o feedback (ADR 0077). A regra continua a mesma: confirmar só o que não tem volta.
- Desfazer muda dias do plano. Uma proposta pendente que afete esses dias fica desatualizada e é refeita pelo Piu (ADR 0052).
- A tela Notificações ganha dois estados que não existem nos wireframes: a confirmação e o ajuste desfeito. O fluxo de Notificações em `docs/fluxos.md` passa a ter a confirmação.
- O ChipDeStatus do design system Live Run ganha o chip "Desfeito" (ADR 0143).
