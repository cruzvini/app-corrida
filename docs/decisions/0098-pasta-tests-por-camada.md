# ADR 0098: Pasta `tests/` organizada por camada da pirâmide

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0001](0001-monorepo-com-pasta-de-testes.md), [ADR 0011](0011-estrategia-de-testes-piramide.md), [ADR 0086](0086-gates-obrigatorios-em-todo-pr.md)

## Contexto

O ADR 0001 separou os testes em `tests/`, mas não definiu a estrutura interna. A CI roda os testes unitários, os de integração e os E2E como checks separados (ADR 0086). As opções eram organizar por camada da pirâmide ou por pacote.

## Decisão

Organizar `tests/` **por camada da pirâmide**:

```
tests/
  unit/
    rules-engine/
    ai-provider/
    mobile/
  integration/
  e2e/            fluxos do Maestro (ADR 0083)
```

- `unit` e `integration` são projetos separados do Jest, cada um com o próprio comando.
- Dentro de `unit/`, os testes seguem a estrutura do pacote que testam.

## Consequências

- Cada camada corresponde a um check da CI, com o próprio comando.
- A integração entre pacotes (por exemplo, o Supabase com a RLS) tem um lugar natural.
- Para ver todos os testes de um pacote, é preciso olhar em mais de uma pasta.
- A cobertura por pacote (ADR 0087) é medida pelos caminhos do código coberto, e não pela pasta dos testes.
