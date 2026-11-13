# ADR 0211: Resumo do setup com a LinhaDeDado e um botão de lápis em cada linha

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0037](0037-onboarding-e-setup-em-fluxo-linear.md), [ADR 0166](0166-linhas-de-apoio-em-frases.md) e [ADR 0194](0194-linhas-de-dados-do-perfil.md)

## Contexto

Antes de gerar, o setup mostra todas as respostas, cada uma com "Editar", que volta à tela do item e retorna ao resumo (ADR 0037). O usuário aceitou a proposta desenhada.

## Decisão

- As respostas ficam num **grupo sem contorno**, uma **LinhaDeDado** (ADR 0194) por item: rótulo em legenda em cima e valor em frase embaixo, sem ponto médio (ADR 0166). Itens: nível, sobre você, frequência por semana, objetivo e início.
- À direita de cada linha, um **botão de lápis** (`pencil-simple`, 20 px, em `primaria`) com área de toque de 44 px e rótulo acessível "Editar" e o item, no lugar do link "Editar" em texto.
- "Gerar meu plano" é o botão da etapa, no fim da tela (ADR 0203).
- Contrastes: os da LinhaDeDado; lápis sobre `superficie` 7,1:1 (claro) e 7,9:1 (escuro).

## Consequências

- O resumo usa a mesma linha do Perfil, e o lápis repete o "corrigir a divisão" do detalhe do treino (ADR 0157).
- A LinhaDeDado do design system Live Run ganha a variante com o lápis (ADR 0143).
