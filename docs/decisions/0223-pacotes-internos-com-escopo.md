# ADR 0223: Pacotes internos com o escopo `@app-corrida`

- **Status:** Aceita
- **Data:** 2026-11-17
- **Complementa:** [ADR 0129](0129-npm-workspaces.md), [ADR 0134](0134-pacotes-internos-sem-build.md)

## Contexto

Os workspaces do npm (ADR 0129) são importados pelo nome do `package.json`, e não pelo caminho da pasta. Faltava definir esse nome. As opções eram usar o nome da pasta (`rules-engine`) ou um escopo (`@app-corrida/rules-engine`).

## Decisão

Todo workspace usa o escopo **`@app-corrida/`** seguido do nome da pasta: `@app-corrida/rules-engine`, `@app-corrida/ai-provider` e, no app, `@app-corrida/mobile`.

## Consequências

- O nome não colide com pacotes públicos do npm, e um import deixa claro o que é interno.
- O código e os testes importam os pacotes pelo nome (`import { ... } from '@app-corrida/rules-engine'`), nunca por caminho relativo entre pastas.
- Quem importa um pacote interno o declara no próprio `package.json`, como qualquer dependência (regra `no-extraneous-dependencies`, ADR 0131).
