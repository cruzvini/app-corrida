# ADR 0062: Proposta da conversa com o Piu aparece na conversa e vai para Notificações se ficar pendente

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Na conversa livre (critério 6.3), o usuário descreve uma situação (ex.: "vou viajar quinta e sexta") e recebe uma proposta com o antes e o depois, que aceita, edita ou descarta (ADR 0018). Faltava definir onde essa proposta aparece.

## Decisão

- A proposta aparece dentro da conversa com o Piu (ADR 0035), como um card com o antes e o depois, os avisos de risco (ADR 0017) e os botões aceitar, editar e descartar.
- Editar é continuar a conversa. O Piu responde com uma proposta revisada, e a anterior fica marcada como "editada" (ADR 0053).
- Se o usuário sair da conversa sem decidir, a proposta também vai para Notificações com a etiqueta "aguardando você" (ADR 0054).
- A proposta pendente segue a regra de vencimento do ADR 0052, esteja ela na conversa ou em Notificações.

## Consequências

- A decisão acontece no fluxo natural da conversa, sem mudar de tela.
- Nenhuma proposta se perde quando o usuário sai do app.
- A proposta é a mesma nos dois lugares: decidir em um atualiza o outro.
