# Design, marca e fluxos (épico #2)

Notas vivas do épico de design. As decisões fechadas viram ADR em `docs/decisions/`. A base são as 6 jornadas e os critérios de aceitação validados em [`concepcao.md`](concepcao.md).

## Cards do épico

1. [x] Nome e tom de voz: nome do app (**Live Run**, [ADR 0032](decisions/0032-nome-do-app-live-run.md)) e tom de voz (**parceiro de treino**, [ADR 0033](decisions/0033-tom-de-voz-parceiro-de-treino.md)).
2. [x] Navegação: telas principais e como o usuário circula entre elas. Barra inferior `Plano · Piu · [Hoje] · Notificações · Perfil` ([ADR 0034](decisions/0034-navegacao-por-abas-com-hoje-no-centro.md)); assistente Piu ([ADR 0035](decisions/0035-assistente-de-conversa-piu.md)); tela de detalhe do treino ([ADR 0036](decisions/0036-tela-de-detalhe-do-treino.md)); onboarding e setup em fluxo linear ([ADR 0037](decisions/0037-onboarding-e-setup-em-fluxo-linear.md)); conteúdo do Perfil ([ADR 0038](decisions/0038-conteudo-da-aba-perfil.md)); lesões e limitações no setup ([ADR 0039](decisions/0039-lesoes-e-limitacoes-no-setup.md)).
3. [x] Fluxos: as 6 jornadas desenhadas passo a passo, incluindo os caminhos de erro, em Mermaid em [`fluxos.md`](fluxos.md). As 6 jornadas feitas (ADRs 0040 a 0062).
4. [ ] Wireframes: telas principais em baixa fidelidade, sem cor nem marca. Feitos como artifact HTML ([ADR 0063](decisions/0063-wireframes-em-artifact-html.md)), com o código em [`wireframes/index.html`](wireframes/index.html) e a visualização em https://claude.ai/artifact/ENJW2vupBk27ZNjB8q7Ltf (privado). Primeira tela: Hoje, concluída, com 6 estados (antes do treino, feito, falha no Strava, dois treinos no dia, descanso e escolha do treino) e decisões nos ADRs 0064 a 0074. Segunda tela: detalhe do treino, concluída, com 6 estados (corrida prevista, corrida feita, musculação feita, não feito, replanejar com o Piu e apagar feedback) e decisões nos ADRs 0075 a 0080. Terceira tela: Plano, em andamento, com 6 estados (tela inicial, semanas anteriores abertas, detalhe do plano, adiar objetivo, Editar plano com o Piu e plano genérico) e decisões nos ADRs 0081 a 0084. Em aberto: o que acontece ao tocar numa sugestão do Piu (ponto 5).
5. [ ] Identidade visual: paleta, tipografia e ícone, aplicados sobre os wireframes.
6. [ ] Validação: conferir wireframes e fluxos contra os critérios de aceitação.

## Próximos passos

1. **Próxima pergunta:** no Piu, tocar em "Semana mais leve" aplica a ação pronta na hora ou gera uma proposta do Piu para aceitar (ponto 5 do wireframe do Plano).
