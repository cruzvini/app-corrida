# ADR 0018: Replanejamento por ações prontas e por conversa livre

- **Status:** Aceita (revisada pelos ADRs 0078 e 0085)
- **Data:** 2026-10-20

## Contexto

Replanejar a qualquer momento, por qualquer motivo, é o valor central do app. Hoje o usuário faz isso conversando com uma LLM, o que dá flexibilidade total, mas deixa o plano espalhado em texto. Muitos ajustes são repetitivos (pular treino, trocar dia), e outros são únicos (lesão, viagem, mudança de meta).

## Decisão

O app oferece dois caminhos para replanejar:

- **Ações prontas** para os casos comuns, por exemplo: pular treino, trocar dia, semana mais leve, adiar prova.
  *Revisado pelo ADR 0078: pular e trocar dia deixam de ser ações prontas; mudar um treino é replanejar com o Piu.* *Revisado pelo ADR 0085: semana mais leve também deixa de ser ação pronta e vira proposta do Piu; a única ação pronta de replanejamento é adiar o objetivo, no detalhe do plano.*
- **Conversa livre** para o resto: o usuário descreve a situação em texto, a IA (ADR 0005) interpreta e propõe a mudança, e o motor de regras (ADR 0004) valida.

## Consequências

- As ações prontas são determinísticas, não dependem da IA e são cobertas por testes unitários.
- Na conversa livre, a IA não altera o plano diretamente. Ela gera uma proposta estruturada, que passa pelo motor de regras.
- Mudanças que as regras considerem arriscadas seguem o ADR 0017: o app avisa e não bloqueia.
- O histórico de replanejamentos fica registrado no app, e não espalhado em conversas.
- **Aplicação depende do caminho:** as ações prontas aplicam a mudança direto, porque o efeito é previsível. Na conversa livre, o app mostra o antes e o depois, e o usuário aceita, edita ou descarta antes de aplicar.
- **Desfazer:** a última ação pronta aplicada pode ser desfeita, logo após a ação e também pelo histórico de replanejamentos. Não há versionamento completo do plano no MVP.
