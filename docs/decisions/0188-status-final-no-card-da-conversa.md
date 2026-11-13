# ADR 0188: Na conversa, a proposta com status final continua no card, sem botões

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0062](0062-proposta-do-piu-na-conversa.md), [ADR 0090](0090-conversa-unica-com-o-piu.md), [ADR 0180](0180-chips-de-status-da-proposta.md), [ADR 0183](0183-registro-do-antes-e-depois.md) e [ADR 0187](0187-proposta-aceita-na-conversa.md)

## Contexto

Na conversa com o Piu, as propostas ficam com o status final, e o histórico é mantido (ADRs 0090 e 0092). Em Notificações, o antes e o depois que não vale mais virou registro, num grupo sem contorno e em tom secundário (ADR 0183), que deixou para a tela do Piu confirmar se o mesmo padrão vale para "Aceita" e "Descartada".

Foram comparadas três opções: o registro do ADR 0183, num grupo sem contorno e em tom secundário; o card com contorno, sem os botões e com o chip; e uma linha recolhida, que abre o antes e o depois ao tocar.

## Decisão

Na conversa com o Piu, toda proposta com status final **continua no CardDaProposta**:

- Card com contorno em `borda`, como a proposta em aberto, com o título **"Proposta"** e o **chip neutro do status** à direita, na mesma linha (ADR 0180).
- O AntesDepois fica **no tom normal**: o antes riscado em `texto-secundario` e o depois em `texto`, com a seta em `primaria` (ADR 0145).
- **Sem botões** de decisão nem "Desfazer".
- Vale para os status finais da conversa:
  - **Descartada:** só o card e o chip.
  - **Aceita**, quando outro ajuste ficou mais recente: o card perde o "Desfazer" e mantém a nota "Plano atualizado", com a data ("Plano atualizado em 11 nov, às 12:34.").
  - **Desfeita:** a nota passa a dizer quando foi desfeita ("Desfeita hoje às 12:50. O plano voltou a como estava antes.").
  - **Desatualizada:** o card e o chip, sem o link para a proposta nova, que vem logo depois na conversa.
- O aviso de risco, se havia, continua no card.
- **Em Notificações nada muda:** o ajuste desfeito e a proposta desatualizada continuam como registro em grupo sem contorno (ADR 0183).

## Consequências

- Na conversa, a proposta tem uma forma só, do começo ao fim. O que distingue a ativa das antigas são os botões e o chip.
- A conversa e Notificações passam a tratar o status final de modos diferentes: na conversa, a proposta faz parte do diálogo e continua como objeto; em Notificações, a mensagem é sobre o ajuste, e o que não vale mais vira leitura.
- O chip é a principal pista de que a proposta não está mais em aberto. Ele é lido pela palavra, e não pela cor.
- Revisa a consequência do ADR 0187 que levava a proposta desfeita na conversa ao registro do ADR 0183.
- O CardDaProposta do design system Live Run ganha a variante de status final na conversa (ADR 0143).
