# ADR 0054: Mensagem lida ao abrir e propostas pendentes no topo de Notificações

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Sem push (ADR 0007), o usuário descobre as mensagens pelo selo de não lidas no sino (critério 5.2, ADR 0034). Faltava definir quando uma mensagem conta como lida e como tratar as propostas que ainda esperam decisão.

## Decisão

- Uma mensagem fica lida quando o usuário a abre. Abrir a aba Notificações não marca nada como lido.
- O selo do sino mostra só a quantidade de mensagens não lidas.
- As propostas que esperam decisão ficam no topo de Notificações com a etiqueta "aguardando você", mesmo depois de lidas, até o usuário aceitar, editar (ADR 0053) ou descartar.
- Quando uma proposta vence (ADR 0052) ou é substituída por uma edição, a etiqueta sai, e a mensagem vai para a lista normal, em ordem cronológica.

## Consequências

- O selo é um contador simples e previsível.
- Uma proposta lida mas não decidida não some no meio da lista.
- Cada mensagem guarda o status de leitura e, se for uma proposta, o status de decisão: pendente, aceita, editada, descartada ou desatualizada.
