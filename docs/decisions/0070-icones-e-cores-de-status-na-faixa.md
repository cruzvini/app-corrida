# ADR 0070: Ícone da modalidade com cor de status na faixa de 7 dias

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

O ADR 0065 definiu que os dias passados da faixa de 7 dias mostram ✓ quando feitos e ✗ quando não feitos. Esse símbolo não diz qual treino era o do dia e não resolve o dia com corrida e musculação em que só um dos dois foi feito.

## Decisão

Cada dia da faixa mostra **um ícone por treino do dia**: um para corrida e um para musculação. Dia com os dois treinos mostra os dois ícones. Dia de descanso não mostra ícone.

A **cor de cada ícone** indica o status daquele treino:

- **Verde:** feito.
- **Vermelho:** não feito.
- **Cor da paleta do app:** ainda planejado, ou pendente porque não foi possível sincronizar com o Strava (ADR 0049).

O tipo abreviado do treino (ex.: Int, Leve, Sup) continua abaixo do número do dia.

## Consequências

- O ADR 0065 fica revisado neste ponto: o ✓ e o ✗ saem da faixa.
- Em um dia com dois treinos, cada ícone tem a sua cor. Corrida feita e musculação não feita aparecem com um ícone verde e outro vermelho.
- Verde e vermelho são cores de status e não fazem parte do acento da marca. Os tons finais e a cor do status planejado são definidos no card 5 (identidade visual). Até lá, os wireframes usam um verde e um vermelho provisórios, e o planejado em cinza. Isso abre uma exceção à regra de wireframes sem cor do ADR 0063.
- Os ícones de corrida e de musculação passam a ser ícones do sistema do app, a desenhar no card 5.
