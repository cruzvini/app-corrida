# ADR 0070: Ícone da modalidade e cor de status no contorno do dia na faixa de 7 dias

- **Status:** Aceita
- **Data:** 2026-11-09 (corrigido em 2026-11-10)

## Contexto

O ADR 0065 definiu que os dias passados da faixa de 7 dias mostram ✓ quando feitos e ✗ quando não feitos. Esse símbolo não diz qual treino era o do dia e não resolve o dia com corrida e musculação em que só um dos dois foi feito.

## Decisão

Cada dia da faixa mostra **um ícone por treino do dia**: um para corrida e um para musculação. Dia com os dois treinos mostra os dois ícones. Dia de descanso não mostra ícone. Os ícones ficam na **cor padrão do app**.

O status aparece na **cor do contorno do dia**:

- **Verde:** feito.
- **Vermelho:** não feito.
- **Contorno padrão:** ainda planejado, ou pendente porque não foi possível sincronizar com o Strava (ADR 0049).

A mesma regra vale para as linhas da escolha do treino (ADR 0069): o contorno de cada linha mostra o status daquele treino.

O tipo abreviado do treino (ex.: Int, Leve, Sup) continua abaixo do número do dia.

**Em aberto:** a cor do dia com dois treinos em que um foi feito e o outro não (ex.: amarelo, ou verde com um pequeno selo de aviso).

## Consequências

- O ADR 0065 fica revisado neste ponto: o ✓ e o ✗ saem da faixa.
- Verde e vermelho são cores de status e não fazem parte do acento da marca. Os tons finais são definidos no card 5 (identidade visual). Até lá, os wireframes usam um verde e um vermelho provisórios. Isso abre uma exceção à regra de wireframes sem cor do ADR 0063.
- Os ícones de corrida e de musculação passam a ser ícones do sistema do app, a desenhar no card 5.

## Correção

A primeira versão deste ADR, de 2026-11-09, colocava a cor de status nos ícones. Isso não era o que o usuário tinha pedido: a cor vai no contorno do dia, e os ícones ficam na cor do app. O texto foi corrigido em 2026-11-10.
