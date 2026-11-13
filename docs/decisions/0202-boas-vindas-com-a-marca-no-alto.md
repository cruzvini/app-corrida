# ADR 0202: Boas-vindas com a marca à esquerda, no alto, e o campo de e-mail logo abaixo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0100](0100-boas-vindas-so-com-frase-e-email.md), [ADR 0138](0138-identidade-visual.md) e [ADR 0199](0199-campo-que-mudou.md)

## Contexto

A primeira tela do onboarding tem só uma frase sobre o app e o campo de e-mail (ADR 0100). O ícone do app é o Ritmo, uma linha de pulso sobre ardósia (ADR 0138). Faltava a composição em alta fidelidade.

Foram comparadas três opções: a marca e a frase alinhadas à esquerda, no terço de cima, com o campo logo abaixo; a marca centralizada no meio da tela, com o campo e o botão embaixo; e a frase como título, com o nome "Live Run" pequeno acima.

## Decisão

- **Marca à esquerda, no terço de cima**, como os títulos das outras telas: o ícone **Ritmo** de 64 px (raio de 16 px, `primaria` com a linha de pulso em `sobre-primaria`), o nome **"Live Run"** em 32 px, negrito, em `texto`, e a frase em 17 px, em `texto-secundario`: "Seu plano de corrida, do seu jeito. O Piu ajusta o plano sempre que a vida mudar."
- O **campo "Seu e-mail"** (CampoDoFormulario, ADR 0199) vem logo abaixo da frase, a 40 px. Com o teclado aberto, o campo continua visível.
- O botão principal "Receber link de acesso" fica no rodapé fixo, com a nota "Sem senha: você entra pelo link que chega no e-mail." embaixo (forma do rodapé na proposta 2 desta tela).
- E-mail inválido mostra o erro embaixo do campo, em legenda.
- Contrastes: nome sobre `fundo` 16,4:1 (claro) e 16,3:1 (escuro); frase 6,4:1 e 8,1:1; linha de pulso sobre o ícone 7,1:1 e 9,1:1.

## Consequências

- A tela de boas-vindas segue o mesmo alinhamento das demais, sem uma composição de splash à parte.
- A marca aparece inteira, com ícone e nome, só aqui e na tela "Montando o plano".
- O design system Live Run ganha o componente BoasVindas (ADR 0143).
