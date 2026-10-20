# ADR 0023: Plano inteiro com detalhe progressivo

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Um plano totalmente detalhado desde o início fica desatualizado à medida que os treinos reais divergem do previsto. Um plano só de curto prazo não mostra para onde o treino vai. O app tem dados reais do Strava para adaptar o plano continuamente.

## Decisão

- **Plano específico:** o app gera a estrutura completa até a data da prova ou o prazo da meta (fases e volume semanal previsto), mas detalha treino a treino apenas as próximas 1 a 2 semanas. As semanas seguintes são detalhadas progressivamente, com base nos treinos reais sincronizados do Strava.
- **Plano genérico:** sem data final, o horizonte é contínuo. O app sempre mantém as próximas 1 a 2 semanas detalhadas.

## Consequências

- O usuário vê o plano como um todo (fases e volume) e os treinos detalhados das próximas semanas.
- Cada novo detalhamento segue o fluxo "IA propõe, regras validam" (ADR 0022), usando a estrutura do plano e os dados reais como entrada.
- O detalhamento progressivo precisa de um gatilho, definido no [ADR 0044](0044-detalhamento-semanal-na-rotina-das-22h.md): rotina das 22h do último dia de cada semana do plano.
- **Sem aprovação semanal:** cada nova semana detalhada entra direto no plano, e a caixa de entrada (ADR 0007) recebe um resumo (ex.: "semana 5 pronta: 3 corridas, 24 km"). O usuário pode replanejar quando quiser (ADR 0018).
- A estrutura (fases e volume) também pode ser ajustada por replanejamento (ADR 0018).
- O modelo de dados precisa distinguir a estrutura do plano (fases e volume semanal) dos treinos detalhados.
