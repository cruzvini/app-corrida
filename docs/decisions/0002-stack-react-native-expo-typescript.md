# ADR 0002: Stack do app: React Native + Expo + TypeScript, iOS primeiro

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O app precisa rodar em iOS (dispositivo principal do usuário) e, no futuro, em Android, com uma base de código só e ciclo de feedback rápido.

## Decisão

Usar React Native com Expo e TypeScript. O alvo principal é iOS, com validação de Android cedo para evitar surpresas de compatibilidade.

## Consequências

- Uma base de código para as duas plataformas.
- TypeScript dá tipagem compartilhada com os pacotes do monorepo.
- O Expo simplifica build e execução (ver ADR 0010), com limitações em módulos nativos.
- É preciso testar periodicamente em Android, mesmo com foco em iOS.
