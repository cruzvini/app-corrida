# ADR 0154: Cabeçalho e seções do detalhe do treino

- **Status:** Aceita (revisada pelo ADR 0157)
- **Data:** 2026-11-12
- **Complementa:** [ADR 0036](0036-tela-de-detalhe-do-treino.md), [ADR 0140](0140-direcao-visual-esportiva.md) e [ADR 0153](0153-numero-em-destaque-no-card-do-treino.md)

## Contexto

A tela de detalhe do treino em alta fidelidade (ADR 0148) abre por cima da aba de origem e tem um cabeçalho com o tipo, o status e a data, seguido de seções (blocos, previsto × feito, divisão, executado). A forma do cabeçalho e das seções era uma proposta nova, sem ADR.

## Decisão

- **Voltar:** no topo, o ícone Phosphor `caret-left` e o nome da aba de origem ("Hoje", "Plano" ou "Notificações"), em `primaria`, 16 px, peso 500, com área de toque de 44 px.
- **Título:** nome do treino em 24 px negrito (estilo `titulo`), com o ícone da atividade (IconeDeAtividade) numa caixa de 40 px em `primaria-suave` à esquerda e o ChipDeStatus à direita. *Revisado pelo ADR 0157: o chip passa para a linha de apoio, antes da data, e no status feito a pílula "Feito · Strava" o substitui.*
- **Linha de apoio:** data, semana e fase no estilo `legenda` (13 px), em `texto-secundario`. Ex.: "Segunda, 9 nov · Semana 3 de 10 · Base".
- **Número em destaque:** só no treino previsto, a distância total no estilo `numero` (30 px), com a duração estimada e o pace médio previsto ao lado em `legenda` (ADR 0153). No treino feito, os números ficam no previsto × feito.
- O cabeçalho fica direto sobre o `fundo`, sem card.
- **Seções:** cada seção fica num card em `superficie`, com contorno `borda`, raio `raio-card` e padding de 16 px, e com o rótulo da seção em caixa alta no estilo `rotulo` (12 px, peso 500), em `texto-secundario`.
- Contrastes: voltar 6,6:1 (claro) e 9,1:1 (escuro); linha de apoio 6,4:1 e 8,1:1; rótulo de seção 6,8:1 e 7,1:1.

## Consequências

- O cabeçalho repete a linguagem do card do Hoje (caixa do ícone, chip e número), então o usuário reconhece o mesmo treino ao abrir o detalhe.
- O voltar com o nome da origem deixa claro para onde o usuário volta na pilha (ADR 0036).
- O design system Live Run ganha o componente CabecalhoDoDetalhe (ADR 0143).
