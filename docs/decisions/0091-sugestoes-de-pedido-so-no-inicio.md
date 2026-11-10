# ADR 0091: Sugestões de pedido aparecem só no início de um assunto

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O chat do Piu tem sugestões de pedido, como "Semana mais leve" e "Adiar objetivo" (ADR 0084), e o "Replanejar" de um treino abre com atalhos (ADR 0078). Ficou em aberto se elas ficam sempre visíveis ou só em alguns momentos.

## Decisão

As sugestões aparecem **acima do campo de mensagem**, só quando ainda não há um assunto definido:

- Aparecem ao abrir o Piu, antes de o usuário enviar algo.
- Somem assim que o usuário envia uma mensagem ou toca numa sugestão.
- Voltam na próxima vez que o Piu for aberto, se não houver proposta pendente nem pergunta do Piu esperando resposta.
- As sugestões dependem de onde o Piu foi aberto: atalhos do treino no "Replanejar" e sugestões do plano no "Editar plano com o Piu" e na aba.

## Consequências

- O espaço acima do campo fica livre durante a conversa.
- O app precisa saber se a conversa tem um assunto em andamento (proposta pendente ou pergunta do Piu sem resposta).
- Revisa a posição dos atalhos do ADR 0078, que no wireframe apareciam no meio da conversa.
