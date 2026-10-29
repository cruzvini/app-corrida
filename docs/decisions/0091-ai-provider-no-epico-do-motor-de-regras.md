# ADR 0091: Provedor de IA construído no épico do motor de regras

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0005](0005-provedor-de-ia-agnostico.md), [ADR 0022](0022-ia-propoe-regras-validam-plano.md), [ADR 0090](0090-app-mobile-em-fatias-verticais.md)

## Contexto

O pacote `packages/ai-provider` (interface agnóstica, implementação com Claude e provedor fake, ADR 0005) e o controle de custos da IA (ADR 0031) não estavam em nenhum épico. Pelo ADR 0022, a IA propõe o plano e o motor de regras valida, então a geração do plano já depende da IA. As opções eram construir o pacote dentro do épico do motor de regras, num épico próprio antes dele, ou só no épico da caixa de entrada.

## Decisão

O épico **Motor de regras** (#5) constrói também o `ai-provider`:

- a interface agnóstica de provedor;
- o provedor fake, para os testes;
- a implementação com Claude;
- o controle de custos (ADR 0031).

O épico da caixa de entrada (#7) reaproveita o pacote para o feedback e para a conversa com o Piu.

## Consequências

- A geração do plano (fluxo 1 do E2E, ADR 0088) fica completa num único épico, sem depender de outro.
- O épico #5 fica maior. A divisão em cards deve separar o `ai-provider` do motor de regras.
- A regra do ADR 0066 vale desde o primeiro código: os dados do Strava nunca chegam ao `ai-provider`. Um teste deve garantir isso.
- A ordem das etapas no README não muda.
