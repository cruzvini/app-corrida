# ADR 0075: Detalhe do treino mostra os paces em lista e compara previsto e feito só no geral

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0024 pede que o plano mostre como o pace alvo muda de um bloco para o outro. O rascunho do detalhe do treino (ADR 0063) desenhou uma barra de ritmo por bloco, e na corrida feita mostrava o previsto abaixo do resultado, sem comparação.

## Decisão

- **Sem barras de ritmo.** No treino previsto, os blocos aparecem em lista, cada um com o pace previsto.
- **No treino feito**, aparece o que foi executado, vindo do resumo do Strava (distância, duração e pace médio), e o previsto continua em lista abaixo.
- **Comparação só no geral:** o treino feito mostra lado a lado o previsto e o feito do dia (distância, duração e pace médio). Não há comparação bloco a bloco.

## Consequências

- Continua valendo o ADR 0024: sem análise bloco a bloco e sem precisar dos dados detalhados da atividade.
- O pace médio previsto é calculado a partir dos blocos (distância e pace de cada um).
- Sem meta de pace (ADR 0021), os blocos usam faixas de intensidade, e a comparação mostra só distância e duração.
- É a mesma comparação pelo resumo que o ADR 0027 usa para decidir se um treino ficou muito acima do previsto.
- A musculação não tem comparação, porque o plano não prevê duração nem carga (ADR 0014).
