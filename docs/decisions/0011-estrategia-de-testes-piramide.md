# ADR 0011: Estratégia de testes: pirâmide com quality gates de CI

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O projeto precisa de confiança para evoluir. Também é objetivo de aprendizado praticar testes em todos os níveis.

## Decisão

Seguir a pirâmide de testes: muitos testes unitários (principalmente do motor de regras), uma camada de testes de integração (Supabase, RLS, provedores) e poucos E2E no topo. A CI roda quality gates (lint, typecheck, testes) e um PR só é integrado com todos passando.

## Consequências

- Os testes ficam em `tests/` (ADR 0001).
- O provedor de IA fake (ADR 0005) viabiliza testes determinísticos.
- As ferramentas (runner, E2E, CI) serão escolhidas no épico "Testes e CI".
- Proteção de branch na `main` é recomendada.
