# ADR 0051: Dor ou lesão no feedback não gera recomendação automática de procurar um profissional

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O critério 5.6 e os ADRs 0028 e 0039 previam que, se o feedback ou o setup mencionasse dor ou lesão, a resposta recomendaria procurar orientação profissional. Isso cria um caso especial nas mensagens e se choca com o critério 5.7, que diz que um feedback sem pedido de mudança não gera mensagem. Quem usa o app conhece as próprias limitações e decide se quer continuar treinando.

## Decisão

O app não envia a recomendação automática de procurar um profissional. Uma menção a dor ou lesão é tratada como qualquer outro feedback:

- Fica no histórico do treino e entra como contexto nos próximos detalhamentos e ajustes (ADR 0028).
- Se pedir mudança, gera uma proposta de ajuste com o antes e o depois, que o usuário aceita, edita ou descarta (critério 5.5).
- Se não pedir mudança, o plano não muda e nenhuma mensagem é enviada (critério 5.7).
- O usuário pode ajustar o nível e a intensidade dos treinos a qualquer momento conversando com o Piu (ADR 0035).

A mesma regra vale para lesões e limitações informadas no setup (ADR 0039).

## Consequências

- Substitui a recomendação prevista no critério 5.6 e nos ADRs 0028, 0039 e 0050.
- O critério 5.6 passa a dizer que dor ou lesão segue o mesmo tratamento dos outros feedbacks.
- O app continua sem fazer diagnóstico. O aviso geral de que o app não substitui orientação profissional, nos alertas de risco (ADR 0017), continua valendo.
- A IA ainda considera a dor ao propor e detalhar treinos, e as regras de risco (ADR 0017) seguem ativas.
