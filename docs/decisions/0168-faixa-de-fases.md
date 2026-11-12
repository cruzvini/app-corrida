# ADR 0168: Faixa de fases com contorno na fase atual

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0082](0082-fases-em-faixa-com-rolagem.md), [ADR 0083](0083-detalhe-do-plano.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

O ADR 0082 pôs as fases do plano em retângulos de mesma largura, com rolagem horizontal, e a fase atual com destaque. A forma do destaque era uma proposta nova na tela de alta fidelidade. Foram comparadas três opções: fase atual em `primaria-suave` com contorno, fase atual preenchida em `primaria` e uma barra de progresso dentro da fase atual.

## Decisão

- **Faixa:** sob o título "Fases" (`titulo-secao`), retângulos de 116 px de largura, 8 px entre eles, em `superficie`, sem contorno, com `raio-campo` (12 px) e padding de 10 × 12 px. A faixa vai até a borda direita da tela, e a última fase visível aparece cortada.
- Em cada fase, o nome em 15 px negrito e as semanas em `legenda` e `texto-secundario` ("Semanas 1 a 4").
- **Fase atual:** fundo `primaria-suave`, contorno interno de 1,5 px em `primaria` e o nome em `primaria`. Ao abrir a tela, a faixa rola até ela.
- **No detalhe do plano**, a lista de fases mostra "Fase atual" em `primaria`, peso 500, à direita da fase atual.
- Contrastes: nome da atual 5,9:1 (claro) e 6,7:1 (escuro); semanas sobre `primaria-suave` 5,7:1 e 6,0:1; "Fase atual" 7,1:1 e 7,9:1.

## Consequências

- O único bloco cheio de ardósia da aba continua sendo o botão "Editar plano com o Piu" (ADR 0167).
- O design system Live Run ganha o componente FaixaDeFases (ADR 0143).
