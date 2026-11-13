# ADR 0204: Cada nível de corrida descrito com duas referências concretas, frequência e maior distância

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0015](0015-nivel-de-corrida-sugerido-e-confirmado.md) e [ADR 0101](0101-progresso-do-setup-com-passos.md)

## Contexto

O ADR 0015 diz que, com histórico no Strava, as regras sugerem o nível pela frequência, pelo volume e pela maior distância contínua, e que, sem histórico, a pessoa escolhe. Em qualquer caso, cada nível aparece com uma descrição curta. Ao desenhar o onboarding em alta fidelidade, o usuário perguntou como alguém sem histórico entende o que significa cada nível. Os textos do wireframe eram provisórios ("Corre pouco ou está começando agora"), e nenhum ADR definia o que separa um nível do outro.

Foram comparadas três opções: cada nível com duas referências concretas; a frase curta do wireframe; e a frase curta com um link "Como escolher meu nível", que abre uma folha com exemplos.

## Decisão

- Cada nível aparece com **duas referências concretas**, em linhas de legenda, embaixo do nome: **vezes por semana** e **maior distância** (ou o tipo de treino, no avançado). São os mesmos critérios que as regras usam para sugerir o nível (ADR 0015), então quem escolhe sem histórico vê a mesma régua.
- Ponto de partida dos textos:
  - **Iniciante:** "Até 2 corridas por semana" e "Ainda não correu 5 km sem parar".
  - **Intermediário:** "3 ou mais corridas por semana" e "Já correu 10 km".
  - **Avançado:** "4 ou mais corridas e mais de 40 km por semana" e "Já fez meia maratona ou treina intervalado".
- Quem se encaixa em parte de dois níveis escolhe o que mais parece com a rotina de hoje; o texto da tela sem histórico diz isso.
- As mesmas descrições aparecem com e sem sugestão, e no seletor de nível do "Editar perfil".
- **Os números são provisórios:** os limites exatos e a regra de sugestão são decididos no épico do motor de regras, que pode revisar estes textos.

## Consequências

- A escolha sem histórico fica concreta, sem uma folha extra no fluxo.
- O motor de regras ganha um requisito: os limites de cada nível têm de ser expressos em frequência e distância, para caber nestas duas linhas.
- A forma visual das opções é decidida na proposta 6 desta tela (opções de escolha), que leva a regra para o design system Live Run.
