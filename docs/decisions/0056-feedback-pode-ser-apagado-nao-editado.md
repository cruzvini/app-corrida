# ADR 0056: Feedback pode ser apagado, mas não editado

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O feedback é texto livre e pode conter dados de saúde (ADR 0028). Ele é usado como contexto nos próximos detalhamentos e ajustes e pode gerar propostas (critério 5.5). Faltava definir se o usuário pode mudar um feedback já enviado.

## Decisão

- Na tela de detalhe do treino (ADR 0036), o usuário pode apagar um feedback. Não há edição.
- O feedback apagado deixa de ser usado como contexto a partir desse momento.
- Ajustes e propostas que o feedback já gerou continuam como estão. A proposta pendente pode ser descartada normalmente.
- Para corrigir um feedback, o usuário apaga e escreve de novo, e o texto novo passa pela análise normal (ADR 0055).

## Consequências

- O usuário controla os próprios dados de saúde sem que o app precise reprocessar a análise de um texto editado.
- Apagar remove o texto do banco de dados, e não só o esconde.
- Um treino pode ter mais de um feedback. Cada um é salvo, analisado e apagado separadamente.
