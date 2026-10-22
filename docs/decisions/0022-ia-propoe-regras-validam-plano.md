# ADR 0022: IA propõe o plano, motor de regras valida

- **Status:** Aceita (Revisada pelos ADRs [0066](0066-dados-do-strava-nunca-vao-para-a-ia.md) e [0067](0067-ajustes-do-strava-so-pelo-motor-de-regras.md))
- **Data:** 2026-10-20

## Contexto

O usuário já monta planos com uma LLM e valoriza a flexibilidade desse modelo. Gerar planos só por regras exigiria modelos para muitos cenários, o que é difícil com distância livre (ADR 0016). Gerar só com IA seria imprevisível, difícil de testar e sem garantia de segurança.

## Decisão

Na geração do plano, a IA (ADR 0005) monta uma proposta a partir das respostas do setup e do histórico do Strava, e a devolve em formato estruturado (semanas, dias, tipo de treino, distância ou duração, intensidade). O motor de regras (ADR 0004) valida a proposta: limites de segurança, coerência com os dias informados, progressão de volume e recuperação após musculação. O resultado só chega ao usuário depois da validação.

## Consequências

- Este ADR revisa parte do ADR 0004: o motor de regras deixa de gerar o plano e passa a validá-lo, mantendo as ações prontas (ADR 0018) e as sugestões de nível e pace (ADRs 0015 e 0021).
- O mesmo fluxo "IA propõe, regras validam" vale para a geração e para o replanejamento por conversa (ADR 0018).
- A saída da IA precisa seguir um schema definido e versionado. Uma saída fora do schema é rejeitada e pode ser tentada de novo.
- Quando a validação encontra um problema, existem dois caminhos: um erro de coerência (ex.: treino em dia não disponível) volta para a IA corrigir; um risco (ex.: progressão agressiva) vira aviso ao usuário, sem bloqueio (ADR 0017).
- Os testes usam o provedor fake (ADR 0005) para gerar propostas conhecidas, inclusive inválidas. A validação é coberta por testes unitários.
- Cada geração tem um custo de chamada de IA, que deve ser considerado nos requisitos não funcionais.
