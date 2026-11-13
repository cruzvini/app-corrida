# ADR 0176: Coluna Revisão para issue com PR aguardando merge

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0175](0175-acompanhamento-no-board-com-painel.md)

## Contexto

O board "App Corrida" tem quatro status: Backlog, Em andamento, Revisão e Concluído. O ADR 0175 citou só três, e a coluna Revisão estava sem uso. Foram comparadas duas opções: usar a coluna para mostrar o que espera o merge, ou removê-la e deixar o board mais simples.

## Decisão

- A coluna **Revisão** fica e mostra a issue cujo PR está aberto, esperando a revisão e o merge do usuário.
- O ciclo de uma issue é: **Backlog** → **Em andamento** (o trabalho começou) → **Revisão** (o PR que a fecha foi aberto) → **Concluído** (o PR entrou na `main` e a issue fechou).
- Uma issue entregue em mais de um PR (com "Parte de #n") fica em Em andamento entre um PR e outro. Ela só vai para Revisão quando abre o PR que a fecha.
- Quem abre o PR move a issue para Revisão no mesmo passo. Quando o PR entra com `Closes #n`, a issue fecha e vai para Concluído.

## Consequências

- O board mostra o que está parado esperando o usuário. O painel do ADR 0175 também mostra esse grupo.
- Se o PR for fechado sem merge, a issue volta para Em andamento.
