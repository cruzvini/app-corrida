# ADR 0164: Título de seção sem caixa alta

- **Status:** Aceita
- **Data:** 2026-11-12
- **Revisa:** [ADR 0154](0154-cabecalho-e-secoes-do-detalhe.md) (rótulo das seções)
- **Complementa:** [ADR 0140](0140-direcao-visual-esportiva.md) e [ADR 0141](0141-skills-de-design.md)

## Contexto

As seções do detalhe do treino ("Blocos e pace previsto", "Previsto × feito", "Divisão", "Executado", "Feedback" e "Proposta") usavam o estilo `rotulo`: 12 px, peso 500, caixa alta, espaçamento de 0,04 em e `texto-secundario` (ADR 0154). A skill `frontend-design` (ADR 0141) aponta o rótulo em caixa alta sobre cada bloco como uma das marcas mais comuns de tela gerada, uma escolha padrão e não do projeto. Foram comparadas três opções: manter, título de seção (16 px, negrito, em `texto`) e rótulo discreto (13 px, peso 500, em `texto-secundario`).

## Decisão

- O nome de cada seção passa a ser um **título de seção**: estilo novo `titulo-secao`, 16 px, altura de linha 22 px, peso 700, em `texto`, sem caixa alta e sem espaçamento extra.
- O estilo `rotulo` (caixa alta) sai da escala tipográfica do design system. Nenhum texto do app fica em caixa alta.
- Vale para todas as seções do detalhe, para o card da proposta ("Proposta") e para o título "Feedback" sobre as mensagens.
- Contraste: 17,5:1 sobre `superficie` e 16,4:1 sobre `fundo` no claro; 14,2:1 e 16,3:1 no escuro.

## Consequências

- A hierarquia vem do tamanho e do peso da DM Sans, como pede a direção esportiva do ADR 0140, e não de um adorno tipográfico.
- O título da seção (16 px) fica entre o nome do treino no card (18 px, `subtitulo`) e o texto corrido (15 px). O peso 700 o separa do texto.
- O design system Live Run troca o estilo `rotulo` pelo `titulo-secao` e atualiza os componentes CabecalhoDoDetalhe, PrevistoFeito, CardDaProposta e BalaoDeMensagem (ADR 0143).
