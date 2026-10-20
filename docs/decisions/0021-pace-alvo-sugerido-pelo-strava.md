# ADR 0021: Pace alvo sugerido a partir do Strava

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O plano específico tem um pace alvo (ADR 0008). Muitos usuários, principalmente iniciantes, não sabem que pace esperar para uma distância. O app já tem o histórico do Strava, que é obrigatório (ADR 0019).

## Decisão

No setup do plano específico, o app sugere um pace alvo a partir do histórico do Strava, considerando a distância e o prazo. O usuário aceita ou ajusta a sugestão.

## Consequências

- O pace alvo segue o mesmo padrão do nível (ADR 0015): o app sugere com base nos dados e o usuário confirma.
- A sugestão precisa ser explicável (ex.: "seu pace médio nos 5 km das últimas 8 semanas foi 6:10/km").
- O cálculo da sugestão (ex.: projeção de tempo por distância) será definido no épico "Motor de regras" e coberto por testes unitários.
- Um pace ajustado muito fora do comum aciona o aviso de riscos (ADR 0017).
- Falta decidir o comportamento sem histórico suficiente para sugerir.
