# ADR 0190: Aviso de risco dentro do card da proposta, em `risco-suave` com contorno

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0017](0017-avisar-riscos-sem-bloquear-plano.md), [ADR 0142](0142-tons-de-status-e-selos.md), [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md) e [ADR 0162](0162-proposta-do-piu-na-conversa.md)

## Contexto

Riscos geram aviso e alternativas, sem bloquear (ADR 0017). O vermelho do app, o token `risco`, é reservado para dor, lesão e carga (ADR 0142). Os ADRs 0150 e 0162 disseram que o aviso de risco usa `risco-suave` com contorno `risco`, mas ele ainda não tinha aparecido em nenhuma tela. Na tela do Piu, ele aparece pela primeira vez, numa proposta que põe corrida no mesmo dia das inferiores.

Foram comparadas três opções: um bloco em `risco-suave` com contorno, dentro do card, depois do antes e depois; uma linha com o ícone e o texto em `risco`, sem fundo; e um aviso separado, fora do card e acima dele, com título.

## Decisão

- O aviso de risco é um **bloco dentro do CardDaProposta**, logo depois das linhas do AntesDepois e antes da nota informativa, se houver.
- **Forma:** fundo em `risco-suave`, contorno de 1 px em `risco`, raio de 12 px (`raio-campo`), padding de 10 × 12 px.
- **Conteúdo:** o ícone Phosphor `warning`, de 18 px, em `risco`, e o texto em `legenda` (13 px) e em `texto`, numa frase com o risco e a alternativa ("Corrida no mesmo dia das inferiores. Se der, corra antes do treino de força."). Sem título.
- **Não bloqueia:** os botões de decisão continuam iguais, e Aceitar continua sendo o principal.
- O aviso fica no card em todos os status, inclusive nos finais (ADR 0188).
- **Só para risco de dor, lesão e carga.** Informações e falhas usam a nota com `info` ou o AvisoNeutro (ADR 0150).
- Contrastes: texto sobre `risco-suave` 14,7:1 (claro) e 13,2:1 (escuro); ícone 5,5:1 e 6,7:1; contorno sobre `superficie` 6,5:1 e 7,2:1.

## Consequências

- O risco fica junto da mudança que o causa, e não parece um alerta da conversa toda.
- O texto não depende só da cor: o fundo, o contorno e o ícone marcam o aviso, e o texto fica na cor normal.
- O mesmo bloco serve para os avisos de risco do setup e do "Adiar objetivo" (ADRs 0017 e 0060), quando essas telas forem desenhadas.
- O design system Live Run ganha o componente AvisoDeRisco, e o CardDaProposta passa a apontar para ele (ADR 0143).
