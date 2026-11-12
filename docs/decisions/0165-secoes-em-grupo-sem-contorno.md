# ADR 0165: Seções em grupo sem contorno

- **Status:** Aceita
- **Data:** 2026-11-12
- **Revisa:** [ADR 0154](0154-cabecalho-e-secoes-do-detalhe.md) (seções em card) e [ADR 0157](0157-acoes-diretas-no-detalhe.md) (card editável)
- **Complementa:** [ADR 0141](0141-skills-de-design.md) e [ADR 0164](0164-titulo-de-secao-sem-caixa-alta.md)

## Contexto

No detalhe do treino, cada seção ("Blocos e pace previsto", "Previsto × feito", "Divisão" e "Executado") ficava num card em `superficie`, com contorno `borda`, raio de 16 px e o título dentro (ADR 0154). A skill `expo-design-system` (ADR 0141) chama isso de "Everything's a Card" e sugere listas agrupadas, com fundo e divisórias finas no lugar do contorno; a `frontend-design` aponta o mesmo raio em tudo como marca de tela genérica. Foram comparadas três opções: manter, seções sem caixa (direto no `fundo`) e grupo sem contorno.

## Decisão

- **Seção = título + grupo.** O título da seção (`titulo-secao`, ADR 0164) fica fora, acima do conteúdo, a 8 px. O conteúdo fica num **grupo** em `superficie`, **sem contorno**, com raio `raio-campo` (12 px) e padding horizontal de 16 px. Linhas dentro do grupo são separadas por divisórias de 1 px em `borda`.
- **Seção editável:** o grupo vira uma linha tocável inteira, com o valor à esquerda e o lápis `pencil-simple` em `primaria` à direita (área de toque de 44 px). Substitui o card editável do ADR 0157.
- **Continuam como card** (com contorno e raio de 16 px) os elementos que são um objeto ou uma ação, e não uma seção de leitura: o card do treino no Hoje, a linha de treino, o card do dia de descanso, o card da proposta e a folha.
- Contrastes: o grupo se separa do fundo pelo degrau de luminância, 1,1:1 nos dois temas, o mesmo das listas agrupadas do iOS; as divisórias têm 1,4:1 (claro) e 1,3:1 (escuro) sobre `superficie`. Os textos não mudam.

## Consequências

- O detalhe passa a ler como uma tela de detalhe nativa do iOS, e o contorno fica reservado ao que se toca ou se decide.
- Dois raios com papéis diferentes: 16 px para cards (objetos) e 12 px para grupos (seções), em vez de um raio só em tudo.
- O design system Live Run ganha a regra de seção em grupo no CabecalhoDoDetalhe e atualiza os componentes PrevistoFeito e OrigemDoStrava (ADR 0143).
