# ADR 0069: Tocar em um dia com dois treinos na faixa abre a escolha do treino

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

Na faixa de 7 dias do Hoje (ADR 0065), tocar em um dia abre o detalhe do treino (ADR 0036). Um dia pode ter corrida e musculação (ADRs 0041 e 0067), e então há dois detalhes possíveis. Foram avaliados: abrir uma escolha com os dois treinos e abrir direto a corrida.

## Decisão

Tocar em um dia com dois treinos abre uma **escolha rápida** (folha deslizante na parte de baixo da tela) com os dois treinos do dia, cada um com o ícone da modalidade, o tipo ou a divisão e o status. Tocar em um deles abre a tela de detalhe desse treino.

Um dia com um só treino continua abrindo o detalhe direto, sem a escolha.

## Consequências

- Os dois treinos do dia ficam acessíveis pela faixa com no máximo dois toques.
- A folha é um componente novo, que pode ser reaproveitado em outros pontos com mais de um treino no dia (ex.: aba Plano).
