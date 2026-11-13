# ADR 0177: Linha de mensagem com ponto de não lida, sem avatar

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0050](0050-notificacoes-assinadas-pelo-piu.md), [ADR 0054](0054-lidas-e-propostas-aguardando.md), [ADR 0087](0087-lista-de-notificacoes-cronologica.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

Na lista de Notificações em alta fidelidade (ADR 0148), a forma de cada linha era uma proposta nova, sem ADR. O wireframe trazia o avatar do Piu em todas as linhas, com o ponto de não lida à direita, junto da hora.

Foram comparadas três opções para o lado esquerdo da linha: só o ponto de não lida, sem avatar; um ícone por tipo de mensagem (ajuste, proposta, semana nova); e o avatar do Piu em cada linha, como no wireframe.

## Decisão

- **Sem avatar e sem ícone na linha.** Todas as mensagens são do Piu, então o avatar repetido não diferencia nada. O Piu assina a mensagem na tela própria (ADR 0050).
- As linhas ficam num **grupo sem contorno** em `superficie`, com raio de 12 px (ADR 0165), separadas por uma linha de 1 px em `borda` que começa no texto.
- **Linha:** altura mínima de 64 px, com três colunas.
  - À esquerda, uma coluna de 28 px com o **ponto de não lida**: 8 px, em `primaria`. Na mensagem lida, a coluna fica vazia, para o texto não mudar de lugar.
  - No meio, o **título** em 15 px (`texto`) e a **linha de apoio** em 13 px (`texto-secundario`), em frase, sem ponto médio (ADR 0166). O tipo da mensagem vai na linha de apoio ("Ajuste automático, pode ser desfeito", "Proposta desatualizada").
  - À direita, o **dia e a hora** em 13 px, `texto-secundario`, com algarismos tabulares (ADR 0087).
- **Não lida:** ponto e título em negrito (700). **Lida:** sem ponto e título em peso 500. O estado não depende só da cor.
- **Sem seta à direita.** A linha inteira é tocável e abre a mensagem em tela própria (ADR 0086).
- Para leitores de tela, a linha não lida anuncia "não lida" antes do título.
- Contrastes sobre `superficie`: título 17,5:1 (claro) e 14,2:1 (escuro); apoio e hora 6,8:1 e 7,1:1; ponto 7,1:1 e 7,9:1.

## Consequências

- A lista fica guiada pelo texto, e o olho vai direto ao título e ao ponto.
- O tipo de mensagem não tem ícone próprio. Se a lista crescer e ficar difícil achar um tipo, um ícone por tipo pode ser reavaliado.
- O design system Live Run ganha o componente LinhaDeMensagem (ADR 0143).
- A forma das propostas que esperam decisão, no topo da lista, fica para a proposta seguinte da tela.
