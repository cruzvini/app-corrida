# ADR 0042: Idade sem limite mínimo, só com validação de valor plausível

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O setup pede a idade (critério 2.2). O questionário de prontidão para saúde está fora do MVP (ADR 0013), e o público inclui não praticantes. Foram avaliadas idade mínima de 18 anos, de 16 anos e sem limite.

## Decisão

O app **não tem idade mínima**. Ele só valida se o valor é plausível (de 10 a 100 anos) e mostra um erro no campo fora dessa faixa.

## Consequências

- Menores de idade podem usar o app. A LGPD trata dados de crianças e adolescentes com regras mais rígidas (ex.: consentimento dos responsáveis), o que deve ser reavaliado junto com os ADRs 0013, 0029 e 0030 antes de abrir para outras pessoas.
- A idade é contexto para a IA e para as regras, que devem ser mais conservadoras na progressão para idades nos extremos da faixa.
