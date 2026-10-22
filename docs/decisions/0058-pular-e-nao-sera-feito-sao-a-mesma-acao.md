# ADR 0058: "Pular" e "não será feito" são a mesma ação

- **Status:** Aceita (Revisada pelo [ADR 0067](0067-ajustes-do-strava-so-pelo-motor-de-regras.md): o ajuste depois do pulo é feito só pelas regras, sem IA)
- **Data:** 2026-10-20

## Contexto

O critério 6.1 lista "pular treino" como ação pronta, que é determinística e não depende da IA (ADR 0018). O critério 4.6 diz que o usuário pode informar que um treino não foi ou não será feito, e então o plano se ajusta na hora pela IA (ADR 0026). As duas coisas parecem iguais para o usuário, mas seguiam regras diferentes.

## Decisão

Existe um botão só, **"Pular"**, no card do Hoje e no detalhe do treino (ADR 0036).

- O pulo é determinístico: o treino passa a não feito na hora.
- Em seguida, vem o ajuste automático do ADR 0026, pela IA e pelas regras (ADR 0022), com o antes e o depois em Notificações.
- O pulo e o ajuste contam como uma ação só. Desfazer, enquanto ela for a mais recente (ADR 0047), desfaz os dois.
- Se a IA falhar, o treino continua pulado, sem ajuste, e o backend tenta de novo na rotina das 22h.

## Consequências

- O usuário não precisa escolher entre duas ações quase iguais.
- A parte determinística (o status do treino) não depende da IA e é coberta por testes unitários. Só o ajuste depende dela.
- O critério 4.6 e a ação "pular treino" do critério 6.1 passam a ser o mesmo comportamento.
