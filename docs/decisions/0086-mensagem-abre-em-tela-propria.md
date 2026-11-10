# ADR 0086: Mensagem de Notificações abre em tela própria

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Em Notificações, cada mensagem pode ter texto, o antes e o depois dos dias afetados e botões de decisão (ADRs 0047, 0050 e 0053). Foram avaliados: abrir a mensagem em tela própria ou expandir no lugar, dentro da lista.

## Decisão

Tocar numa mensagem abre uma **tela própria**, por cima da aba Notificações, com voltar para a lista. É o mesmo padrão do detalhe do treino (ADR 0036) e do detalhe do plano (ADR 0083).

## Consequências

- O antes e o depois e os botões têm espaço, sem alongar a lista.
- Abrir a tela é o que marca a mensagem como lida (ADR 0054).
- As notificações de ajuste que levam a um treino (ADR 0036) abrem a mensagem, e dela o usuário vai ao treino.
