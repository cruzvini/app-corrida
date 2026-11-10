# ADR 0077: Apagar um feedback pede confirmação

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0056 permite apagar um feedback e diz que o texto é removido do banco de dados, sem como recuperar. As ações prontas aplicam na hora e podem ser desfeitas (ADRs 0018 e 0047), mas apagar um feedback não tem desfazer.

## Decisão

Ao tocar em "Apagar" num feedback, o app pede confirmação antes:

- Título: "Apagar este feedback?"
- Texto: o feedback é removido de vez e deixa de ser usado nos próximos ajustes.
- Botões: "Cancelar" e "Apagar".

## Consequências

- Evita perder um feedback por toque acidental.
- É a única confirmação do detalhe do treino, porque é a única ação sem desfazer.
- Ajustes e propostas que o feedback já gerou continuam como estão (ADR 0056), e o texto da confirmação não promete desfazê-los.
