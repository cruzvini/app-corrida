# ADR 0104: Prazo sugerido em "Completar uma distância" é calculado pelas regras

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

No objetivo "Completar uma distância", a data é opcional, e sem ela o app sugere um prazo (ADR 0103). Foram avaliados: calcular o prazo pelas regras ou pedir uma proposta à IA.

## Decisão

O prazo sugerido é calculado pelo **motor de regras** (`packages/rules-engine`), sem IA:

- A entrada é a distância, o nível (ADR 0015), a frequência semanal (ADR 0097) e o histórico recente do Strava (ex.: maior distância contínua nas últimas semanas).
- O cálculo usa um limite de progressão semanal para chegar à distância com segurança.
- O app mostra o prazo com uma explicação curta (ex.: "6 semanas, pelo seu nível e pelas corridas recentes"), e o usuário aceita ou ajusta.
- Se o usuário ajustar para um prazo mais curto que o calculado, entra o aviso de risco, sem bloquear (ADR 0017).

## Consequências

- A sugestão é previsível, funciona sem IA e é coberta por testes unitários, com distâncias e níveis variados.
- Os limites de progressão serão definidos no épico "Motor de regras", junto com os do aviso de risco.
- O mesmo cálculo pode ser reaproveitado para avaliar o prazo informado no "Melhorar o tempo".
