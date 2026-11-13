# ADR 0205: "Verifique seu e-mail" alinhada à esquerda, com o envelope em círculo e sem ação principal

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0020](0020-autenticacao-email-link-magico.md), [ADR 0202](0202-boas-vindas-com-a-marca-no-alto.md) e [ADR 0203](0203-botao-da-etapa-flutuante.md)

## Contexto

Depois do e-mail, o app pede que o usuário toque no link mágico que chegou (ADR 0020). A tela é de espera: o próximo passo acontece fora do app. O wireframe tinha o título, o texto, "Reenviar link" e "Trocar e-mail".

Foram comparadas três opções: alinhada à esquerda, como as boas-vindas (ADR 0202); centralizada, como uma tela de espera clássica; e com o botão principal "Abrir o app de e-mail". O usuário escolheu a primeira.

## Decisão

- **Alinhada à esquerda**, como as boas-vindas e as outras telas, com o voltar "‹ Voltar" no topo e o bloco 48 px abaixo dele.
- **Ícone do envelope** (`envelope-simple`, 32 px) num círculo de 64 px em `primaria-suave`, com o ícone em `primaria`.
- Título "Verifique seu e-mail" em 24 px, negrito, e o texto em `texto-secundario`, com o e-mail em `texto`, peso 500: "Mandamos um link para vini@exemplo.com. Toque nele neste celular para entrar."
- **Sem ação principal**, porque o próximo passo é no e-mail. No fim da tela, como o botão flutuante do ADR 0203: "Reenviar link" em botão secundário, na largura toda, e "Trocar e-mail" em link, centralizado, embaixo.
- **Sem "Abrir o app de e-mail":** no iOS, ele abre só o Mail da Apple, e quem usa outro app cairia no lugar errado.
- Link expirado ou já usado volta para esta tela com o motivo, e "Reenviar link" manda um novo.
- Contrastes: ícone sobre `primaria-suave` 5,9:1 (claro) e 6,7:1 (escuro); texto 6,4:1 e 8,1:1; "Reenviar link" e "Trocar e-mail" sobre `fundo` 6,6:1 e 9,1:1.

## Consequências

- O onboarding fica com um alinhamento só, do e-mail ao resumo; só "Montando o plano" é centralizada, se a proposta 10 mantiver.
- O design system Live Run ganha o componente VerifiqueOEmail (ADR 0143).
