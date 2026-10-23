# ADR 0067: Ajustes disparados pelo Strava são feitos só pelo motor de regras

- **Status:** Aceita
- **Data:** 2026-10-22
- **Revisa:** [ADR 0022](0022-ia-propoe-regras-validam-plano.md), [ADR 0026](0026-treino-nao-feito-ajuste-automatico.md), [ADR 0027](0027-atividade-fora-do-plano-conta-como-carga.md) e [ADR 0058](0058-pular-e-nao-sera-feito-sao-a-mesma-acao.md)

## Contexto

Treino não feito, carga fora do plano e treino muito acima do previsto geravam ajuste pelo fluxo "IA propõe, regras validam" (ADR 0022). Com o ADR 0066, esse fluxo não pode usar dados do Strava.

## Decisão

Os ajustes disparados por dados do Strava são feitos **só pelo motor de regras**, com regras fixas. Exemplos: remanejar ou reduzir o treino seguinte, aliviar a semana depois de carga extra. Eles continuam automáticos, com aviso em Notificações e opção de desfazer o mais recente (ADR 0047).

A IA continua onde a entrada é do usuário: geração do plano a partir do setup, conversa com o Piu e feedback em texto (fluxo "IA propõe, regras validam").

## Consequências

- O motor de regras ganha mais responsabilidade e mais testes no épico 5. Em troca, o comportamento fica previsível e testável.
- A jornada 4 continua como foi validada; muda só quem calcula o ajuste.
- O ajuste por "não feito" das 22h (ADR 0026) passa a ser só por regras. Se o usuário marcar manualmente que não fez, também é regra (ação pronta).
