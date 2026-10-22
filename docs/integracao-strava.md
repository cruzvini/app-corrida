# Integração Strava (épico #6)

Decisões fechadas em 2026-10-22, registradas nos ADRs 0065 a 0076.

## Resumo

- **Fonte:** API do Strava no backend, sem o Strava MCP ([ADR 0065](decisions/0065-api-do-strava-no-backend.md)).
- **Fronteira da IA:** dados do Strava nunca vão para a IA, nem derivados; o Piu vê o plano atual, o texto do usuário, as marcações manuais e a nota de esforço ([ADR 0066](decisions/0066-dados-do-strava-nunca-vao-para-a-ia.md)). Base: seção 5.3 da [Política de API do Strava](https://www.strava.com/legal/api_policy).
- **Ajustes automáticos** disparados pelo Strava: só pelo motor de regras ([ADR 0067](decisions/0067-ajustes-do-strava-so-pelo-motor-de-regras.md)).
- **Histórico:** 12 semanas, só o resumo ([ADR 0068](decisions/0068-historico-de-12-semanas-com-resumo.md)).
- **Modelo de carga:** corrida é o foco; outras atividades declaradas no setup e contadas como carga ([ADR 0069](decisions/0069-outras-atividades-declaradas-como-carga.md)), medida por intensidade × duração, com nota de esforço opcional ([ADR 0070](decisions/0070-carga-por-esforco.md)).
- **Polling:** a cada 2h, das 5h às 23h, mais 22h e atualização manual ([ADR 0071](decisions/0071-polling-a-cada-2h.md)).
- **Permissão:** `activity:read_all`, sem guardar GPS ([ADR 0072](decisions/0072-permissao-activity-read-all.md)).
- **Conciliação:** últimos 7 dias em cada consulta ([ADR 0073](decisions/0073-conciliacao-dos-ultimos-7-dias.md)).
- **Tokens:** schema privado, cifrados com o Vault se for gratuito ([ADR 0074](decisions/0074-tokens-do-strava-no-vault.md)).
- **Limite:** 1 atleta no protótipo, 10 para amigos e família ([ADR 0075](decisions/0075-limite-de-atletas-no-strava.md)).
- **Testes:** Strava falso, servidor HTTP simulado e fixtures sem dados pessoais ([ADR 0076](decisions/0076-testes-da-integracao-com-o-strava.md)).

## Princípio de custo

Custo zero na primeira validação. Etapas com custo são avaliadas uma a uma, conforme o app for aprovado e evoluir.

## Pendências em outros documentos

Entram na validação do épico #2 (card 6):

1. `fluxos.md`, jornada 2: trocar "musculação" pela lista de outras atividades (ADR 0069).
2. `fluxos.md`, jornada 4: ajustes por regras (ADR 0067), conciliação de 7 dias (ADR 0073) e nota de esforço (ADR 0070).
3. `concepcao.md`: critério 2.3 e os critérios que citam análise por IA dos treinos.
4. Wireframes: tela 05 (lista de atividades), card do treino com nota de esforço, tela "por que conectar o Strava" citando atividades privadas, e "desconectar o Strava" no Perfil.
