# ADR 0219: E2E cobre o modo manual no fluxo 1 e a conexão com o Strava no fluxo 2

- **Status:** Aceita
- **Data:** 2026-11-16
- **Revisa:** [ADR 0125](0125-fluxos-cobertos-pelo-e2e.md)
- **Complementa:** [ADR 0114](0114-testes-da-integracao-com-o-strava.md), [ADR 0127](0127-app-mobile-em-fatias-verticais.md) e [ADR 0213](0213-strava-opcional-com-agora-nao.md)

## Contexto

O ADR 0125 definiu os quatro fluxos do E2E quando a conexão com o Strava era obrigatória (ADR 0019). O fluxo 1 passava pela conexão, e o fluxo 2 marcava o treino como feito pela atividade importada. Depois disso, o ADR 0213 criou o "Agora não" e o modo manual, e registrou que os testes precisam cobrir esse modo. Nenhum fluxo do E2E passava por ele.

Havia também um problema de ordem: o fluxo 1 fica completo no épico do motor de regras (ADR 0127), mas o dublê do Strava (ADR 0114) só nasce no épico seguinte.

Foram comparadas três opções: levar o fluxo 1 pelo "Agora não" e a conexão com o Strava para o fluxo 2; criar um quinto fluxo só para o modo manual; ou cobrir o modo manual só com testes unitários e de integração.

## Decisão

O E2E continua com quatro fluxos. Os fluxos 1 e 2 mudam, e os fluxos 3 e 4 ficam como no ADR 0125.

1. **Onboarding e setup do plano, em modo manual** (jornadas 1 a 3): login pelo link mágico, "Agora não" na conexão com o Strava, setup completo com o nível escolhido à mão, plano gerado e um treino marcado como feito pela pílula "Marcar como feito" (ADR 0157).
2. **Conexão com o Strava e treino feito pela atividade** (jornada 4): a partir de um usuário com plano em modo manual, a conexão com o Strava pelo Perfil (ADR 0201), a importação da atividade e o treino marcado como feito, com o resumo.
3. **Replanejamento** (jornada 6): sem mudança.
4. **Caixa de entrada** (jornada 5): sem mudança.

O Strava continua sendo o dublê do ADR 0114, a IA o provedor fake (ADR 0005) e o link mágico capturado no Supabase local.

## Consequências

- Os dois modos do app, com e sem Strava, têm um fluxo de ponta a ponta, sem aumentar o número de fluxos nem o tempo de cada PR.
- O fluxo 1 fecha no épico do motor de regras sem depender do dublê do Strava.
- O fluxo 2 começa com dados semeados (usuário com plano em modo manual), como o ADR 0125 já previa para o ambiente de E2E.
- O onboarding com o Strava conectado na hora, com o nível sugerido pelo histórico (ADR 0015), fica sem E2E. Ele é coberto por testes unitários e de integração e pelo teste manual com a conta real (ADR 0114).
- O momento em que a tela "Conecte o Strava" entra no app, e com ela o toque em "Agora não" do fluxo 1, está no [ADR 0220](0220-tela-do-strava-so-no-epico-do-strava.md).
