# ADR 0082: Fases do plano em retângulos de mesma largura, com rolagem horizontal

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

No rascunho do Plano, as fases dividiam a largura da tela na proporção das semanas de cada uma. As fases curtas ficavam estreitas demais, e os nomes eram cortados.

## Decisão

- Cada fase é um **retângulo do mesmo tamanho**, com o nome e as semanas que ela cobre.
- As fases ficam numa faixa com **rolagem horizontal**. Se não couberem na tela, a última visível aparece cortada, para mostrar que há mais à direita.
- A fase atual tem destaque e fica visível ao abrir a tela.

## Consequências

- Os nomes cabem inteiros, qualquer que seja a duração da fase.
- A largura do retângulo deixa de indicar a duração da fase. A duração aparece no texto ("sem 5–7").
- O plano genérico não tem fases e não mostra a faixa.
