# ADR 0143: Definições de alta fidelidade registradas no design system Live Run

- **Status:** Aceita
- **Data:** 2026-11-10
- **Complementa:** [ADR 0140](0140-direcao-visual-esportiva.md) (artifact primeiro, código depois)

## Contexto

O card 5 passou a tomar decisões de alta fidelidade sobre a base dos wireframes de baixa fidelidade: tons de status, destaque do dia atual, riscado do antes e depois, ícones. Até o ADR 0142, as opções eram mostradas só em prévias no chat, e a decisão ficava só em texto no ADR. O usuário quer ver cada definição e deixá-la registrada num artifact.

Foram avaliados: registrar no design system [Live Run](https://claude.ai/artifact/ScbFpKZfPXDDM42Y7Aawmy), que até então tinha só tokens, README e capa; criar um artifact novo de alta fidelidade, com as opções comparadas e as telas; ou usar os dois.

## Decisão

- **O design system Live Run é o registro visual das definições de alta fidelidade.** Cada definição fechada vira:
  - **Tokens** em `tokens.json`, com valor para os dois temas e uma nota de uso.
  - **Componente** em `components/<Nome>/`, com uma prévia que mostra todos os estados nos dois temas, lado a lado, e um README com as regras de uso e o ADR de origem.
  - **README** do design system atualizado quando a definição muda um princípio.
- **As opções comparadas** continuam aparecendo em prévias no chat, durante a decisão. Só a escolhida vai para o design system.
- **O ADR** continua sendo o registro do porquê, e aponta para o componente no design system.
- O design system é atualizado no mesmo passo em que o ADR é registrado.

## Consequências

- Um lugar só para ver como cada elemento fica, e que depois vira tokens e componentes em React Native (ADR 0133).
- O item 5 do card 5 ("atualizar o design system com as cores de status") deixa de ser um passo à parte: cada definição já atualiza o design system.
- As telas de alta fidelidade, aplicadas sobre os wireframes (item 6 do card 5), ainda precisam de um lugar definido.
- O design system é um artifact privado no Claude. Ele não fica no repositório, então o ADR precisa trazer os valores principais para que a decisão possa ser retomada sem o artifact.
