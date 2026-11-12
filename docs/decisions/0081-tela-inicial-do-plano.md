# ADR 0081: Tela inicial do Plano com objetivo, fases e semanas

- **Status:** Aceita (revisada pelos ADRs 0094 e 0169)
- **Data:** 2026-11-10

## Contexto

O ADR 0034 diz que a aba Plano destaca o objetivo e mostra fases, semanas e treinos, com um botão "Editar plano" que abre o Piu. O rascunho do wireframe também tinha o gráfico de volume semanal e as ações prontas da semana. Ficaram em aberto a ordem da tela, o lugar do "Editar plano" e as semanas anteriores.

## Decisão

A tela inicial do Plano tem, de cima para baixo:

1. **Card do objetivo**, com o botão **"Editar plano com o Piu"**. Tocar no card abre o detalhe do plano (ADR 0083).
2. **Fases** do plano (ADR 0082).
3. **Semanas anteriores**, recolhidas numa linha. Ao tocar, elas abrem no mesmo estilo da semana atual, com um card por dia.
4. **Semana atual**, com um card por dia, no mesmo contorno e selos da faixa do Hoje (ADRs 0070 a 0073). Tocar num dia abre o detalhe do treino. *Revisado pelo ADR 0169: os dias ficam num grupo sem contorno, com o dia em miniatura do DiaDaFaixa levando o status.*
5. **Próximas semanas**, com fase e volume previsto, até serem detalhadas (ADR 0044).

A tela inicial não tem o gráfico de volume, que fica no detalhe do plano, nem ações prontas (ADR 0084).

## Consequências

- A tela inicial fica com a visão do todo e da semana, e o Hoje continua com o dia a dia.
- As semanas anteriores mostram o que foi feito sem um histórico à parte. O histórico de replanejamentos continua no Perfil (ADR 0038). *Revisado pelo ADR 0094: o histórico de replanejamentos saiu do Perfil.*
- No plano genérico, que não tem fases, a tela começa pelo objetivo e segue para as semanas.
