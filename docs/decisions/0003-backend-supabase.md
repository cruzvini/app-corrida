# ADR 0003: Backend: Supabase com Postgres, auth e RLS

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O app é multiusuário. Ele precisa de banco relacional, autenticação e isolamento de dados por usuário, sem manter servidor próprio.

## Decisão

Usar Supabase: Postgres como banco, Supabase Auth para autenticação e Row Level Security (RLS) para garantir que cada usuário acesse apenas seus dados.

## Consequências

- A segurança de dados fica no banco (RLS), e não só no app.
- O schema é versionado por migrations em `supabase/`.
- As políticas de RLS precisam de testes próprios.
- Fica acoplado ao ecossistema Supabase, mitigado pelo uso de Postgres padrão.
