# ADR 0207: Progresso do setup com o voltar e a contagem na mesma linha e uma barra fina embaixo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0101](0101-progresso-do-setup-com-passos.md)

## Contexto

O setup mostra a barra de progresso e a contagem ("3 de 7") no topo de cada tela, abaixo do voltar (ADR 0101). Faltava a forma em alta fidelidade. O usuário aceitou a proposta desenhada sem pedir alternativas.

## Decisão

- Uma linha de navegação com o voltar "‹ Voltar" em `primaria` à esquerda e a **contagem** ("1 de 7") à direita, em legenda de 13 px, em `texto-secundario`, com números tabulares.
- Logo abaixo, a **barra de progresso** de 4 px, raio de 2 px, com o trilho em `neutro-suave` e o preenchimento em `primaria`, na largura do conteúdo.
- Sem o rótulo "Setup" do wireframe: a contagem já diz em que ponto o usuário está.
- O login e a conexão com o Strava ficam fora da contagem (ADR 0101). A tela "Montando o plano" não tem voltar nem contagem.
- Contrastes: contagem sobre `fundo` 6,4:1 (claro) e 8,1:1 (escuro); preenchimento sobre o trilho 6,1:1 e 6,9:1.

## Consequências

- O voltar e o progresso ocupam uma linha só, e o título da pergunta sobe.
- O design system Live Run ganha o componente ProgressoDoSetup (ADR 0143).
