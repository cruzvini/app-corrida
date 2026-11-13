# ADR 0209: Sugestão das regras no setup numa nota com info, sem caixa, com o porquê e o link "Ajustar"

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0015](0015-nivel-de-corrida-sugerido-e-confirmado.md), [ADR 0104](0104-prazo-sugerido-pelas-regras.md) e [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md)

## Contexto

No setup, as regras sugerem o nível pelo histórico do Strava (ADR 0015) e o prazo em "Completar uma distância" (ADR 0104), e explicam o porquê. O usuário aceitou a proposta desenhada.

## Decisão

- A sugestão é uma **nota em legenda** de 13 px, em `texto-secundario`, com o ícone `info` de 16 px na frente, sem caixa nem fundo.
- O valor sugerido vai em `texto`, peso 500 ("Sugerimos **Intermediário**: você correu 3 vezes por semana nas últimas 8 semanas, com treinos de até 12 km.").
- Quando dá para mudar a sugestão sem escolher outra opção, o link **"Ajustar"** fecha a nota, em `primaria`, peso 500, sublinhado; no prazo, ele abre o seletor de data nativo (ADR 0172).
- A mesma nota avisa quando a semana passa de 7 atividades na frequência (ADR 0198).
- Não é aviso: sem vermelho e sem bloco em `neutro-suave`. Falhas continuam no AvisoNeutro (ADR 0150).
- Contrastes: texto sobre `fundo` 6,4:1 (claro) e 8,1:1 (escuro); link 6,6:1 e 9,1:1.

## Consequências

- A explicação das regras fica perto do que ela explica, sem competir com as opções.
- O design system Live Run ganha o componente NotaDaRegra (ADR 0143).
