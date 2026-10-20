# ADR 0046: Atividades compatíveis do mesmo dia são somadas como um treino

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

A regra de correspondência liga uma atividade ao treino previsto quando os dois são do mesmo dia e da mesma modalidade (ADRs 0025 e 0045). O mesmo dia pode ter mais de uma atividade compatível para um único treino previsto. Por exemplo, o aquecimento e o treino gravados em arquivos separados, ou uma corrida de manhã e outra à noite.

## Decisão

Todas as atividades compatíveis do dia são somadas e contam juntas como o treino previsto.

- O resumo do treino mostra a distância e a duração totais e o pace médio ponderado pela distância.
- Se a soma ficar muito acima do previsto, vale a regra de carga do ADR 0027.
- Se o dia tiver um treino previsto de cada modalidade (corrida e musculação), cada grupo de atividades é ligado ao treino da própria modalidade.

## Consequências

- O caso comum de aquecimento ou desaquecimento gravado à parte não gera carga fora do plano por engano.
- A regra de correspondência passa a agrupar atividades por dia e modalidade. Isso fica coberto por testes unitários no motor de regras.
- Desmarcar o treino (ADR 0025) desliga todas as atividades somadas, que passam a contar só como carga.
- A tela de detalhe do treino (ADR 0036) lista as atividades que formaram a soma.
