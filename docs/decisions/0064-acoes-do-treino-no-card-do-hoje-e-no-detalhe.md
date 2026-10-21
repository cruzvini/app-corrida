# ADR 0064: Ações do treino no card do Hoje e na tela de detalhe

- **Status:** Aceita
- **Data:** 2026-10-21

## Contexto

O ADR 0036 colocou as ações prontas do treino na tela de detalhe. No wireframe da aba Hoje (épico #2, card 4), ficou a dúvida se as ações mais usadas também deveriam ficar no card do treino do dia, a um toque, ou só no detalhe, deixando o card mais limpo.

## Decisão

- O card do treino do dia, na aba Hoje, mostra as ações **Feito, Pular e Trocar dia**.
- A tela de detalhe do treino continua com todas as ações (ADR 0036).
- As ações têm o mesmo comportamento nos dois lugares (ADRs 0025, 0057 e 0058).

## Consequências

- O uso diário mais comum (marcar feito, pular ou trocar o treino de hoje) não precisa abrir o detalhe.
- O card do Hoje fica mais denso, o que pesa na identidade visual (card 5).
- Os componentes das ações devem ser compartilhados entre o card e o detalhe, para não divergirem.
