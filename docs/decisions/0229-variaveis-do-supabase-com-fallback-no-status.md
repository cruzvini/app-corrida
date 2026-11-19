# ADR 0229: Variáveis do Supabase nos testes, com fallback no `supabase status`

- **Status:** Aceita
- **Data:** 2026-11-19
- **Complementa:** [ADR 0228](0228-fumaca-da-integracao-pelo-supabase-js.md)

## Contexto

Os testes de integração precisam da URL e da chave secreta do Supabase local. As chaves locais são geradas pelo CLI e mudam conforme a versão. As opções eram exigir variáveis de ambiente (com um passo manual de cópia), ler sempre do `supabase status`, ou ler as variáveis e completar o que faltar pelo `supabase status`.

## Decisão

Os testes leem `SUPABASE_URL` e `SUPABASE_SECRET_KEY`. Se alguma não existir, um `globalSetup` do Jest preenche com a saída do `npx supabase status -o json`. O `.env.example` documenta só os nomes, com o valor em branco.

## Consequências

- Na máquina e na CI, basta subir o Supabase local. Não é preciso copiar chave nenhuma.
- As variáveis permitem apontar os testes para outro ambiente sem mudar o código.
- Nenhum valor de chave vai para o repositório: o `.env.example` não tem valores, e os `.env*` reais estão no `.gitignore`.
