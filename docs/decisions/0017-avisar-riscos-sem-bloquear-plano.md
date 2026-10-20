# ADR 0017: Avisar sobre riscos da meta sem bloquear a criação do plano

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Com distância livre (ADR 0016), o usuário pode definir metas muito fora do comum para o seu nível ou prazo (ex.: um não praticante querendo correr 21 km em 6 semanas). O valor central do app é dar ao usuário controle total do plano.

## Decisão

Durante a montagem do plano, quando a meta for muito fora do comum para o nível ou o prazo, o app dá um retorno ao usuário: explica os riscos envolvidos e sugere alternativas (ex.: mais semanas, ou uma distância intermediária antes). O app **não bloqueia** a criação do plano. A decisão final é do usuário.

## Consequências

- O app nunca impede o usuário de seguir com a meta escolhida.
- O retorno sobre riscos faz parte da jornada de setup e geração do plano.
- A escolha do usuário de seguir apesar do aviso fica registrada no plano. Isso serve de contexto para feedbacks e replanejamentos futuros.
- O texto deve deixar claro que o app não substitui orientação médica ou profissional.
- **Detecção por regras, explicação pela IA:** o motor de regras (ADR 0004) detecta a meta fora do comum com limites objetivos (ex.: aumento de volume semanal, prazo curto para a distância e o nível). A IA (ADR 0005) explica os riscos e as alternativas de forma personalizada.
- A detecção é determinística e coberta por testes unitários (ADR 0011). Nos testes, o provedor fake substitui a explicação da IA.
