# ADR 0059: Ação pronta "semana mais leve" reduz só a corrida restante da semana

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

"Semana mais leve" é uma ação pronta da semana (ADRs 0018 e 0036) e precisa ser determinística, sem depender da IA. O comportamento dela não estava definido.

## Decisão

A ação vale para os treinos de hoje em diante na semana atual do plano (ADR 0043).

- Os treinos de corrida têm a distância ou a duração reduzidas num percentual fixo.
- Os treinos intensos (ex.: intervalado, tempo) viram rodagem leve.
- Os dias dos treinos e a musculação continuam iguais.
- As semanas seguintes não mudam. A próxima semana é detalhada normalmente na rotina das 22h (ADR 0044), já considerando a semana mais leve como os treinos reais.
- A ação é aplicada na hora, mostra o que mudou e pode ser desfeita enquanto for o ajuste mais recente (ADR 0047).

## Consequências

- O percentual de redução será definido no épico "Motor de regras", com testes unitários.
- Treinos já feitos ou não feitos na semana não mudam (critério 6.6).
- Aplicar a ação duas vezes na mesma semana não reduz de novo: a segunda vez fica indisponível até a ação ser desfeita.
- Para reduzir mais, mexer na musculação ou mudar outras semanas, o usuário conversa com o Piu (ADR 0035).
