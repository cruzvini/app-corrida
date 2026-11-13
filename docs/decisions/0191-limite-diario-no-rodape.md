# ADR 0191: Limite diário atingido troca o campo de mensagem por um aviso no rodapé

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0031](0031-controle-de-custos-da-ia.md), [ADR 0093](0093-limite-diario-com-aviso-no-fim.md), [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md) e [ADR 0186](0186-sugestoes-de-pedido-em-botoes.md)

## Contexto

O limite diário de mensagens ao Piu continua como trava, sem contador. Com 5 mensagens ou menos, aparece "Restam N mensagens hoje" acima do campo. No limite, o campo fica desativado até a meia-noite, com o motivo e o que continua funcionando (ADR 0093). Faltava a forma em alta fidelidade.

Foram comparadas três opções: um aviso neutro no fim da conversa, com o campo desativado; a conversa sem mudança e o rodapé trocando o campo por um texto com o motivo; e o Piu avisando num balão, com o campo desativado.

## Decisão

- **A conversa não muda.** O limite não entra como mensagem nem como aviso entre os balões.
- **No limite, o rodapé troca o campo de mensagem e o botão de enviar por um aviso**, na mesma área em `superficie`, com a linha em `borda` no topo:
  - título com o ícone `clock`, de 20 px, e **"Limite de hoje atingido"** em 15 px e negrito, em `texto`;
  - embaixo, em `legenda` e `texto-secundario`: "Você usou as 20 mensagens de hoje. O Piu volta amanhã, à 0h. Os ajustes automáticos e o "Adiar objetivo", no detalhe do plano, continuam funcionando."
- Sem campo, sem botão de enviar e sem sugestões de pedido enquanto durar o limite. À meia-noite, no fuso do usuário, o rodapé volta ao normal.
- **Perto do fim**, com 5 mensagens ou menos, uma linha em `legenda` e `texto-secundario` aparece no rodapé, acima do campo: "Restam 3 mensagens hoje". Ela fica no lugar das sugestões de pedido, se elas estiverem visíveis.
- **Teto mensal da IA** (ADR 0031): o mesmo aviso no rodapé, com o título "O Piu está indisponível" e o texto dizendo que ele volta no mês seguinte e o que continua funcionando.
- O limite não é risco: sem vermelho (ADR 0142).
- Contrastes sobre `superficie`: título 17,5:1 (claro) e 14,2:1 (escuro); texto 6,8:1 e 7,1:1.

## Consequências

- O motivo aparece no lugar onde o usuário tentaria escrever, e a conversa fica só com o diálogo.
- Não há campo desativado na tela, com o contraste baixo que isso traria.
- O RodapeDoTreino do design system Live Run ganha a variante do limite e a linha de mensagens restantes (ADR 0143).
