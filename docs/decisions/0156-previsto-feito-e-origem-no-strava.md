# ADR 0156: Previsto × feito e origem no Strava

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0079](0079-executado-so-com-o-resumo-do-strava.md), [ADR 0080](0080-treino-feito-mostra-so-previsto-x-feito.md), [ADR 0115](0115-marca-do-strava-no-app.md) e [ADR 0153](0153-numero-em-destaque-no-card-do-treino.md)

## Contexto

No detalhe de uma corrida feita, os ADRs 0079 e 0080 pedem só a comparação entre o previsto e o feito (distância, duração e pace médio), com a atividade do Strava de origem embaixo. O ADR 0115 pede o "View on Strava" em ardósia, negrito e sublinhado, e o "Powered by Strava" monocromático e pequeno. Na tela de detalhe em alta fidelidade (ADR 0148), a forma da tabela e da origem era uma proposta nova.

## Decisão

**Tabela previsto × feito**, dentro do card da seção (ADR 0154):

- Três linhas (distância, duração e pace médio) e três colunas: o nome da medida à esquerda e o previsto e o feito alinhados à direita.
- **Previsto** em 15 px, em `texto-secundario`.
- **Feito** no estilo `numero-medio` (24 px, negrito), em `texto`.
- Cabeçalho das colunas ("Previsto" e "Feito") em `legenda` e `texto-secundario`.
- Linhas separadas por um divisor em `borda`. Números com algarismos tabulares.
- O pace aparece sem "/km" nas duas colunas (ex.: "5:47" e "5:48"), como no card do Hoje.

**Origem no Strava**, abaixo da tabela, separada por um divisor, e sozinha no "Executado" da musculação feita:

- Nome da atividade em 15 px, peso 500, em `texto` (ex.: "Intervalado na pista").
- Data e hora em `legenda` e `texto-secundario` (ex.: "Atividade do Strava, hoje às 18:20").
- **"View on Strava"** em `primaria`, negrito e sublinhado, com área de toque de 44 px.
- **"Powered by Strava"** pequeno e monocromático (preto no claro, branco no escuro), à direita do link. O logo oficial entra como asset no épico do app (ADR 0115); até lá, as telas mostram o texto.

Contrastes: previsto e cabeçalho 6,8:1 (claro) e 7,1:1 (escuro); feito, nome da atividade e "Powered by Strava" 17,5:1 e 14,2:1; "View on Strava" 7,1:1 e 7,9:1.

## Consequências

- O feito ganha o destaque visual, e o previsto fica como referência ao lado, sem competir.
- A marca do Strava fica restrita à origem da atividade, como pede o ADR 0115.
- O design system Live Run ganha os componentes PrevistoFeito e OrigemDoStrava (ADR 0143). Eles ficam separados porque a origem também aparece sem a tabela.
