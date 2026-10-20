# ADR 0043: Data de início do plano escolhida no setup

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Não estava definido quando o plano começa depois do aceite (jornada 3). Foram avaliados: começar no próximo dia de treino a partir de amanhã, começar na próxima segunda-feira e deixar o usuário escolher.

## Decisão

O setup pergunta **quando o usuário quer começar**:

- Opções rápidas: hoje e os próximos 5 dias (ex.: "Hoje", "Amanhã", "Qui 22", "Sex 23"...).
- "Outro dia" abre um calendário para escolher qualquer data futura.
- No plano específico, a data de início precisa ser anterior à data da prova ou ao prazo da meta. Se a distância até a prova ficar curta para a meta, entra o aviso de risco (ADR 0017).

A pergunta vem depois do tipo de plano e da meta, antes do resumo, e pode ser editada no resumo (critério 2.9).

## Consequências

- A jornada 2 ganha um critério: "Escolho quando quero começar: hoje, um dos próximos dias ou outra data no calendário."
- A primeira semana pode ser parcial; as regras ajustam o volume de forma proporcional.
- Se o início for hoje e hoje for um dia marcado, o treino de hoje já aparece no Hoje depois do aceite.
- Se o aceite acontecer depois da data de início escolhida (ex.: o usuário revisou no dia seguinte), o plano começa no dia do aceite, e o app avisa.
- Até a data de início, a aba Hoje mostra quando o plano começa e o primeiro treino.
