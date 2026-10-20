# ADR 0057: Ação pronta "trocar dia" dentro da semana atual do plano

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

"Trocar dia" é uma ação pronta (ADR 0018) citada nos ADRs 0036, 0041 e 0045, mas o comportamento dela não estava definido. O ADR 0045 também a usa para ligar uma atividade feita em outro dia, o que pode envolver um dia passado. O critério 6.6 diz que treinos passados nunca são alterados por um replanejamento.

## Decisão

O usuário escolhe um dia da **semana atual do plano** (ADR 0043) para onde levar o treino.

- **Hoje ou dia futuro sem treino da mesma modalidade:** o treino muda de dia.
- **Hoje ou dia futuro com treino da mesma modalidade:** os dois treinos trocam de lugar.
- **Dia passado:** só é permitido se o dia tiver uma atividade compatível que ainda não está ligada a nenhum treino. O treino vai para esse dia, é ligado à atividade e fica feito (ADRs 0025 e 0045).
- Em todos os casos, as regras validam a mudança e avisam de riscos sem bloquear (ADR 0017), por exemplo uma corrida intensa depois de inferiores.
- Como toda ação pronta, a troca é aplicada na hora e pode ser desfeita enquanto for o ajuste mais recente (ADR 0047).

## Consequências

- O dia passado é a única exceção ao critério 6.6. A troca só registra o que já aconteceu e não muda nenhum treino passado que já tenha um status.
- Trocas entre semanas diferentes são feitas pelo Piu (ADR 0035).
- A troca é pontual e não altera os dias do Perfil (ADR 0041).
- A ação é determinística e coberta por testes unitários no motor de regras.
