# ADR 0147: Ícone da aba Hoje elevado, com o número do dia

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0034](0034-navegacao-por-abas-com-hoje-no-centro.md) e [ADR 0138](0138-identidade-visual.md)

## Contexto

O ADR 0034 colocou o Hoje no centro da barra de abas, "em destaque e um pouco elevada", e o ADR 0138 definiu o ícone como um círculo com o número do dia. Faltava a forma final: o círculo alinhado com os outros ícones ou elevado acima da barra.

Foram comparadas, nos dois temas, com o Hoje aberto e com outra aba aberta:

- **A, no nível da barra:** círculo de 28 px, alinhado com os outros ícones.
- **B, elevado:** círculo de 52 px saindo acima da barra.

## Decisão

Opção B:

- **Círculo de 52 px** no centro da barra, que sobe 30 px acima da borda de cima da barra, com um anel de 4 px na cor `fundo` para separar do conteúdo da tela.
- **Número do dia** em DM Sans negrito, 20 px, com algarismos tabulares. Muda todo dia.
- **Hoje aberto:** círculo sólido em `primaria`, com o número em `sobre-primaria`. Rótulo "Hoje" embaixo, em `primaria` e negrito.
- **Outra aba aberta:** círculo em `primaria-suave`, com o número em `primaria`. Rótulo "Hoje" em `texto-secundario`.
- **Outras abas** seguem o ADR 0138: ícone Phosphor de 22 px, em peso regular e `texto-secundario`. A aba selecionada usa o peso preenchido, em `primaria`, sobre uma pílula em `primaria-suave`, com o rótulo em negrito.
- Contraste do número: 7,1:1 sobre `primaria` e 5,9:1 sobre `primaria-suave` no tema claro, e 7,9:1 e 6,7:1 no escuro.

## Consequências

- O Hoje se destaca como o centro do app, e a barra precisa de um componente próprio no Expo, com o botão central customizado (como o ADR 0034 já previa).
- O círculo em `primaria-suave` tem pouco contraste com a superfície da barra. Quem identifica a aba é o número em `primaria`, que passa de 4,5:1.
- O conteúdo da tela precisa de espaço embaixo para não ficar escondido atrás do círculo elevado.
- O design system Live Run ganha o componente BarraDeAbas (ADR 0143).
