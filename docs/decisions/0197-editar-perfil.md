# ADR 0197: "Editar perfil" em botão secundário, com o formulário em tela própria e "Salvar" no rodapé fixo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0095](0095-editar-perfil-leva-ao-piu.md), [ADR 0098](0098-frequencia-semanal-no-perfil.md), [ADR 0158](0158-rodape-fixo-do-detalhe.md) e [ADR 0194](0194-linhas-de-dados-do-perfil.md)

## Contexto

Meus dados só mostra os dados (ADR 0194). Para mudar, o usuário toca em "Editar perfil", que abre um formulário com nome, nível, idade, peso, frequência semanal e lesões ou limitações. Salvar grava na hora e abre o Piu com o que mudou (ADR 0095). Faltava a forma da entrada e do formulário em alta fidelidade.

Foram comparadas três opções para a entrada: botão secundário com lápis, abaixo do grupo de Meus dados; link "Editar" à direita do título da seção, como no iOS; e botão principal abaixo do grupo.

## Decisão

- **Entrada:** botão secundário em pílula de 44 px, logo abaixo do grupo de Meus dados, alinhado à esquerda, com o ícone `pencil-simple` de 20 px e "Editar perfil" em 16 px, peso 500, os dois em `primaria`, contorno de 1 px em `primaria` e sem preenchimento. O Perfil não tem ação principal.
- **Formulário em tela própria**, aberta por cima do Perfil, com a barra de abas visível e a aba Perfil ativa:
  - linha de navegação com o voltar "‹ Perfil" em `primaria` e "Editar perfil" em 16 px, negrito, no centro;
  - abaixo, um recado em `neutro-suave`, em legenda: "Ao salvar, o Piu avalia se o plano precisa mudar.";
  - os campos, de cima para baixo: "Como você quer ser chamado", nível (seletor), idade e peso lado a lado, frequência por semana e lesões ou limitações.
- **"Salvar" no rodapé fixo**, acima da barra de abas, como o rodapé do detalhe (ADR 0158): botão principal em pílula de 44 px, na largura toda, `primaria` com `sobre-primaria`. É o único botão de destaque da tela.
- Voltar sem salvar descarta as mudanças. Mudar só o nome salva e volta ao Perfil, sem abrir o Piu (ADR 0099).
- Contrastes: botão secundário sobre `fundo` 6,6:1 (claro) e 9,1:1 (escuro); "Salvar" 7,1:1 e 9,1:1.

## Consequências

- A ação de editar fica junto dos dados que muda, sem pesar mais que eles.
- O rodapé fixo ganha uma variante só com o botão principal, para formulários.
- O RodapeDoTreino do design system Live Run ganha essa variante (ADR 0143).
