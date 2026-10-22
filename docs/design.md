# Design, marca e fluxos (épico #2)

Notas vivas do épico de design. As decisões fechadas viram ADR em `docs/decisions/`. A base são as 6 jornadas e os critérios de aceitação validados em [`concepcao.md`](concepcao.md).

## Cards do épico

1. [x] Nome e tom de voz: nome do app (**Live Run**, [ADR 0032](decisions/0032-nome-do-app-live-run.md)) e tom de voz (**parceiro de treino**, [ADR 0033](decisions/0033-tom-de-voz-parceiro-de-treino.md)).
2. [x] Navegação: telas principais e como o usuário circula entre elas. Barra inferior `Plano · Piu · [Hoje] · Notificações · Perfil` ([ADR 0034](decisions/0034-navegacao-por-abas-com-hoje-no-centro.md)); assistente Piu ([ADR 0035](decisions/0035-assistente-de-conversa-piu.md)); tela de detalhe do treino ([ADR 0036](decisions/0036-tela-de-detalhe-do-treino.md)); onboarding e setup em fluxo linear ([ADR 0037](decisions/0037-onboarding-e-setup-em-fluxo-linear.md)); conteúdo do Perfil ([ADR 0038](decisions/0038-conteudo-da-aba-perfil.md)); lesões e limitações no setup ([ADR 0039](decisions/0039-lesoes-e-limitacoes-no-setup.md)).
3. [x] Fluxos: as 6 jornadas desenhadas passo a passo, incluindo os caminhos de erro, em Mermaid em [`fluxos.md`](fluxos.md). As 6 jornadas feitas (ADRs 0040 a 0062).
4. [x] Wireframes: 15 telas em baixa fidelidade, sem cor nem marca, no canvas de design do Claude ([Live Run — Wireframes baixa fidelidade](https://claude.ai/artifact/MYRNT6gS5VffsxjzzKgknx), privado). Linha 1: fluxo linear das jornadas 1 a 3; linha 2: abas das jornadas 4 a 6, com links entre as telas. Aprovados em 2026-10-21. A revisão gerou os ADRs [0063](decisions/0063-quantidade-de-dias-com-dias-e-divisao-opcionais.md) (substitui o 0041) e [0064](decisions/0064-acoes-do-treino-no-card-do-hoje-e-no-detalhe.md); o Piu não é citado no setup e será apresentado num tour depois do cadastro (ideia de feature, fora do MVP).
5. [x] Identidade visual: azul-ardósia como cor única, DM Sans, ícones Phosphor e ícone do app **Ritmo** ([ADR 0077](decisions/0077-identidade-visual.md)); marca do Strava ([ADR 0078](decisions/0078-marca-do-strava-no-app.md)). Referências: design system "Live Run" e canvas "Live Run — Ícone do app" (artefatos privados no Claude).
6. [x] Validação: wireframes e fluxos conferidos contra os critérios de aceitação em 2026-10-22, incluindo o que mudou com o épico #6 ([`integracao-strava.md`](integracao-strava.md)).
   - `concepcao.md`: critérios 1.3, 1.4, 2.3, 3.3, 3.4, 4.2, 4.5 a 4.8 e 6.5 atualizados; novos critérios 1.8 (desconectar o Strava) e 4.11 (nota de esforço); requisitos com a fronteira da IA, os tokens no Vault e o limite de atletas.
   - `fluxos.md`: jornadas 1, 2 e 4 atualizadas; na jornada 6, o pulo passa a ser ajustado só pelas regras (ADR 0058 revisado pelo 0067).
   - Wireframes: telas 02, 03, 05, 08, 11, 14 e 15 atualizadas; 4 telas novas de estado (09b aviso de risco, 10b treino feito com nota de esforço e atividade extra, 10c Hoje sem Strava, 15b desconectar o Strava).
   - Decisões da validação: [ADR 0079](decisions/0079-desconectar-o-strava.md) (desconectar segue como falha de sincronização) e [ADR 0080](decisions/0080-piu-sem-o-motivo-dos-ajustes-do-strava.md) (o Piu vê só o antes e o depois nos ajustes do Strava).
   - Escopo dos estados: foram desenhados só os estados ligados a regras novas. Os demais (carregando, erros do link mágico, recusa no OAuth, falha na importação, data de início, falha na geração, atualização manual antes de 30 min, atividade editada ou apagada, desfazer, IA indisponível, limite de mensagens, proposta desatualizada, revisão de mudança no Perfil) ficam como checklist para o épico do app, nas notas cinzas do canvas.

## Próximos passos

O épico #2 (Design, marca e fluxos) está com os 6 cards concluídos. Falta aceitar e encerrar o épico no board.

Pendências que seguem para outros épicos:

- Épico 4: confirmar o Vault no plano gratuito (ADR 0074) e se a política do Strava exige apagar as atividades ao desconectar (ADR 0079).
- Épico do app: desenhar em alta fidelidade os estados listados acima.
