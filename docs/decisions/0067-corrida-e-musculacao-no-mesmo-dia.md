# ADR 0067: Corrida e musculação no mesmo dia: card principal da corrida e card resumido da musculação

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

Os dias de corrida e de musculação são escolhidos separadamente no setup (ADR 0041), então um dia pode ter os dois treinos. O Hoje foi desenhado com um card principal para o treino do dia. Foram avaliados dois cards empilhados do mesmo tamanho e um card principal com outro resumido.

## Decisão

Quando o dia tem corrida e musculação, o Hoje mostra **um card principal e um card resumido**:

- **Principal:** a corrida, com tipo e blocos (ADR 0024). A corrida é o foco do app, e é o treino com mais informação para consultar.
- **Resumido:** a musculação, em uma linha com a divisão do dia (ex.: "Musculação · Superiores") e o status.

Os dois abrem a tela de detalhe do treino correspondente (ADR 0036).

## Consequências

- O card resumido tem o mesmo status (previsto, feito, pendente) do card principal, só que em formato compacto.
- Em dia só de musculação, a musculação ocupa o card principal.
