# ADR 0220: Tela "Conecte o Strava" só entra no app no épico de Integração Strava

- **Status:** Aceita
- **Data:** 2026-11-16
- **Revisa:** [ADR 0127](0127-app-mobile-em-fatias-verticais.md)
- **Complementa:** [ADR 0213](0213-strava-opcional-com-agora-nao.md) e [ADR 0219](0219-e2e-cobre-o-modo-manual.md)

## Contexto

O app é entregue em fatias verticais (ADR 0127). O onboarding entra no épico Backend Supabase e o fluxo 1 do E2E fica completo no épico do motor de regras, mas a conexão com o Strava só funciona no épico de Integração Strava. Com o ADR 0219, o fluxo 1 passa pelo "Agora não" da tela "Conecte o Strava". Faltava decidir o que acontece com essa tela enquanto a conexão não existe.

As opções eram: a tela só entrar no épico do Strava; a tela entrar antes, só com a explicação e o "Agora não", sem o botão oficial; ou deixar a decisão para os cards do épico Backend Supabase.

## Decisão

- Até o épico de Integração Strava, a tela "Conecte o Strava" **não existe no app**. O onboarding vai do login direto ao setup, e o app já nasce em modo manual (ADR 0213).
- Pelo mesmo motivo, o aviso do Hoje que pede a conexão (ADR 0150) e a seção Strava do Perfil (ADR 0201) também só entram no épico do Strava.
- O épico de Integração Strava acrescenta a tela ao onboarding, com o botão oficial e o "Agora não", e o toque em "Agora não" ao fluxo 1 do E2E.

A tabela do ADR 0127 passa a ser:

| Épico | Telas | Fluxo E2E |
| --- | --- | --- |
| Backend Supabase | Login, onboarding e Perfil, sem a seção Strava | parte do fluxo 1 |
| Motor de regras | Setup do plano, plano gerado, Hoje e detalhe do treino, com "Marcar como feito" | fluxo 1 completo, ainda sem a tela do Strava |
| Integração Strava | "Conecte o Strava" com "Agora não", seção Strava do Perfil, aviso do Hoje, treino feito pela atividade e estados de sincronização | toque em "Agora não" no fluxo 1, e fluxo 2 |
| Caixa de entrada | Caixa de entrada, ações prontas e conversa com o Piu | fluxos 3 e 4 |

## Consequências

- Nenhum botão sem função chega ao app: o "Connect with Strava" só aparece quando a conexão funciona.
- Até o épico do Strava, o app inteiro roda em modo manual, e isso já é um estado usável no iPhone.
- O fluxo 1 é alterado uma vez depois de pronto, no épico do Strava, para ganhar o passo do "Agora não".
- O setup feito antes do épico do Strava usa só o nível escolhido à mão, sem sugestão pelo histórico (ADR 0015).
- Como no ADR 0127, a tabela é um ponto de partida. A divisão fina de cada épico é feita nos cards, quando ele for o atual.
