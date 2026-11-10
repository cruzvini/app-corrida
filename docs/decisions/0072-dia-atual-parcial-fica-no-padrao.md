# ADR 0072: Dia atual com treino ainda por fazer fica com o contorno padrão

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Na faixa de 7 dias, o contorno do dia mostra o status: verde, vermelho, verde com selo "!" ou padrão (ADRs 0070 e 0071). No dia atual, um treino pode já ter sido feito enquanto o outro ainda está previsto (ex.: corrida de manhã e musculação à noite). Foram avaliados: deixar o contorno padrão até o fim do dia ou aplicar o verde assim que o primeiro treino é feito.

## Decisão

Enquanto o dia atual tiver algum treino ainda previsto, o contorno do dia fica **padrão**, mesmo que outro treino do dia já tenha sido feito.

- Quando todos os treinos do dia estão resolvidos (feitos ou marcados como não feitos), o contorno ganha a cor do status na hora.
- Se algum treino continuar previsto até a rotina das 22h, ele conta como não feito (ADR 0026), e o dia recebe vermelho ou verde com selo "!".
- O status de cada treino continua visível no próprio card do Hoje e na escolha do treino (ADR 0069).

## Consequências

- O verde no dia atual só aparece quando o dia está completo, sem passar a impressão de dia encerrado antes da hora.
- Com uma falha de sincronização, os treinos ficam pendentes (ADR 0049) e o dia segue com o contorno padrão.
