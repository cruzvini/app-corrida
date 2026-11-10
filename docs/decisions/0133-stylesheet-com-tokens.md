# ADR 0133: StyleSheet com módulo de tokens para os estilos do app

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** a identidade visual (card 5 do épico de design)

## Contexto

A identidade visual do Live Run (card 5 do épico de design) define as cores, a tipografia e os ícones, com tema claro por padrão e escuro pelo sistema. Faltava decidir como aplicar esses tokens no app. As opções eram o `StyleSheet` nativo com um módulo de tokens, o NativeWind (Tailwind) e o Unistyles. O Unistyles exige build nativo e não roda no Expo Go, que é como o projeto executa o app.

## Decisão

Usar o **`StyleSheet` do React Native** com um **módulo de tokens em TypeScript**:

- Os tokens (cores clara e escura, tipografia e espaçamento) ficam num módulo de tema dentro do app.
- Um hook `useTheme()` escolhe o tema pelo esquema de cores do sistema (`useColorScheme`).
- Os componentes montam os estilos a partir do tema, sem cores ou tamanhos soltos no código.

## Consequências

- Não há dependência extra nem passo de build, e o app continua rodando no Expo Go.
- Os tokens são tipados: um token inexistente vira erro de typecheck.
- Cada componente escreve mais código de estilo do que escreveria com classes utilitárias.
- Os valores dos tokens vêm da identidade visual (card 5) e precisam ser mantidos em sincronia com ela.
