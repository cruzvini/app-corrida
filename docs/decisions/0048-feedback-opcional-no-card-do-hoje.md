# ADR 0048: Feedback pós-treino como campo opcional no card do Hoje

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O critério 4.10 diz que, depois de um treino, o usuário pode deixar um feedback em texto, se quiser. Como o app não usa push (ADR 0007), o pedido de feedback precisa aparecer dentro do app sem virar uma cobrança. O feedback é usado como contexto nos próximos ajustes (ADR 0028).

## Decisão

Quando o treino passa a feito, seja pelo Strava ou por marcação manual (ADR 0025), o card do treino na aba Hoje mostra o resumo da atividade e um campo opcional "Como foi?".

- O app não mostra lembrete, modal nem pergunta repetida.
- No dia seguinte, o campo some do Hoje, mas continua disponível na tela de detalhe do treino (ADR 0036).
- Treinos não feitos também aceitam feedback pela tela de detalhe (critério 5.3).

## Consequências

- O feedback fica a um toque de distância no momento mais natural, sem interromper o usuário.
- Quem não quer dar feedback não é incomodado, então o app terá menos feedback do que teria com uma pergunta ativa.
- O tratamento do texto (proposta de ajuste, aviso em caso de dor) segue a jornada 5.
