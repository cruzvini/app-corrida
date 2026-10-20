# ADR 0005: Provedor de IA agnóstico, com Claude como primeira implementação e fake para testes

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

A IA é usada para interpretar dados e conversar sobre o plano. Os provedores e modelos mudam rápido, e os testes não podem depender de chamadas reais, que são caras e não determinísticas.

## Decisão

Definir uma interface de provedor de IA em `packages/ai-provider`. A primeira implementação usa Claude (Anthropic). Um provedor fake, determinístico, atende os testes.

## Consequências

- É possível trocar ou adicionar provedores sem mudar o restante do código.
- Os testes rodam offline e de forma reprodutível.
- A chave de API fica fora do app cliente (variável de ambiente no backend).
- A interface precisa ser genérica o bastante para não vazar detalhes do Claude.
