# ADR 0146: Ícones dos tipos de atividade em figuras

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0137](0137-outras-atividades-como-registro-de-carga.md) e [ADR 0138](0138-identidade-visual.md)

## Contexto

O ADR 0138 definiu ícones Phosphor para os tipos de atividade: corrida, musculação, natação, bike, funcional e outra (ADR 0137). Faltava escolher quais. Os ícones aparecem na faixa de 7 dias (16 px), nas listas e no setup (24 px).

Foram comparadas, nos dois temas e nos dois tamanhos:

- **A, figuras:** pessoa em movimento onde o Phosphor tem, e um objeto onde não tem.
- **B, objetos:** o equipamento de cada atividade (tênis, haltere, piscina, bicicleta, cronômetro).

## Decisão

Opção A, com estes ícones do Phosphor (`phosphor-react-native`):

| Tipo | Ícone |
|---|---|
| Corrida | `person-simple-run` |
| Musculação | `barbell` |
| Natação | `person-simple-swim` |
| Bike | `person-simple-bike` |
| Funcional | `lightning` |
| Outra | `dots-three-circle` |

- Peso regular no estado normal, em `primaria`, como no resto da interface (ADR 0138).
- Tamanhos: 16 px dentro do dia da faixa (14 px quando o dia tem dois treinos) e 24 px em listas e no setup.

## Consequências

- O Phosphor não tem figura de pessoa para musculação nem para funcional, então o conjunto mistura figuras e objetos. Os ícones de pessoa ficam parecidos em 16 px, e o tipo abreviado embaixo do número do dia (ADR 0070) ajuda a distinguir.
- Os nomes foram conferidos no Phosphor 2.1.1. Ao trocar de versão, é preciso conferir de novo.
- O design system Live Run ganha o componente IconeDeAtividade (ADR 0143).
