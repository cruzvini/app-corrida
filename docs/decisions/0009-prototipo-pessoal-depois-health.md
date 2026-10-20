# ADR 0009: Protótipo pessoal primeiro, depois Health Connect / Apple Health ao abrir para amigos e família

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

Validar o produto com um único usuário reduz o escopo inicial. Amigos e família podem não usar Strava, e Apple Health e Health Connect exigem módulos nativos e permissões.

## Decisão

Começar com um protótipo de uso pessoal, usando o Strava como fonte. Ao abrir para amigos e família, integrar Apple Health (iOS) e Health Connect (Android).

## Consequências

- O escopo inicial fica menor e o aprendizado é mais rápido.
- A camada de fontes de dados precisa ser abstrata para receber novas fontes.
- Apple Health e Health Connect provavelmente exigirão sair do Expo Go (development build), revisando o ADR 0010.
