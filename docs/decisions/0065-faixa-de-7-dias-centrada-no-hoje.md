# ADR 0065: Faixa de 7 dias no Hoje, centrada no dia atual, no lugar do lembrete do treino anterior

- **Status:** Aceita (revisada pelo ADR 0070)
- **Data:** 2026-11-09

## Contexto

O ADR 0034 definiu que a aba Hoje mostra o treino do dia, um pequeno lembrete do treino anterior (ex.: "Ontem: Longão 11 km · feito") e o calendário da semana. No wireframe, a semana aparecia como uma faixa de segunda a domingo. O lembrete repete uma informação que a própria faixa pode mostrar, e uma semana fixa de segunda a domingo esconde os dias anteriores quando o dia atual é segunda.

## Decisão

- O Hoje **não tem** o lembrete do treino anterior.
- Abaixo do card do treino do dia fica uma **faixa de 7 dias**, no mesmo formato compacto do wireframe: o **dia atual no centro**, os **3 dias anteriores à esquerda** e os **3 próximos dias à direita**. A faixa acompanha o dia atual e não segue a semana do plano.
- Cada dia mostra o dia da semana, o número e o tipo abreviado do treino (ex.: Int, Leve, Sup). Dia de descanso mostra um traço.
- Dias passados mostram o status: **✓ quando feito** e **✗ quando não feito**. Descanso não tem status. *Revisado pelo ADR 0070: o status passa a ser a cor do ícone de cada treino do dia.*
- Tocar em um dia com treino abre a tela de detalhe do treino (ADR 0036). Dia de descanso não abre nada.

## Consequências

- O ADR 0034 fica revisado neste ponto: o lembrete do treino anterior sai do Hoje.
- O critério 4.1 passa a dizer: "Ao abrir o app, vejo o treino de hoje, com tipo e blocos, e os 3 dias anteriores e os 3 próximos."
- O status dos dias passados precisa considerar o estado "pendente" do ADR 0049: enquanto a sincronização falha, o dia não mostra ✓ nem ✗.
- A visão da semana do plano, com fases e semanas, continua na aba Plano.
