# ADR 0007: Feedback em caixa de entrada no app, sem push

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O app gera feedback sobre treinos e ajustes de plano. Notificações push exigem configuração adicional (APNs, conta Apple Developer) e aumentam a complexidade.

## Decisão

Entregar o feedback em uma caixa de entrada dentro do app. Não haverá notificações push por enquanto.

## Consequências

- Fica compatível com a execução via Expo Go (ADR 0010).
- O usuário só vê o feedback ao abrir o app.
- Push pode ser adicionado depois, com novo ADR.
