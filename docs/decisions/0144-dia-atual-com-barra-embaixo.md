# ADR 0144: Dia atual na faixa se destaca por uma barra embaixo

- **Status:** Aceita
- **Data:** 2026-11-11
- **Revisa:** [ADR 0074](0074-destaque-do-dia-atual-na-faixa.md)

## Contexto

O ADR 0074 destacava o dia atual na faixa de 7 dias pelo fundo preenchido, que nenhum outro dia tinha. Com o ADR 0142, todo dia resolvido também ganhou fundo, na cor do status com transparência, e o fundo deixou de identificar o dia atual.

Foram comparadas, nos dois temas e com o dia atual planejado, feito e não feito:

- **A, anel externo:** um segundo contorno em volta do dia, na cor do texto.
- **B, barra embaixo:** uma barra curta em ardósia embaixo do dia, como o indicador de aba.
- **C, número no círculo:** o número do dia num círculo sólido em ardósia, como o ícone da aba Hoje.

## Decisão

- O dia atual se destaca por uma **barra embaixo do dia**: 20 × 4 px, cantos arredondados, cor `primaria`, a 6 px abaixo do contorno.
- A barra fica **fora do dia**, e o dia atual segue as mesmas regras de status dos outros dias (contorno, fundo e selo do ADR 0142). O contorno mais grosso e escuro do ADR 0074 sai.
- No dia de descanso atual, a barra aparece embaixo do contorno tracejado.
- Contraste da barra sobre o `fundo`: acima de 6:1 no tema claro e acima de 9:1 no escuro, acima dos 3:1 pedidos para elementos gráficos.

## Consequências

- O dia atual é achado em qualquer status, sem disputar espaço com o contorno, o fundo e o selo.
- A barra usa a mesma linguagem do indicador de seleção, então a faixa precisa de espaço vertical para ela, e nenhum outro dia mostra barra.
- O componente DiaDaFaixa do design system Live Run ganha o estado "dia atual" (ADR 0143).
