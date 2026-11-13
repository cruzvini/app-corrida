# ADR 0185: Separador de dia da conversa só com texto, sem hora nas mensagens

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0090](0090-conversa-unica-com-o-piu.md), [ADR 0159](0159-baloes-de-mensagem.md) e [ADR 0184](0184-cabecalho-da-conversa.md)

## Contexto

A conversa com o Piu é uma só, contínua, separada por dia (ADR 0090). O wireframe trazia "Ontem" e "Hoje" entre as mensagens, sem forma definida, e não mostrava a hora de cada mensagem.

Foram comparadas três opções para o separador: só o texto centralizado; o texto numa pílula em `neutro-suave`; e uma linha fina dos dois lados, com o dia no centro.

## Decisão

- O separador de dia é **só texto**, centralizado, em `legenda` (13 px) com peso 500, em `texto-secundario`. Sem linha, sem pílula e sem fundo.
- **Texto:** "Hoje", "Ontem" e, antes disso, o dia por extenso, como "Segunda, 9 nov".
- Aparece **uma vez por dia**, antes da primeira mensagem daquele dia. O dia atual só ganha o separador quando tem mensagem, ou quando a aba é aberta sem assunto em andamento e as sugestões de pedido estão visíveis (ADR 0091).
- **As mensagens da conversa não mostram a hora.** A hora continua só onde ela informa algo: na linha de estado do feedback (ADR 0160), na nota da proposta aceita e nas mensagens de Notificações (ADR 0179).
- Espaço de 12 px acima e abaixo, o mesmo que separa os blocos da conversa.
- Contraste do texto sobre `fundo`: 6,4:1 (claro) e 8,1:1 (escuro).

## Consequências

- A conversa tem uma forma a menos. A pílula se confundiria com um chip, e a linha cortaria a conversa como se fossem assuntos separados.
- Sem a hora por mensagem, o app não precisa de uma linha de estado em cada balão da conversa.
- Se a hora fizer falta no uso real, ela pode entrar ao lado do separador ou ao tocar na mensagem, com novo ADR.
- O BalaoDeMensagem do design system Live Run ganha a regra do separador de dia (ADR 0143).
