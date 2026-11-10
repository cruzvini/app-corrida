# ADR 0100: Boas-vindas só com uma frase e o campo de e-mail

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O onboarding começa pelo login por e-mail com link mágico (ADRs 0020 e 0037). Foram avaliados: uma tela só, com uma frase sobre o app e o campo de e-mail, ou 2 a 3 telas de apresentação antes do e-mail. Também foi avaliado pedir o e-mail só no fim do setup, com sessão anônima, e a decisão foi manter o e-mail no começo.

## Decisão

- A primeira tela tem o nome do app, **uma frase** sobre ele e o **campo de e-mail**, com "Receber link de acesso".
- Não há telas de apresentação.
- O cadastro por e-mail continua sendo o **primeiro passo** do onboarding.

## Consequências

- A entrada é rápida. O app é para amigos e família, que já chegam sabendo do que se trata.
- O Piu se apresenta na primeira conversa, sem tela própria para isso.
- A sessão existe desde o começo, então as respostas do setup e os tokens do Strava ficam ligados ao usuário sem sessão anônima.
