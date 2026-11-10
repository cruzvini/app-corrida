# ADR 0141: Skills de design copiadas para o repositório

- **Status:** Aceita
- **Data:** 2026-11-10
- **Complementa:** [ADR 0140](0140-direcao-visual-esportiva.md)

## Contexto

O ADR 0140 definiu a direção visual. Faltava escolher quais skills do Claude apoiam o design, desde o desenho das telas até o design system e o código, e como instalá-las. As skills dão instruções ao Claude e podem trazer scripts, então a origem importa. Por isso, primeiro vêm as oficiais. Uma skill da comunidade só entra depois que o conteúdo for lido e o usuário aprovar.

Foram lidos os `SKILL.md` das candidatas:

- `frontend-design` (Anthropic, Apache-2.0): define a direção visual e a escala tipográfica com pesos definidos, e lista o que deixa um design com "cara de IA", como rótulos em caixa alta e cards iguais para tudo.
- `expo-design-system` (Expo, MIT): tokens de cor, espaço, tipografia, raio, sombra e movimento, componentes com variantes, uma lista de 20 vícios de apps gerados por IA e um roteiro para auditar desvios.
- `expo-animation` (Expo, MIT, feita com Emil Kowalski): animação com Reanimated, um filtro de frequência para saber o que deve animar e movimento reduzido junto com cada animação.
- `theme-factory` (Anthropic): descartada, porque impõe temas prontos e conflita com a base fechada do ADR 0138.
- `expo-native-ui` (Expo): descartada como skill do projeto, porque segue o Apple HIG e os SF Symbols, e o projeto usa um design system próprio com Phosphor.
- Skills da comunidade (`react-native-design`, `building-native-ui` e outras): não entram por enquanto, porque as oficiais já cobrem o necessário.

As opções de instalação eram: copiar as pastas para o repositório, instalar como plugins do Claude Code (o plugin da Expo traz cerca de 20 skills, com atualização automática) ou instalar só na máquina do usuário.

## Decisão

- **Skills do design:**
  - Fase de artifact: `frontend-design` e a `artifact-design`, que já vem com o Claude.
  - Fase de código: `expo-design-system` e `expo-animation`.
- **Instalação:** copiar só as três pastas externas para `.claude/skills/` no repositório, com a licença original e o commit de origem:
  - `frontend-design`: `anthropics/skills`, commit `2c5958ecac7cee2b583967a2c4981d0f4a75c579`.
  - `expo-design-system` e `expo-animation`: `expo/skills`, commit `a9e5bd3fa00b4e61f632e43f85da73aee1942582`.
- **Precedência:** as decisões do projeto valem mais que as skills. Onde uma skill conflitar com um ADR, vale o ADR:
  - Local dos tokens: a skill da Expo sugere `src/theme/`, mas o local é definido no setup do monorepo (ADRs 0133 e 0134).
  - Ícones: Phosphor (ADR 0138), e não SF Symbols.
  - Estilos: `StyleSheet` com tokens (ADR 0133), sem NativeWind nem Unistyles.
- **Atualização:** manual, por PR, com a diff da skill revisada antes do merge.

## Consequências

- A versão fica fixa, revisada no PR e disponível em qualquer máquina que clonar o repositório.
- O repositório é público (ADR 0122). As licenças MIT e Apache-2.0 permitem a cópia, desde que a licença e a origem acompanhem.
- Atualizações das skills de origem não chegam sozinhas. Quem quiser a versão nova precisa copiar de novo.
- Uma skill nova só entra com um novo ADR ou com a revisão deste.
