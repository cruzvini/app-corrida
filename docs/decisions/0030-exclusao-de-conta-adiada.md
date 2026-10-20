# ADR 0030: Exclusão de conta e dados fora do MVP

- **Status:** Adiada
- **Data:** 2026-10-20

## Contexto

A LGPD garante ao titular o direito de pedir a eliminação dos seus dados pessoais. O app trata dados de saúde (perfil, treinos, feedbacks) e tem acesso ao Strava. No MVP, o app começa como protótipo pessoal (ADR 0009).

## Decisão

A exclusão de conta e de dados pelo app não entra no MVP.

## Consequências

- O escopo do MVP fica menor.
- Enquanto a funcionalidade não existir, um pedido de exclusão precisa ser atendido manualmente, direto no banco.
- O modelo de dados deve facilitar a exclusão futura (ex.: dados ligados ao usuário com exclusão em cascata), para não precisar de retrabalho depois.
- Antes de abrir o app para amigos e família, este ADR deve ser reavaliado, junto com o ADR 0029 (dados enviados à IA) e o ADR 0013 (questionário de prontidão).
