# ADR 0088: Antes e depois em uma linha por dia, com o antes riscado

- **Status:** Aceita (forma final no ADR 0145)
- **Data:** 2026-11-10

## Contexto

Ajustes e propostas mostram o antes e o depois dos dias afetados, em Notificações e na conversa com o Piu (ADRs 0026, 0062 e 0085). Foram avaliados: uma linha por dia com o antes riscado, ou duas colunas lado a lado.

## Decisão

O antes e o depois aparecem em **uma linha por dia afetado**: o dia à esquerda e, à direita, o treino de antes **riscado** e o de depois embaixo. Dias que não mudam, mas ajudam a entender a mudança, aparecem com "sem mudança".

## Consequências

- Cabe na largura do celular sem cortar os nomes dos treinos.
- O mesmo componente serve para Notificações, para o Piu e para o "Adiar objetivo" (ADR 0060).
- O riscado não pode ser a única pista da mudança: a ordem (antes em cima, depois embaixo) e o tom mais claro do antes ajudam quem usa leitor de tela ou tem baixa visão, a validar no card 5.
