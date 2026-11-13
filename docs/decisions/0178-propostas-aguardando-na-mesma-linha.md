# ADR 0178: Propostas aguardando você com a mesma linha, numa seção no topo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0054](0054-lidas-e-propostas-aguardando.md), [ADR 0087](0087-lista-de-notificacoes-cronologica.md) e [ADR 0177](0177-linha-de-mensagem.md)

## Contexto

As propostas que esperam decisão ficam no topo de Notificações, mesmo depois de lidas (ADR 0054). Faltava decidir, em alta fidelidade, como elas se destacam das mensagens recentes.

Foram comparadas três opções: a mesma linha das recentes, com o destaque só na posição e no título da seção; o grupo em `primaria-suave`; e um card com contorno, como os objetos com ação (ADR 0165).

## Decisão

- As propostas pendentes ficam numa **seção própria, "Aguardando você"**, acima de "Recentes", com o título em `titulo-secao`.
- A seção usa o **mesmo grupo sem contorno e a mesma LinhaDeMensagem** das recentes (ADR 0177). Sem cor de fundo, contorno ou chip extra.
- A linha de apoio começa com **"Proposta:"** e resume a mudança ("Proposta: sexta e domingo mais curtos").
- Depois de lida, a proposta **continua na seção**, sem o ponto e com o título em peso 500. É a seção que indica que falta decidir.
- Com mais de uma proposta pendente, a mais nova vem primeiro.
- **Sem propostas pendentes, a seção some**, sem estado vazio.
- `primaria-suave` continua reservada ao que está selecionado ou é atual (aba, fase, dia) e às mensagens do Piu na conversa.

## Consequências

- A lista tem um só formato de linha, e nenhuma regra visual nova.
- O destaque depende da posição. Se as propostas lidas passarem despercebidas no uso, o fundo em `primaria-suave` pode ser reavaliado.
- O chip "Aguardando você" aparece só dentro da mensagem aberta, e a forma dele fica para a proposta 4 da tela.
- O componente LinhaDeMensagem do design system Live Run ganha a regra da seção (ADR 0143).
