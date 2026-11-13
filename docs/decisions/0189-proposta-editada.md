# ADR 0189: Proposta editada continua no card, com o chip neutro "Editada"

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0053](0053-editar-proposta-e-conversar-com-o-piu.md), [ADR 0062](0062-proposta-do-piu-na-conversa.md), [ADR 0180](0180-chips-de-status-da-proposta.md) e [ADR 0188](0188-status-final-no-card-da-conversa.md)

## Contexto

Editar uma proposta é continuar a conversa com o Piu: ele devolve uma proposta revisada, que substitui a original, e a original "fica como editada" (ADRs 0053 e 0062). O ADR 0180 definiu os chips "Aguardando você", "Aceita", "Descartada" e "Desatualizada", mas não o de editada, e nenhum estado das telas mostrava a edição.

Foram comparadas três opções: a original continua no card, com o chip neutro "Editada" e sem botões, e a revisada vem depois; a original some da conversa, e só a revisada fica; e a original vira uma linha "Proposta editada", com o link "Ver anterior".

## Decisão

- **"Editada" é mais um status final da proposta.** Na conversa, a original continua no CardDaProposta, com o chip neutro "Editada" à direita do título, o antes e o depois no tom normal e sem botões, como os outros status finais (ADR 0188).
- O chip "Editada" segue os chips neutros do ADR 0180: contorno em `borda-forte`, sem fundo, texto em `texto-secundario`, sem ícone.
- **Ordem na conversa:** a original, a mensagem do usuário com o que quer diferente, a resposta do Piu e a proposta revisada, com os botões Aceitar, Editar e Descartar.
- Tocar em **"Editar"** põe o cursor no campo de mensagem, com a proposta como assunto em andamento. A original só fica "Editada" quando a revisada chega. Se o usuário não enviar nada, a original continua em aberto.
- Uma proposta pode ser editada mais de uma vez. Cada versão anterior fica com o chip "Editada".
- **Em Notificações**, a mensagem da original fica com o chip "Editada" embaixo do título, sem botões, e sai de "Aguardando você". A revisada entra como mensagem nova, se ficar pendente (ADR 0054).
- O chip "Desfeita", da proposta desfeita na conversa (ADRs 0187 e 0188), segue a mesma forma.

## Consequências

- A conversa guarda todas as versões da proposta, com o pedido de mudança entre elas (ADR 0092).
- Nenhum componente novo: só mais um texto no ChipDeStatus.
- O estado "Proposta aceita" da tela Piu passa a mostrar uma edição antes da aceitação.
- O ChipDeStatus do design system Live Run ganha os chips "Editada" e "Desfeita", e o CardDaProposta, o status "Editada" (ADR 0143).
