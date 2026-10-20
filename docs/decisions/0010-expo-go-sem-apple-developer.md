# ADR 0010: Execução via Expo Go no iPhone, sem assinatura Apple Developer por enquanto

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

A conta Apple Developer custa uma assinatura anual. Na fase de protótipo pessoal, o Expo Go permite rodar o app no iPhone sem esse custo.

## Decisão

Executar o app pelo Expo Go no iPhone. A assinatura Apple Developer fica para depois.

## Consequências

- O custo inicial é zero e o ciclo de desenvolvimento é rápido.
- Só funcionam módulos suportados pelo Expo Go: sem push nativo e sem HealthKit.
- Não há distribuição via TestFlight ou App Store até a assinatura.
