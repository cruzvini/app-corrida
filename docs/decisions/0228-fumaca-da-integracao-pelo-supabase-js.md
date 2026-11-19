# ADR 0228: Teste de fumaça da integração passa pela API com o supabase-js

- **Status:** Aceita
- **Data:** 2026-11-19
- **Complementa:** [ADR 0136](0136-gates-ativos-desde-o-setup.md), [ADR 0226](0226-integracao-sem-testes-ate-o-supabase-local.md)

## Contexto

O ADR 0136 pede um teste de fumaça que confirme que o Supabase local responde. Ainda não existe schema. O teste pode conectar direto no Postgres (`pg` com `select 1`) ou passar pela API do Supabase com o `@supabase/supabase-js`, o mesmo cliente que o app vai usar.

## Decisão

O teste de fumaça usa o `@supabase/supabase-js` com a chave secreta do ambiente local e pede à API de admin do Auth a lista de usuários. A resposta só chega se o gateway, o Auth e o Postgres estiverem no ar. O `--passWithNoTests` sai do `test:integration`, como prevê o ADR 0226.

## Consequências

- O teste prova a pilha que o app usa, e não só o banco.
- Os testes de RLS do épico do backend partem do mesmo cliente.
- A chave secreta só existe nos testes. O app usa a chave publicável.
- O `test:integration` falha se o Supabase local não estiver no ar, com uma mensagem que diz como subir.
