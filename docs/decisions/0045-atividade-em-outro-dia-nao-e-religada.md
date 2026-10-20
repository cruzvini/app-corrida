# ADR 0045: Atividade feita em outro dia não é ligada ao treino previsto

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O ADR 0025 marca um treino como feito quando há uma atividade sincronizada no mesmo dia e na mesma modalidade. Falta definir o que acontece quando o usuário adianta ou atrasa um treino. Por exemplo, faz na segunda a corrida prevista para terça.

## Decisão

O app não tenta adivinhar a qual treino a atividade corresponde. A regra de correspondência continua estrita: mesmo dia e mesma modalidade.

- Uma atividade feita em outro dia conta como carga fora do plano, no dia em que aconteceu (ADR 0027).
- O treino previsto continua pendente. Se não houver atividade nem marcação até as 22h do dia previsto, ele conta como não feito, e o plano se ajusta (ADR 0026).
- Para ligar a atividade a outro treino, o usuário usa a ação pronta "trocar dia" (ADR 0018).

## Consequências

- A regra de correspondência fica simples, previsível e fácil de cobrir com testes unitários.
- Os ajustes automáticos de carga e de treino não feito, que já existem, cobrem o caso sem lógica nova.
- Quem adianta treinos com frequência pode receber ajustes que não esperava. Esses ajustes chegam à caixa de entrada e podem ser desfeitos (critério 4.9).
