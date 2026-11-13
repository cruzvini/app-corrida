# ADR 0199: No "Editar perfil", o campo que mudou ganha contorno em ardósia e a legenda com o valor de antes

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0095](0095-editar-perfil-leva-ao-piu.md) e [ADR 0197](0197-editar-perfil.md)

## Contexto

Salvar o perfil grava na hora e abre o Piu com uma mensagem do que mudou, com o valor de antes e o novo ("peso de 72 para 70 kg") (ADR 0095). O wireframe marcava o campo alterado com um contorno tracejado, sem dizer o valor anterior. Faltava a forma em alta fidelidade.

Foram comparadas três opções: contorno em ardósia no campo e a legenda "Era 72 kg" embaixo; um ponto ao lado do rótulo; e nenhuma marcação.

## Decisão

- **Campo do formulário:** rótulo em 13 px, peso 500, em `texto`, em cima; caixa de 44 px de altura mínima, fundo em `fundo`, contorno de 1 px em `texto-secundario`, raio de 12 px (`raio-campo`), valor em 15 px em `texto`.
- **Campo que mudou**, comparado ao que estava salvo ao abrir a tela: o contorno passa a **2 px em `primaria`**, e embaixo da caixa entra uma legenda de 13 px em `texto-secundario` com o valor de antes: **"Era 72 kg"**, ou **"Era "Nenhuma informada""** para um campo que estava vazio.
- Na frequência, o contador que mudou mostra a mesma legenda embaixo da linha ("Era 4").
- Se o usuário volta ao valor de antes, a marcação some.
- O valor de antes é o mesmo texto que vai para a mensagem pronta do Piu (ADR 0095).
- Não é cor de status: a ardósia é a cor da marca, e o campo não tem erro.
- Contrastes: contorno sobre `fundo` 6,6:1 (claro) e 9,1:1 (escuro); legenda 6,4:1 e 8,1:1.

## Consequências

- O usuário revisa o que mudou antes de salvar, sem tela de revisão própria.
- O tracejado do wireframe sai.
- O design system Live Run ganha o componente CampoDoFormulario, com o estado "mudou" (ADR 0143).
