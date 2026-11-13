# ADR 0171: Gráfico de volume semanal com a semana atual em faixa

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0083](0083-detalhe-do-plano.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

O detalhe do plano tem o gráfico de volume semanal de corrida, com o previsto e o feito de cada semana e a semana atual em destaque (ADR 0083). A forma do gráfico era uma proposta nova na tela de alta fidelidade. Foram comparadas três opções: feito por dentro do previsto com a semana atual destacada só no eixo, a mesma com uma faixa atrás da semana atual, e barras lado a lado. A skill de visualização de dados (dataviz) foi seguida, e o par de cores passou pelo validador dela.

## Decisão

- **Seção** "Volume semanal de corrida" (`titulo-secao`), com o gráfico num grupo sem contorno (ADR 0165), padding de 14 × 16 px.
- **Uma barra por semana** do plano, com cantos de 4 px no topo, 6 px entre as barras, apoiadas numa linha de base em `borda`. Altura proporcional ao volume, com a maior semana no topo da área de 124 px.
  - **Previsto:** contorno interno de 1,5 px em `borda-forte`, sem preenchimento.
  - **Feito:** preenchido em `primaria`, por dentro do previsto, a partir da base. Semanas futuras não têm feito.
- **Semana atual:** faixa em `primaria-suave` atrás da barra, da base ao topo da área, com cantos de 6 px no topo; no eixo, o número em `primaria` e negrito.
- **Legenda** acima ("Previsto" em contorno e "Feito" preenchido) e uma linha de rótulo direto embaixo: "Semana 3, esta semana: 13,8 de 31,6 km".
- **Eixo** com o número de cada semana em 11 px, `texto-secundario`, algarismos tabulares. Sem eixo vertical nem grade.
- **Acessibilidade:** o gráfico tem rótulo acessível com o resumo da semana atual; no app, tocar numa barra mostra o volume daquela semana.
- Validação (dataviz): separação entre feito e previsto de ΔE 37,8 (claro) e 38,7 (escuro). O contorno do previsto tem 2,8:1 (claro) e 3,4:1 (escuro) sobre `superficie`, e 2,4:1 e 2,9:1 sobre a faixa: por isso a legenda e o rótulo direto são obrigatórios. Feito 7,1:1 e 7,9:1; eixo e rótulo 6,8:1 e 7,1:1.

## Consequências

- O gráfico usa só a cor da marca e neutros, sem cor nova.
- O design system Live Run ganha o componente GraficoDeVolume (ADR 0143).
