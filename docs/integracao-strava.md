# Integração Strava (épico #6)

Decisões fechadas em 2026-10-22, registradas nos ADRs 0105 a 0114.

## Resumo

- **Fonte:** API do Strava no backend, sem o Strava MCP ([ADR 0105](decisions/0105-api-do-strava-no-backend.md)).
- **Fronteira da IA:** dados do Strava nunca vão para a IA, nem derivados; o Piu vê o plano atual, o texto do usuário, as marcações manuais e a nota de esforço ([ADR 0106](decisions/0106-dados-do-strava-nunca-vao-para-a-ia.md)). Base: seção 5.3 da [Política de API do Strava](https://www.strava.com/legal/api_policy).
- **Ajustes automáticos** disparados pelo Strava: só pelo motor de regras ([ADR 0107](decisions/0107-ajustes-do-strava-so-pelo-motor-de-regras.md)).
- **Histórico:** 12 semanas, só o resumo ([ADR 0108](decisions/0108-historico-de-12-semanas-com-resumo.md)).
- **Modelo de carga:** corrida é o foco, e toda atividade sincronizada conta como carga (ADR 0027). Declarar outras atividades no setup e dar uma nota de esforço por treino estão em decisão (ver `design.md`).
- **Polling:** a cada 2h, das 5h às 23h, mais 22h e atualização manual ([ADR 0109](decisions/0109-polling-a-cada-2h.md)).
- **Permissão:** `activity:read_all`, sem guardar GPS ([ADR 0110](decisions/0110-permissao-activity-read-all.md)).
- **Conciliação:** últimos 7 dias em cada consulta ([ADR 0111](decisions/0111-conciliacao-dos-ultimos-7-dias.md)).
- **Tokens:** schema privado, cifrados com o Vault se for gratuito ([ADR 0112](decisions/0112-tokens-do-strava-no-vault.md)).
- **Limite:** 1 atleta no protótipo, 10 para amigos e família ([ADR 0113](decisions/0113-limite-de-atletas-no-strava.md)).
- **Testes:** Strava falso, servidor HTTP simulado e fixtures sem dados pessoais ([ADR 0114](decisions/0114-testes-da-integracao-com-o-strava.md)).

## Princípio de custo

Custo zero na primeira validação. Etapas com custo são avaliadas uma a uma, conforme o app for aprovado e evoluir.

## Reconciliação

Estas decisões foram tomadas em 2026-10-22 num histórico paralelo do repositório e trazidas para o histórico oficial em 2026-11-10, renumeradas como ADRs 0105 a 0117. Os critérios de aceitação e os fluxos das jornadas 1, 2, 4 e 5 foram atualizados com elas na mesma data.
