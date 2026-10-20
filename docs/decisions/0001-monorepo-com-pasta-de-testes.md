# ADR 0001: Monorepo com pasta dedicada de testes

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O projeto tem várias partes que evoluem juntas: o app mobile, o motor de regras, a camada de IA e o backend Supabase. Como é um projeto de aprendizado, cada entrega precisa ser fácil de acompanhar em um só lugar.

## Decisão

Usar um único repositório (monorepo) com `apps/`, `packages/`, `supabase/` e `docs/`. Os testes ficam em uma pasta dedicada, `tests/`, separada do código de produção.

## Consequências

- Mudanças que atravessam várias partes cabem em um único commit ou PR.
- Os pacotes compartilham tipos TypeScript sem publicação.
- A ferramenta de workspaces (npm, pnpm ou yarn) ainda será escolhida no setup do monorepo.
- Com a pasta `tests/`, os testes ficam longe do código que testam. A configuração do runner precisa mapear os caminhos.
