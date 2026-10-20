# ADR 0028: Feedback do usuário vira contexto e gera proposta de ajuste quando relevante

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Depois de um treino, o usuário pode deixar um feedback opcional em texto (ADR 0024), como "senti a panturrilha" ou "o intervalado foi pesado demais". O app não analisa cada treino por conta própria, então o feedback do usuário é a principal fonte de percepção subjetiva sobre o treino.

## Decisão

- Todo feedback fica registrado no histórico do treino e é usado como contexto nos próximos detalhamentos (ADR 0023) e ajustes (ADRs 0026 e 0027).
- Quando o feedback indicar algo que pede mudança (ex.: dor, cansaço excessivo, treino fácil demais), a IA propõe um ajuste. Como a origem é texto livre, a proposta segue o fluxo da conversa livre (ADR 0018): passa pela validação das regras (ADR 0022) e pela revisão do usuário, que aceita, edita ou descarta.
- Quando o feedback não pede mudança, o plano não muda e nenhuma mensagem é enviada.

## Consequências

- A IA precisa classificar se o feedback pede ou não uma mudança. Nos testes, o provedor fake (ADR 0005) simula os dois casos.
- O app não faz diagnóstico. Dor ou lesão no feedback tem o mesmo tratamento dos outros feedbacks, sem recomendação automática de procurar um profissional (ADR 0051).
- Só os feedbacks que pedem mudança geram chamada de ajuste à IA, o que limita o custo.
- O feedback é dado de saúde em texto livre e deve ser tratado com o mesmo cuidado de privacidade dos demais dados (RLS, ADR 0003, e requisitos não funcionais).
