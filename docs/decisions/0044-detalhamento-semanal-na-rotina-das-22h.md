# ADR 0044: Detalhamento da próxima semana na rotina das 22h do último dia da semana

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O ADR 0023 define que as semanas são detalhadas progressivamente, mas deixou o gatilho em aberto. O ADR 0026 já prevê uma rotina diária às 22h, no fuso do usuário, que fecha o dia e marca como não feitos os treinos sem atividade nem marcação.

## Decisão

No **último dia de cada semana do plano**, logo depois da rotina das 22h, o app detalha a semana seguinte com o fluxo "IA propõe, regras validam" (ADR 0022). A entrada são a estrutura do plano, os treinos reais da semana que terminou (feitos e não feitos) e o feedback do usuário (ADR 0028). O app mantém sempre de 1 a 2 semanas detalhadas, e cada semana nova gera um resumo em Notificações (critério 3.8).

## Consequências

- O gatilho fica previsível para o usuário e reaproveita uma rotina já existente.
- Se a IA falhar, a rotina tenta de novo mais tarde. Enquanto isso, a semana já detalhada continua valendo. O comportamento de reserva sem IA segue em aberto para o épico "Motor de regras" (ADR 0031).
- Se uma atividade chegar depois das 22h e reverter um "não feito" (critério 4.7), a semana já detalhada pode ser reavaliada pelo mesmo fluxo de ajuste.
- A semana do plano começa no dia de início escolhido (ADR 0043), então o "último dia da semana" é relativo ao plano, não necessariamente o domingo.
