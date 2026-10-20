# ADR 0020: Autenticação por e-mail com link mágico

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O app precisa de autenticação multiusuário (ADR 0003) e roda via Expo Go, sem conta Apple Developer (ADR 0010). O "Sign in with Apple" costuma exigir essa conta, e e-mail com senha exige um fluxo de recuperação de senha.

## Decisão

Usar o Supabase Auth com login por e-mail e link mágico (magic link): o usuário informa o e-mail, recebe um link e entra sem senha.

## Consequências

- Não há senha para armazenar, esquecer ou recuperar.
- O link precisa abrir o app (deep link). No Expo Go, isso exige configurar as URLs de redirecionamento no Supabase. Esse ponto será validado no setup.
- O envio de e-mails depende do provedor do Supabase, que tem limite de envios no plano gratuito. Para o MVP com poucos usuários, isso é suficiente.
- Login social (Apple/Google) pode ser adicionado depois, com novo ADR.
