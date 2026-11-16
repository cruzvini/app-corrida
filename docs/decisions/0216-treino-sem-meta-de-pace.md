# ADR 0216: Treino sem meta de pace com faixa de intensidade em palavras

- **Status:** Aceita
- **Data:** 2026-11-16
- **Complementa:** [ADR 0021](0021-pace-alvo-sugerido-pelo-strava.md), [ADR 0024](0024-treinos-estruturados-por-blocos.md), [ADR 0103](0103-objetivo-em-tres-opcoes.md) e [ADR 0153](0153-numero-em-destaque-no-card-do-treino.md)

## Contexto

O critério 3.2 diz que cada bloco tem um pace alvo, ou uma faixa de intensidade quando não houver meta de pace. Isso vale no "Completar uma distância" (ADR 0103) e no plano sem histórico suficiente (ADR 0021). Na validação do design (card 6, issue #25), não havia estado com a faixa de intensidade nem com corrida e caminhada alternadas.

## Decisão

- No lugar do pace, cada bloco mostra uma **faixa de intensidade em palavras**, em `texto-secundario`, com peso normal, ligada ao esforço percebido:
  - **Leve:** "Leve, dá para conversar";
  - **Moderado:** "Moderado, frases curtas";
  - **Forte:** "Forte, só palavras soltas".
- Sem zona de frequência cardíaca, que está fora do MVP.
- Na **corrida e caminhada**, a duração vem em destaque no card (ADR 0153) e a distância fica estimada. A caminhada leva o ícone `person-simple-walk`, em `primaria`, e a repetição vira uma frase: "Corra 2 min, caminhe 1 min, 8 vezes".
- O estado "Antes do treino, sem meta de pace" fica na tela Hoje, em [`telas/index.html`](../telas/index.html).

## Consequências

- O critério 3.2 passa a ter estado nos dois casos, com e sem pace.
- Os três níveis de intensidade viram um token de texto no design system e um campo do bloco no modelo do plano, decididos com o motor de regras.
- O ícone `person-simple-walk` entra no sprite e no IconeDeAtividade.
