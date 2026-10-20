# ADR 0004: Motor de regras como pacote isolado

- **Status:** Aceita (revisada parcialmente pelo ADR 0022)
- **Data:** 2026-10-19

## Contexto

A lógica de análise de treinos e de geração e ajuste de planos é o núcleo do produto. Ela precisa ser testável, determinística e independente de UI, banco ou IA.

## Decisão

Implementar o motor de regras como pacote TypeScript isolado em `packages/rules-engine`, com funções puras e sem dependência de React Native, Supabase ou provedor de IA.

## Consequências

- Facilita testes unitários, a base da pirâmide (ADR 0011).
- O mesmo motor pode rodar no app ou no backend.
- A IA complementa as regras, sem substituí-las.
- **Revisão (ADR 0022):** a geração do plano passa a ser proposta pela IA. O motor de regras valida a proposta e mantém as ações prontas e as sugestões de nível e pace.
- A interface do pacote precisa ser bem definida e estável.
