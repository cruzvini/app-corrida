# ADR 0066: Dados do Strava nunca vão para a IA

- **Status:** Aceita
- **Data:** 2026-10-22
- **Revisa:** [ADR 0022](0022-ia-propoe-regras-validam-plano.md) e [ADR 0029](0029-dados-enviados-ao-provedor-de-ia.md)

## Contexto

A [Política de API do Strava](https://www.strava.com/legal/api_policy), vigente desde 2026-06-01, proíbe na seção 5.3 usar dados do Strava em qualquer aplicação de IA, incluindo treinamento, grounding, RAG e colocar os dados na janela de contexto de um modelo. A proibição vale também para dados derivados ou agregados. A única exceção é o próprio Strava MCP, para uso pessoal do assinante. A seção 5.4 também proíbe processar os dados para "analytics" e geração de insights. Mostrar os dados ao próprio usuário é permitido (seção 2.3).

## Decisão

Partindo da **pior hipótese**:

- Os dados do Strava (atividades, métricas e o status "feito" marcado automaticamente) são exibidos ao usuário e usados **só pelo motor de regras**, que é código determinístico, sem IA.
- **A IA nunca recebe dado vindo do Strava**, nem derivado.
- **O que o Piu vê:** o plano atual (inclusive ajustes feitos pelas regras), o texto do usuário (feedbacks, conversa), as marcações manuais e a nota de esforço dada pelo usuário (ADR 0070). Ficam de fora o status marcado automaticamente pelo Strava e as métricas.
- O plano inicial gerado pela IA usa só as respostas do setup, inclusive o nível e o pace que o usuário confirmou.

## Consequências

- **Risco residual:** numa leitura estrita, um plano ajustado pelas regras por causa de uma atividade pode ser visto como dado derivado. O risco é aceito e deve ser revisto se o Strava esclarecer a regra.
- A sugestão de nível (ADR 0015) e de pace (ADR 0021) a partir do Strava é feita pelo motor de regras, nunca pela IA.
- O ADR 0029 passa a valer só para dados que não vêm do Strava.
- O backend precisa marcar a origem de cada dado (Strava ou usuário) e filtrar o que vai para a IA. Esse filtro precisa de testes.
- Apple Health / Health Connect (ADR 0009) terá as regras de uso com IA verificadas no épico dessa fonte, sem assumir nada agora.
- Se o Strava liberar o uso com IA no futuro, este ADR é revisto.
