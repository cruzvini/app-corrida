# ADR 0158: Rodapé fixo do detalhe do treino

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0076](0076-acoes-e-feedback-no-rodape-do-detalhe.md), [ADR 0078](0078-replanejar-treino-com-o-piu.md) e [ADR 0157](0157-acoes-diretas-no-detalhe.md)

## Contexto

O ADR 0076 colocou o feedback e o acesso ao Piu numa área fixa no rodapé do detalhe do treino, acima da barra de abas, e o ADR 0157 tirou de lá as ações de feito e de divisão. Na tela de detalhe em alta fidelidade (ADR 0148), a forma do rodapé e do campo de mensagem era uma proposta nova.

O campo tinha contorno em `borda`, com 1,4:1, e depois em `borda-forte`, com 2,8:1 no tema claro. Um campo de texto é um controle e precisa de 3:1 contra o que está em volta. Foram comparados: contorno em `borda-forte` (2,8:1 e 3,4:1), campo preenchido em `neutro-suave` sem contorno (1,2:1 nos dois temas) e contorno em `texto-secundario`. As skills de design (ADR 0141) também pedem para evitar botões desativados.

## Decisão

- **Área:** em `superficie`, acima da barra de abas, com uma linha em `borda` só no topo, como separador. Padding de 12 px em cima e 16 px nas laterais, com espaço embaixo para o Hoje elevado da barra de abas (ADR 0147).
- **Conteúdo, de cima para baixo:**
  - "Replanejar com o Piu", só no treino previsto: botão com texto em pílula, em `primaria` com `sobre-primaria`, 44 px de altura (ADR 0078). É o único botão de destaque da tela.
  - O **campo de mensagem**.
  - O link "Falar com o Piu sobre este treino", nos outros status: ícone `chat-circle`, texto em `primaria`, peso 500, e `caret-right` no fim, com área de toque de 44 px.
- **Campo de mensagem:** pílula de 44 px de altura, fundo em `fundo`, **contorno de 1 px em `texto-secundario`** e texto de exemplo em `texto-secundario`, que muda com o status (ex.: "Como foi? Escreva antes ou depois", "Mais alguma coisa?", "O que aconteceu?").
- **Botão de enviar:** redondo, de 44 px, em `primaria`, com o ícone `paper-plane-right` em `sobre-primaria` e o rótulo acessível "Enviar". **Fica sempre ativo**: com o campo vazio, tocar nele só põe o cursor no campo.
- Com o teclado aberto, o rodapé sobe junto com ele (ADR 0076).
- **O mesmo contorno vale para o campo "Como foi?" do card do Hoje** (CardDoTreino), que usava `borda`.
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Contorno do campo sobre `superficie` / `fundo` | 6,8:1 / 6,4:1 | 7,1:1 / 8,1:1 |
  | Texto de exemplo sobre `fundo` | 6,4:1 | 8,1:1 |
  | Ícone de enviar e "Replanejar com o Piu" (`sobre-primaria` sobre `primaria`) | 7,1:1 | 9,1:1 |
  | Link do Piu (`primaria` sobre `superficie`) | 7,1:1 | 7,9:1 |

## Consequências

- O campo de mensagem fica fácil de achar nos dois temas, com o mesmo desenho no detalhe e no Hoje.
- Sem botão desativado, o enviar não precisa de um estado de baixo contraste.
- O design system Live Run ganha o componente RodapeDoTreino, e o CardDoTreino passa a registrar o contorno do campo (ADR 0143).
- O mesmo campo pode ser usado no Piu, na tela que vem depois.
