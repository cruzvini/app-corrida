# ADR 0099: Nome no Perfil, sugerido pelo Strava

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O app não pedia nome: o login é por e-mail (ADR 0020), e o Perfil mostrava o e-mail no topo. Um nome deixa o Perfil e a conversa com o Piu mais próximos, no tom de parceiro de treino (ADR 0033).

## Decisão

- Meus dados ganha o campo **"Como você quer ser chamado"** (ex.: "Vini").
- No setup, o campo vem preenchido com o primeiro nome do perfil do Strava, e o usuário confirma ou troca.
- O nome aparece no topo do Perfil, com o e-mail abaixo, e o Piu usa o nome nas mensagens.
- O nome é editável no "Editar perfil". Mudar só o nome não abre o Piu, porque não afeta o plano.

## Consequências

- O nome é mais um dado pessoal enviado ao provedor de IA (ADR 0029).
- O critério 2.2 da concepção passa a incluir o nome.
- Revisa os ADRs 0094 e 0095.
