# ADR 0027: Atividade fora do plano conta como carga e gera ajuste com aviso

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O usuário pode fazer atividades que o plano não previa: uma corrida extra num dia de descanso, uma musculação a mais, ou um treino bem mais longo ou intenso que o previsto. Essas atividades mudam o esforço da semana e podem afetar os treinos seguintes.

## Decisão

Toda atividade sincronizada do Strava conta como carga, mesmo fora do plano. Quando uma atividade extra, ou um treino muito acima do previsto, afetar os próximos treinos, o app ajusta o plano automaticamente e avisa pela caixa de entrada, explicando o que mudou e por quê. É a mesma lógica do treino não feito (ADR 0026).

## Consequências

- O ajuste segue o fluxo "IA propõe, regras validam" (ADR 0022), entra direto no plano e pode ser desfeito (ADR 0018).
- O que conta como "muito acima do previsto" usa só o resumo da atividade (distância, duração, pace médio), sem análise bloco a bloco (ADR 0024). Os limites serão definidos no épico "Motor de regras".
- Atividades que não afetam os próximos treinos (ex.: uma caminhada leve) ficam no histórico, sem ajuste nem aviso.
- Atividades de outras modalidades (ex.: bicicleta, caminhada) também contam como carga. O peso de cada modalidade será definido no motor de regras.
