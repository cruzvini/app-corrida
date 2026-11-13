# ADR 0184: Cabeçalho da conversa compacto, com o avatar do Piu, sem avatar nos balões

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0090](0090-conversa-unica-com-o-piu.md), [ADR 0159](0159-baloes-de-mensagem.md), [ADR 0177](0177-linha-de-mensagem.md) e [ADR 0179](0179-cabecalho-da-mensagem.md)

## Contexto

A conversa com o Piu é uma só, e todas as aberturas levam a ela, na aba Piu (ADR 0090). Quando o Piu abre pelo "Replanejar" ou pelo "Editar plano com o Piu", a tela já tem uma linha de navegação com o voltar e "Piu" no centro. O wireframe da aba aberta direto não tinha cabeçalho. O ADR 0179 definiu o avatar do Piu em 28 px na mensagem de Notificações e deixou o tamanho na conversa para ser revisto aqui.

Foram comparadas três opções: cabeçalho compacto com o avatar, sem avatar ao lado dos balões; título grande à esquerda, como nas abas Plano e Notificações, com avatar de 40 px; e cabeçalho só com "Piu", com avatar de 24 px ao lado do último balão de cada sequência do Piu.

## Decisão

- **Cabeçalho compacto**, na linha de navegação (44 px): o avatar do Piu e **"Piu"** em 16 px, negrito, em `texto`, centralizados, com 8 px entre os dois.
- **O mesmo cabeçalho nas duas entradas.** Na aba aberta direto, a linha tem só o avatar e o nome. Quando o Piu abre de um treino, do plano ou de uma notificação, o voltar em `primaria` fica à esquerda ("‹ Plano"), e o centro não muda.
- **Avatar do Piu em 28 px**, o mesmo do CabecalhoDaMensagem (ADR 0179): círculo em `primaria-suave`, com o ícone `chat-circle` preenchido, em `primaria`, com 16 px. É decorativo para leitores de tela, porque o nome vem ao lado.
- **Sem avatar ao lado dos balões.** Na conversa só o Piu e o usuário falam, e o lado, o canto e a cor do balão já dizem quem é (ADR 0159). É o mesmo raciocínio da linha de Notificações (ADR 0177).
- Contrastes: "Piu" sobre `fundo` 16,4:1 (claro) e 16,3:1 (escuro); ícone do avatar sobre `primaria-suave` 5,9:1 e 6,7:1.

## Consequências

- A aba Piu não usa o título de 24 px das abas Plano e Notificações. A altura que sobra fica para a conversa.
- O avatar do Piu tem um tamanho só no app, 28 px, e aparece em dois lugares: no cabeçalho da conversa e na assinatura da mensagem de Notificações.
- As telas "Replanejar com o Piu" (detalhe do treino) e "Editar plano com o Piu" (Plano) ganham o avatar ao lado de "Piu" na linha de navegação.
- O design system Live Run ganha o componente CabecalhoDaConversa, e o BalaoDeMensagem ganha a regra de não ter avatar (ADR 0143).
