# ADR 0026: Treino não feito gera ajuste automático do plano, com aviso

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Um treino não feito afeta os treinos seguintes. Por exemplo: se um treino de inferiores não aconteceu, o descanso ou o treino leve planejado para o dia seguinte talvez não seja mais necessário, e outros treinos podem ser remanejados. Esperar o usuário replanejar manualmente pode deixar o plano incoerente por dias.

## Decisão

Quando um treino é considerado não feito, o app ajusta automaticamente os próximos dias do plano e informa o usuário pela caixa de entrada (ADR 0007), explicando o que mudou e por quê (ex.: "você não fez inferiores na segunda; o descanso de terça virou corrida leve").

## Consequências

- O ajuste segue o fluxo "IA propõe, regras validam" (ADR 0022) e entra direto no plano, como o detalhamento semanal (ADR 0023).
- O usuário pode desfazer o ajuste automático, como a última ação pronta (ADR 0018), ou replanejar do jeito que preferir.
- O aviso mostra o antes e o depois dos dias afetados.
- Se o usuário marcar o treino como feito depois (ADR 0025), o ajuste deve ser revertido ou reavaliado.
- **Quando o treino é considerado não feito:** automaticamente às 22h do mesmo dia, no fuso horário do usuário, se não houver atividade compatível nem marcação de feito. O usuário também pode informar a qualquer momento que o treino não foi ou não será feito (ex.: de manhã, sabendo que não vai treinar à noite), e o ajuste acontece na hora.
- Se uma atividade compatível sincronizar depois das 22h (ex.: treino tarde da noite ou sincronização atrasada), o treino passa a feito e o ajuste é revertido ou reavaliado.
