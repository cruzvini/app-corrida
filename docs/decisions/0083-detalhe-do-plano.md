# ADR 0083: Detalhe do plano com o volume semanal previsto × feito

- **Status:** Aceita (revisada pelo ADR 0094)
- **Data:** 2026-11-10

## Contexto

O gráfico de volume semanal com o previsto e o feito de cada semana foi aprovado no rascunho do Plano, mas como algo para consultar, e não para a tela inicial (ADR 0081).

## Decisão

Tocar no card do objetivo, na tela inicial do Plano, abre o **detalhe do plano**, uma tela por cima da aba (como o detalhe do treino, ADR 0036), com:

- O objetivo completo: tipo de plano, distância, data ou prazo, pace alvo e data de início. *Revisado pelo ADR 0094: o detalhe também mostra a frequência semanal (ADR 0097), e mudar o objetivo ou a frequência é pelo Piu.*
- O **gráfico de volume semanal de corrida**, com o previsto e o feito de cada semana e a semana atual em destaque.
- As fases, cada uma com as suas semanas e o volume previsto.
- O atalho **"Adiar objetivo"**, só no plano específico (ADR 0084).

## Consequências

- O gráfico mostra só dados que o plano já tem (volume previsto e atividades sincronizadas), sem métrica nova. Dashboard e resumo continuam fora do MVP.
- No plano genérico, o detalhe mostra o objetivo e o gráfico, sem fases e sem o atalho.
