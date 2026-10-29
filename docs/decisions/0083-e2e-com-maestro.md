# ADR 0083: E2E com Maestro no Android

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md)

## Contexto

O ADR 0011 prevê poucos testes E2E no topo da pirâmide. O desenvolvimento é feito no Windows, onde não existe simulador de iOS, e o app roda pelo Expo Go. As opções eram Maestro, Detox ou adiar o E2E.

## Decisão

- Usar o **Maestro** para os testes E2E, com os fluxos escritos em YAML.
- Os testes rodam num **emulador Android**, na máquina local (Windows) e na CI.
- O iOS é validado manualmente no iPhone, pelo Expo Go.

## Consequências

- Não exige build nativo próprio nem macOS, e funciona com o Expo Go.
- O E2E também cobre a validação do Android cedo, como a stack pede.
- Os fluxos em YAML dão menos controle programático. Isso é aceitável para os poucos fluxos críticos do topo da pirâmide.
- O iOS fica sem E2E automatizado. Se isso virar um risco, é possível rodar o Maestro em macOS pelo EAS no futuro.
- Quais fluxos entram no E2E e em que momento ele roda na CI serão decididos à parte.
