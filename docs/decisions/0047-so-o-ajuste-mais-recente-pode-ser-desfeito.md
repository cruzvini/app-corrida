# ADR 0047: Só o ajuste automático mais recente pode ser desfeito

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O critério 4.9 diz que todo ajuste automático chega à caixa de entrada e pode ser desfeito. O ADR 0018 permite desfazer só a última ação. Ajustes podem se acumular: um treino não feito na segunda gera um ajuste (ADR 0026), e uma corrida extra na terça gera outro (ADR 0027), já calculado sobre o plano alterado pelo primeiro.

## Decisão

Só o ajuste mais recente pode ser desfeito, seja ele automático ou de uma ação pronta.

- Os ajustes mais antigos continuam na caixa de entrada, com o antes e o depois, mas o botão "Desfazer" dá lugar a "Pedir ao Piu para mudar" (ADR 0035).
- Depois de desfazer o ajuste mais recente, o anterior não volta a poder ser desfeito.

## Consequências

- Fica coerente com o ADR 0018, e nenhum ajuste é desfeito enquanto outro depende dele.
- O app guarda o estado anterior apenas do último ajuste, o que simplifica o modelo de dados.
- O critério 4.9 passa a dizer que o ajuste mais recente pode ser desfeito.
- Para mudar um ajuste antigo, o usuário conversa com o Piu, e o pedido segue o fluxo de proposta com o antes e o depois (critério 6.3).
