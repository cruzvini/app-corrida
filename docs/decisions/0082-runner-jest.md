# ADR 0082: Jest como runner de testes unitários e de integração

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md)

## Contexto

O ADR 0011 deixou a escolha do runner para o épico "Testes e CI". O monorepo tem um app Expo (React Native) e pacotes TypeScript puros (`rules-engine`, `ai-provider`). As opções eram Jest em tudo, Vitest nos pacotes com Jest no app, ou Vitest em tudo.

## Decisão

Usar o **Jest em todo o monorepo**:

- O app usa o preset `jest-expo`, junto com o React Native Testing Library para os componentes.
- Os pacotes usam o Jest com suporte a TypeScript.
- O monorepo tem um único comando de teste que roda todos os projetos.

## Consequências

- Um runner, uma sintaxe de mock e uma forma de configurar a cobertura em todo o projeto.
- Segue o caminho oficial do Expo, que é o mais documentado para React Native.
- Os testes dos pacotes rodam um pouco mais devagar do que rodariam no Vitest. Para o tamanho do MVP, essa diferença é aceitável.
- A configuração entra no setup do monorepo (ADR 0081).
