# ADR 0018: Replanejamento por ações prontas e por conversa livre

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Replanejar a qualquer momento, por qualquer motivo, é o valor central do app. Hoje o usuário faz isso conversando com uma LLM, o que dá flexibilidade total, mas deixa o plano espalhado em texto. Muitos ajustes são repetitivos (pular treino, trocar dia), e outros são únicos (lesão, viagem, mudança de meta).

## Decisão

O app oferece dois caminhos para replanejar:

- **Ações prontas** para os casos comuns, por exemplo: pular treino, trocar dia, semana mais leve, adiar prova.
- **Conversa livre** para o resto: o usuário descreve a situação em texto, a IA (ADR 0005) interpreta e propõe a mudança, e o motor de regras (ADR 0004) valida.

## Consequências

- As ações prontas são determinísticas, não dependem da IA e são cobertas por testes unitários.
- Na conversa livre, a IA não altera o plano diretamente. Ela gera uma proposta estruturada, que passa pelo motor de regras.
- Mudanças que as regras considerem arriscadas seguem o ADR 0017: o app avisa e não bloqueia.
- O histórico de replanejamentos fica registrado no app, e não espalhado em conversas.
- Ainda falta decidir se a mudança proposta é aplicada direto ou se o usuário revisa antes.
