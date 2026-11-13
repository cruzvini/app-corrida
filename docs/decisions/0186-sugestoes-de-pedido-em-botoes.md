# ADR 0186: Sugestões de pedido em botões secundários, acima do campo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0078](0078-replanejar-treino-com-o-piu.md), [ADR 0085](0085-sugestoes-do-piu-geram-proposta.md), [ADR 0091](0091-sugestoes-de-pedido-so-no-inicio.md) e [ADR 0158](0158-rodape-fixo-do-detalhe.md)

## Contexto

As sugestões de pedido, como "Semana mais leve" e "Adiar objetivo", aparecem acima do campo de mensagem quando a conversa não tem assunto em andamento e somem no primeiro envio (ADR 0091). Tocar numa delas envia o pedido e gera uma proposta do Piu (ADR 0085). Nas telas de alta fidelidade elas só eram citadas na legenda, sem forma definida.

Foram comparadas três opções: botões secundários no rodapé, acima do campo; pílulas em `neutro-suave`, sem contorno, no mesmo lugar; e sugestões dentro da conversa, alinhadas à direita, como respostas prontas.

## Decisão

- As sugestões são **botões secundários**: pílula de 44 px de altura, contorno de 1 px em `primaria`, texto em `primaria` com 15 px e peso 500, sem preenchimento e sem ícone.
- Ficam no **rodapé da conversa, acima do campo de mensagem**, com 8 px entre os botões e 10 px até o campo. Se não couberem numa linha, quebram para a linha de baixo.
- **Quais aparecem** depende de onde o Piu foi aberto (ADR 0091): na aba e no "Editar plano com o Piu", "Semana mais leve" e "Adiar objetivo", esta só no plano específico; no "Replanejar", os atalhos do treino (ADR 0078).
- **Tocar** envia o texto do botão como mensagem do usuário, num balão, e as sugestões somem.
- O rodapé da conversa é o mesmo do detalhe do treino (ADR 0158): área em `superficie`, campo em pílula com contorno em `texto-secundario` e o botão redondo de enviar, sempre ativo. O texto de exemplo do campo é "Mensagem para o Piu".
- Contrastes do botão sobre `superficie`: texto e contorno 7,1:1 (claro) e 7,9:1 (escuro).

## Consequências

- A sugestão parece o que é: uma ação. A pílula neutra se confundiria com o balão do usuário e com os chips de status.
- O único preenchimento em `primaria` do rodapé continua sendo o botão de enviar.
- O espaço acima do campo fica livre durante a conversa, como no ADR 0091.
- O RodapeDoTreino do design system Live Run ganha a variante da conversa, com as sugestões de pedido (ADR 0143).
