# ADR 0179: Cabeçalho da mensagem com a assinatura do Piu acima do título

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0050](0050-notificacoes-assinadas-pelo-piu.md), [ADR 0086](0086-mensagem-abre-em-tela-propria.md) e [ADR 0177](0177-linha-de-mensagem.md)

## Contexto

Toda mensagem de Notificações é assinada pelo Piu, com o avatar dele (ADR 0050), e abre em tela própria (ADR 0086). O wireframe mostrava o avatar, "Piu", o tipo e a data, sem título, e o texto logo abaixo. Faltava a forma em alta fidelidade, e o avatar do Piu ainda não existia.

Foram comparadas três opções: o avatar ao lado do título, como o ícone da atividade no detalhe do treino; uma linha de assinatura acima do título, com o avatar pequeno, "Piu" e a data; e o avatar com "Piu", sem título, com o texto num balão, como no wireframe.

## Decisão

- **Voltar:** "‹ Notificações" em `primaria`, como nos outros detalhes.
- **Assinatura**, na primeira linha: o avatar do Piu, **"Piu"** em negrito, em `texto`, e a data em `texto-secundario`, tudo em `legenda` (13 px), numa frase: "Piu, terça, 10 nov, às 22:00".
- **Avatar do Piu:** círculo de **28 px** em `primaria-suave`, com o ícone `chat-circle` preenchido, o mesmo da aba Piu, em `primaria`, com 16 px. É decorativo para leitores de tela, porque o nome vem ao lado.
- **Título** em `titulo` (24 px, negrito), na largura toda, com o mesmo texto da linha da lista (ADR 0177).
- **Tipo da mensagem** embaixo do título, em `legenda` e `texto-secundario`: "Ajuste automático" ou "Proposta". Na proposta, o chip de status vem antes do tipo.
- **Texto do Piu** solto, em `texto` (15 px), sem balão. O balão fica para a conversa (ADR 0159).
- Contrastes sobre `fundo`: título e "Piu" 16,4:1 (claro) e 16,3:1 (escuro); data e tipo 6,4:1 e 8,1:1; ícone do avatar sobre `primaria-suave` 5,9:1 e 6,7:1.

## Consequências

- O nome "Piu" aparece escrito, e fica claro quem fala no texto em primeira pessoa.
- O título usa a largura toda da tela e quebra menos linhas.
- O cabeçalho da mensagem não usa a caixa de ícone do CabecalhoDoDetalhe. São dois cabeçalhos: o do treino e do plano, com o objeto em destaque, e o da mensagem, com quem assina.
- O avatar de 28 px é a referência para a aba Piu, onde o tamanho pode ser revisto.
- O design system Live Run ganha o componente CabecalhoDaMensagem, com o avatar do Piu (ADR 0143).
