# ADR 0053: Editar uma proposta é conversar com o Piu

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Nas propostas de ajuste, seja do feedback (critério 5.5), seja da conversa livre (critério 6.3), o usuário aceita, edita ou descarta antes de aplicar (ADR 0018). Nenhum ADR definia o que é "editar".

## Decisão

O botão "Editar" abre o Piu (ADR 0035) com o contexto da notificação: a proposta, o antes e o depois, o motivo (ex.: o feedback de origem) e o plano atual. O usuário diz em texto o que quer diferente, e o Piu devolve uma proposta revisada com o antes e o depois, pelo fluxo "IA propõe, regras validam" (ADR 0022).

- A proposta revisada substitui a original, que fica marcada como "editada" em Notificações.
- A revisão segue as mesmas opções: aceitar, editar de novo ou descartar.
- Nas propostas, o botão "Editar" ocupa o lugar de "Conversar com o Piu sobre isso" (ADR 0050), para a mesma ação não aparecer duas vezes.

## Consequências

- O app não ganha uma tela de edição manual de treinos no MVP.
- O fluxo é o mesmo do "pedir ajustes" da revisão do plano na jornada 3 (critério 3.7).
- Cada edição gera uma chamada à IA, sujeita ao controle de custos (ADR 0031).
- Uma edição manual pode ser avaliada depois do MVP, com novo ADR.
