# ADR 0064: Atualização manual do Strava por gesto de puxar e por botão

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

O ADR 0006 deixou para o design a forma da atualização manual do Strava (gesto de puxar ou botão). O backend consulta o Strava no máximo 1 vez a cada 30 minutos por usuário, e dentro desse intervalo o app mostra os dados já sincronizados e quando poderá atualizar de novo (critério 4.2). Foram avaliados: só o gesto de puxar, só um botão e os dois.

## Decisão

A aba Hoje oferece as duas formas, que fazem a mesma coisa:

- **Gesto de puxar** a tela para baixo (pull-to-refresh), padrão do iOS e do Android.
- **Botão de atualizar** ao lado do horário da última sincronização, no topo do Hoje (ex.: "há 12 min"), para quem não conhece o gesto.

As duas pedem a atualização ao backend, que decide se consulta o Strava (ADR 0006). Se ainda não passaram 30 minutos desde a última consulta, o app mostra uma mensagem curta com o horário em que poderá atualizar de novo (ex.: "Já está atualizado. Você pode atualizar de novo às 8:12"), sem tratar isso como erro.

## Consequências

- O horário da última sincronização fica sempre visível no topo do Hoje, junto do botão.
- Durante a consulta, o botão e o gesto mostram o mesmo estado de carregamento, e um segundo pedido não dispara outra consulta.
- O botão não fica desabilitado dentro dos 30 minutos: tocar nele mostra a mensagem com o próximo horário possível.
