# ADR 0227: Supabase CLI como devDependency fixada na raiz

- **Status:** Aceita
- **Data:** 2026-11-19
- **Complementa:** [ADR 0003](0003-backend-supabase.md), [ADR 0136](0136-gates-ativos-desde-o-setup.md)

## Contexto

O card #19 sobe o Supabase local com o CLI, na máquina e na CI. O CLI pode entrar como devDependency do npm, ser baixado na hora com `npx supabase@x.y.z` ou ser instalado globalmente (Scoop no Windows, a action `supabase/setup-cli` na CI).

## Decisão

O pacote `supabase` entra como devDependency da raiz, com a versão fixada no `package-lock.json`. Os comandos usam `npx supabase ...`, que pega essa versão.

## Consequências

- A máquina de desenvolvimento e a CI usam a mesma versão do CLI, e a atualização é uma mudança no lock, revisada em PR.
- O CLI depende do Docker. Para rodar o Supabase local, o Docker Desktop precisa estar no ar.
- O CLI fica no `node_modules` mesmo para quem não mexe no backend.
