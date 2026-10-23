# ADR 0081: Planejamento de testes e CI antes do setup do monorepo

- **Status:** Aceita
- **Data:** 2026-10-23
- **Revisa:** [ADR 0011](0011-estrategia-de-testes-piramide.md)

## Contexto

Na ordem do README, "Testes e CI" era a última etapa (8), depois de todos os épicos de implementação. Mas o setup do monorepo (etapa 3) já precisa definir os comandos de teste, lint e typecheck, a pasta `tests/` e o pipeline com os quality gates do ADR 0011. Se os testes forem planejados só no fim, o setup sai sem os gates e precisa ser refeito, e os épicos do meio são integrados sem a proteção que o ADR 0011 exige.

## Decisão

- **Antecipar o planejamento** do épico "Testes e CI" para logo depois do épico de design, antes do setup do monorepo (*shift-left*).
- O planejamento define as ferramentas (runner, E2E, CI), o que roda em cada PR, o que bloqueia o merge e a cobertura mínima.
- **A implementação do pipeline e dos gates entra no setup do monorepo**, que passa a ser a etapa seguinte.
- Os testes de cada camada continuam dentro do épico dela: motor de regras, Supabase e RLS, Strava (ADR 0076), caixa de entrada.

Nova ordem:

1. Concepção e escopo
2. Design, marca e fluxos
3. Testes e CI (planejamento)
4. Setup do monorepo (inclui o pipeline de CI e os quality gates)
5. Backend Supabase
6. Motor de regras
7. Integração Strava
8. Caixa de entrada de feedback

## Consequências

- Desde o primeiro PR de código, a CI roda lint, typecheck e testes, e o merge depende deles.
- O épico #8 no board passa a ser o atual, e o #3 volta para o Backlog até o planejamento terminar.
- O épico do app mobile (telas em alta fidelidade e implementação) ainda não existe no board; a posição dele na ordem será decidida depois deste planejamento.
