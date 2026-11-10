# ADR 0097: Frequência semanal no lugar de dias fixos

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0041 fazia o usuário marcar, no setup, os dias da semana de corrida e de musculação, e o plano usava exatamente esses dias. A ideia do app é ser totalmente ajustável, sem prender cada treino a um dia da semana.

## Decisão

- No setup, o usuário informa **quantos dias por semana** quer correr e **quantos** quer fazer musculação, com a divisão em quantidade (ex.: 2 musculações: 1 de superiores e 1 de inferiores, como no ADR 0008).
- **O plano escolhe os dias**, pelo fluxo "IA propõe, regras validam" (ADR 0022). As regras continuam evitando corrida intensa depois de inferiores (critério 3.4).
- A frequência aparece no **detalhe do plano** (ADR 0083). Para mudar a frequência ou o dia de um treino, o usuário conversa com o Piu.

## Consequências

- O usuário não precisa saber de antemão em que dia vai treinar, e o plano pode variar os dias de uma semana para outra.
- O Piu não pergunta mais se uma troca de dia vale "só para esta semana ou para o Perfil", porque não há dias salvos. Um pedido como "longão sempre no sábado" vira contexto para os próximos detalhamentos.
- Corrida e musculação no mesmo dia (ADR 0067) continuam possíveis, quando o plano decidir.
- Substitui o ADR 0041 e revisa os critérios 2.3 e 3.3.
