# ADR 0006: Strava como fonte inicial, com polling agendado e pull-to-refresh

- **Status:** Aceita (revisada pelos ADRs 0109 e 0111)
- **Data:** 2026-10-19

## Contexto

O app precisa receber os treinos registrados pelo usuário. O Strava concentra os dados da maioria dos corredores e tem API OAuth.

## Decisão

*Revisado pelos ADRs 0109 e 0111: a consulta automática é a cada 2h, das 5h às 23h, mais a das 22h e a manual; cada consulta confere as atividades dos últimos 7 dias.*

Usar o Strava como fonte inicial de dados. Novos treinos são detectados por polling agendado no backend e por pull-to-refresh no app.

## Consequências

- O polling é mais simples de começar que webhooks, mas tem atraso e consome cota da API (os limites de taxa do Strava precisam ser respeitados).
- Os tokens OAuth do Strava são armazenados com segurança no backend.
- **Proteção contra excesso de chamadas (definida em 2026-10-20):**
  - O app nunca chama o Strava diretamente. A atualização manual pede ao backend, e é o backend que decide se consulta o Strava.
  - Limite de **1 consulta ao Strava por usuário a cada 30 minutos**, contando o polling e a atualização manual. Dentro desse intervalo, o app mostra os dados já sincronizados e informa quando poderá atualizar de novo. O intervalo é compatível com a duração típica dos treinos (20 a 30 minutos ou mais).
  - A busca é incremental: só atividades desde a última sincronização.
  - A forma da atualização manual foi definida no épico de design: gesto de puxar e botão ([ADR 0064](0064-atualizacao-manual-puxar-e-botao.md)).
- Webhooks podem substituir o polling no futuro, com novo ADR, principalmente ao abrir para mais usuários.
- Outras fontes ficam para depois (ver ADR 0009).
