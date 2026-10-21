# Design, marca e fluxos (épico #2)

Notas vivas do épico de design. As decisões fechadas viram ADR em `docs/decisions/`. A base são as 6 jornadas e os critérios de aceitação validados em [`concepcao.md`](concepcao.md).

## Cards do épico

1. [x] Nome e tom de voz: nome do app (**Live Run**, [ADR 0032](decisions/0032-nome-do-app-live-run.md)) e tom de voz (**parceiro de treino**, [ADR 0033](decisions/0033-tom-de-voz-parceiro-de-treino.md)).
2. [x] Navegação: telas principais e como o usuário circula entre elas. Barra inferior `Plano · Piu · [Hoje] · Notificações · Perfil` ([ADR 0034](decisions/0034-navegacao-por-abas-com-hoje-no-centro.md)); assistente Piu ([ADR 0035](decisions/0035-assistente-de-conversa-piu.md)); tela de detalhe do treino ([ADR 0036](decisions/0036-tela-de-detalhe-do-treino.md)); onboarding e setup em fluxo linear ([ADR 0037](decisions/0037-onboarding-e-setup-em-fluxo-linear.md)); conteúdo do Perfil ([ADR 0038](decisions/0038-conteudo-da-aba-perfil.md)); lesões e limitações no setup ([ADR 0039](decisions/0039-lesoes-e-limitacoes-no-setup.md)).
3. [x] Fluxos: as 6 jornadas desenhadas passo a passo, incluindo os caminhos de erro, em Mermaid em [`fluxos.md`](fluxos.md). As 6 jornadas feitas (ADRs 0040 a 0062).
4. [x] Wireframes: 15 telas em baixa fidelidade, sem cor nem marca, no canvas de design do Claude ([Live Run — Wireframes baixa fidelidade](https://claude.ai/artifact/MYRNT6gS5VffsxjzzKgknx), privado). Linha 1: fluxo linear das jornadas 1 a 3; linha 2: abas das jornadas 4 a 6, com links entre as telas. Aprovados em 2026-10-21. A revisão gerou os ADRs [0063](decisions/0063-quantidade-de-dias-com-dias-e-divisao-opcionais.md) (substitui o 0041) e [0064](decisions/0064-acoes-do-treino-no-card-do-hoje-e-no-detalhe.md); o Piu não é citado no setup e será apresentado num tour depois do cadastro (ideia de feature, fora do MVP).
5. [ ] Identidade visual: paleta, tipografia e ícone, aplicados sobre os wireframes.
6. [ ] Validação: conferir wireframes e fluxos contra os critérios de aceitação.

## Próximos passos

1. **Próxima pergunta:** identidade visual (card 5): paleta, tipografia e ícone, aplicados sobre os wireframes.
2. Estados ainda não desenhados (erros, carregamento, avisos de risco) estão listados nas notas do canvas e entram na validação (card 6).
