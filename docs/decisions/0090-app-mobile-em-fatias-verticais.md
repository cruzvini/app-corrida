# ADR 0090: App mobile entregue em fatias verticais

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0081](0081-planejamento-de-testes-e-ci-antes-do-setup.md), [ADR 0088](0088-fluxos-cobertos-pelo-e2e.md)

## Contexto

O ADR 0081 deixou em aberto a posição do trabalho do app mobile (telas em alta fidelidade e implementação) na ordem das etapas, porque ele ainda não tinha um épico. As opções eram um épico próprio logo depois do setup, um épico próprio no fim, ou fatias verticais distribuídas entre os épicos.

## Decisão

Não criar um épico separado para o app. Ele é entregue em **fatias verticais**:

- **Setup do monorepo:** cria a casca do app, com a navegação por abas (ADR 0034), o tema e os tokens do Live Run (ADR 0077).
- **Cada épico seguinte** entrega as telas em alta fidelidade e a implementação das funcionalidades dele, junto com o backend e o fluxo E2E correspondente (ADR 0088):

| Épico | Telas | Fluxo E2E |
| --- | --- | --- |
| Backend Supabase | Login, onboarding e Perfil | parte do fluxo 1 |
| Motor de regras | Setup do plano, plano gerado, Hoje e detalhe do treino | fluxo 1 completo |
| Integração Strava | Conexão com o Strava, treino feito, estados de sincronização | fluxo 2 |
| Caixa de entrada | Caixa de entrada, ações prontas e conversa com o Piu | fluxos 3 e 4 |

## Consequências

- Cada etapa termina com algo usável no iPhone e com o E2E dela passando na CI.
- As telas são feitas já com os dados reais, sem retrabalho de mocks.
- A tabela é um ponto de partida. A divisão fina de cada épico é feita nos cards, quando ele for o atual.
- A ordem das etapas no README não muda, mas cada épico passa a incluir as próprias telas.
