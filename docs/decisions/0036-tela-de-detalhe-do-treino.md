# ADR 0036: Tela de detalhe do treino como ponto central das ações

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O treino é a unidade central do app. Ele reúne blocos com pace alvo (ADR 0024), o resultado do Strava (ADR 0025), feedback em texto (ADR 0028) e as ações prontas de replanejamento (ADR 0018). Foram avaliados três padrões: tela própria, folha deslizante (bottom sheet) e expansão no lugar (acordeão).

## Decisão

Tocar em um treino, seja no Hoje, no Plano ou em uma notificação, abre uma **tela de detalhe do treino**, com:

- Tipo do treino e blocos (distância ou duração, pace alvo ou faixa de intensidade).
- Resultado do Strava, quando houver (distância, duração, pace médio).
- Ações prontas do treino: pular, trocar dia, marcar ou desmarcar como feito e, na musculação, corrigir a divisão.
- Feedback em texto sobre o treino.
- Botão "Falar com o Piu sobre este treino", que abre a conversa (ADR 0035) com o treino como contexto.

As ações prontas da semana (semana mais leve e, no plano específico, adiar a prova) ficam no cabeçalho da semana, na aba Plano.

## Consequências

- Um único destino para o treino, partindo de qualquer aba, reduz telas duplicadas.
- A navegação usa uma pilha (stack) sobre as abas (ADR 0034): a tela de detalhe abre por cima e volta para a aba de origem.
- As notificações de ajuste levam à tela do treino afetado.
