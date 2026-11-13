# ADR 0208: Opções de escolha do setup em cards com contorno e botão de rádio, com a marcada em primaria-suave

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0015](0015-nivel-de-corrida-sugerido-e-confirmado.md), [ADR 0103](0103-objetivo-em-tres-opcoes.md), [ADR 0165](0165-secoes-em-grupo-sem-contorno.md) e [ADR 0204](0204-descricao-dos-niveis-com-referencias.md)

## Contexto

O nível e o objetivo são escolhas de uma opção entre poucas (ADRs 0015 e 0103), e a opção marcada do objetivo abre campos. O usuário aceitou a proposta desenhada; a opção "Outro" no objetivo, pedida junto, fica para uma decisão à parte, porque revisa o ADR 0103.

## Decisão

- Cada opção é um **card com contorno** (ADR 0165, porque é uma ação): `superficie`, contorno de 1 px em `borda`, raio de 16 px, padding de 14 × 16 px.
- Dentro, o nome em 16 px, negrito, e a descrição em legenda de 13 px, em `texto-secundario`; nos níveis, as duas referências concretas do ADR 0204, uma por linha.
- À direita, um **botão de rádio** de 22 px: contorno de 2 px em `texto-secundario` quando livre (o `borda-forte` ficaria abaixo de 3:1 no tema claro); marcado, um círculo cheio em `primaria` com um ponto em `sobre-primaria` no centro.
- A **opção marcada** ganha o fundo em `primaria-suave` e o contorno de 2 px em `primaria`. Se a opção tiver campos (distância e data no objetivo), eles abrem dentro do próprio card.
- A opção sugerida pelas regras ganha o **chip neutro "Sugerido"** ao lado do nome e já vem marcada.
- Sem nada marcado, o botão da etapa fica **desativado**: `neutro-suave` com o texto em `texto-secundario`, com `aria-disabled`.
- Contrastes: nome sobre `superficie` 17,5:1 (claro) e 14,2:1 (escuro); descrição 6,8:1 e 7,1:1; rádio livre 6,8:1 e 7,1:1; contorno marcado sobre `primaria-suave` 5,9:1 e 6,7:1.

## Consequências

- Nível e objetivo usam o mesmo padrão, e o card marcado se destaca sem nova cor.
- O design system Live Run ganha o componente OpcaoDeEscolha, com a regra das descrições dos níveis (ADRs 0143 e 0204).
