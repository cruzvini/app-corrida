# ADR 0088: Fluxos cobertos pelo E2E do MVP

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0083](0083-e2e-com-maestro.md), [ADR 0086](0086-gates-obrigatorios-em-todo-pr.md)

## Contexto

O E2E fica no topo da pirâmide (ADR 0011), então cobre poucos fluxos, os críticos. Faltava escolher quais, com base nas jornadas de [`docs/fluxos.md`](../fluxos.md).

## Decisão

O E2E com o Maestro cobre quatro fluxos, um por jornada crítica:

1. **Onboarding e setup do plano** (jornadas 1 a 3): login pelo link mágico, conexão com o Strava, setup completo e o plano gerado.
2. **Treino do dia e conclusão** (jornada 4): a aba Hoje, o detalhe do treino e o treino marcado como feito pela atividade importada.
3. **Replanejamento** (jornada 6): um ajuste pelas ações prontas e uma conversa com o Piu que altera o plano.
4. **Caixa de entrada** (jornada 5): o feedback chega depois da importação, e o usuário abre e lê a mensagem.

O E2E roda sem serviços externos reais:

- **Strava:** usa o dublê do ADR 0076.
- **IA:** usa o provedor fake (ADR 0005).
- **Link mágico:** é capturado no Supabase local, sem enviar e-mail de verdade.

## Consequências

- Cada fluxo é implementado no épico que entrega a funcionalidade dele, e não todos de uma vez.
- O ambiente de E2E precisa de dados semeados e de um relógio controlável, para testar a rotina das 22h e a semana do plano.
- Variações e casos de erro dessas jornadas ficam nos testes unitários e de integração, não no E2E.
