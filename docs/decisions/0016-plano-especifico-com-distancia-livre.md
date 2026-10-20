# ADR 0016: Plano específico com distância livre

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O plano específico (ADR 0008) tem como alvo uma prova ou uma meta de PR. Limitar a algumas distâncias fixas (5, 10, 21, 42 km) simplifica o motor de regras, mas tira flexibilidade, que é o valor central do app.

## Decisão

No plano específico, o usuário informa qualquer distância de prova ou de meta. O MVP não restringe a distâncias pré-definidas.

## Consequências

- O motor de regras (ADR 0004) precisa gerar planos parametrizados pela distância, e não por modelos fixos por prova.
- É preciso decidir como o app lida com metas incompatíveis com o nível ou com o prazo (ex.: não praticante com uma meta longa em pouco tempo).
- Os testes precisam cobrir distâncias variadas e casos de borda (distâncias muito curtas ou muito longas).
- A IA (ADR 0005) pode ajudar a explicar e ajustar planos para distâncias incomuns, mas os limites de segurança ficam nas regras.
