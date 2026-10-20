# ADR 0025: Strava marca o treino como feito, e o usuário corrige

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Depois do treino, a interação do usuário é marcar como feito ou não feito e, se quiser, dar um feedback (ADR 0024). O Strava é obrigatório (ADR 0019) e já registra a maioria dos treinos.

## Decisão

- Quando uma atividade sincronizada do Strava é compatível com um treino previsto (mesmo dia e mesma modalidade: corrida ou musculação), o app marca o treino como **feito** automaticamente.
- O usuário pode corrigir: desmarcar um treino marcado, ou marcar como feito um treino sem atividade no Strava (ex.: esqueceu o relógio).
- Na musculação, o treino marcado assume a divisão prevista no plano, e o usuário pode corrigi-la (ADR 0014).

## Consequências

- O app precisa de uma regra de correspondência entre atividade e treino previsto (dia e modalidade), coberta por testes unitários.
- Marcar como feito sem atividade é só um status. Isso não é o registro manual de treinos adiado no ADR 0013: não há distância, tempo nem pace.
- Treinos não feitos geram ajuste automático com aviso (ADR 0026). Falta definir o que acontece com atividades fora do plano.
