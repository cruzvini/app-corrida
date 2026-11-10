# ADR 0066: Card do Hoje sem ações rápidas, com as ações só no detalhe do treino

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

O ADR 0036 põe as ações do treino (pular, trocar dia, marcar ou desmarcar como feito, corrigir a divisão da musculação) na tela de detalhe. No wireframe do Hoje ficou em aberto se o card do treino do dia teria atalhos para algumas delas, como marcar feito e pular.

## Decisão

O card do treino no Hoje **não tem ações rápidas**. Ele mostra o treino (ou o resumo da atividade, quando feito) e abre o detalhe ao ser tocado. Todas as ações, incluindo a marcação manual, ficam na tela de detalhe do treino (ADR 0036).

O campo opcional "Como foi?" continua no card depois do treino feito (ADR 0048), porque é um registro e não uma ação sobre o plano.

## Consequências

- A marcação de feito acontece principalmente pelo Strava (ADR 0025). A marcação manual é a exceção e custa um toque a mais.
- O card fica focado nos blocos e no resumo, sem botões competindo com eles.
