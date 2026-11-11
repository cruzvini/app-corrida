# ADR 0145: Antes e depois com o antes riscado e uma seta no depois

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0088](0088-antes-e-depois-em-linhas.md)

## Contexto

O ADR 0088 definiu o antes e o depois em uma linha por dia afetado, com o antes riscado em cima e o depois embaixo. Ele pedia que o riscado não fosse a única pista da mudança, a validar no card 5. O componente aparece em Notificações, no Piu e no "Adiar objetivo".

Foram comparadas, nos dois temas:

- **A, riscado e seta:** o depois com uma seta em ardósia na frente.
- **B, riscado e rótulos:** "Antes" e "Agora" na frente de cada linha.
- **C, riscado e depois em destaque:** o depois numa pílula em `primaria-suave`.

## Decisão

Opção A:

- **Antes:** em cima, riscado, em `texto-secundario` (15 px, peso 400). O riscado usa a mesma cor do texto. Contraste: 6,8:1 no tema claro e 7,1:1 no escuro.
- **Depois:** embaixo, em `texto`, peso 500, com o ícone Phosphor `arrow-elbow-down-right` em `primaria` na frente.
- **Dia sem mudança:** uma linha só, em `texto-secundario`, sem riscado nem seta, com o texto "<treino>, sem mudança".
- **Dia:** à esquerda, numa coluna fixa, em negrito (ex.: "Sex 13").
- O antes não fica mais claro que `texto-secundario`, porque abaixo disso o texto não passa de 4,5:1.

## Consequências

- A mudança tem três pistas além da cor: a ordem (antes em cima), o riscado e a seta.
- Os leitores de tela ficam para depois do MVP (ADR 0140), mas o componente já pode ler "antes: …, depois: …" quando isso entrar.
- O design system Live Run ganha o componente AntesDepois (ADR 0143), usado em Notificações, no Piu e no "Adiar objetivo".
