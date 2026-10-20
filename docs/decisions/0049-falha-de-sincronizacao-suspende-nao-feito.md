# ADR 0049: Falha na sincronização com o Strava suspende o "não feito" automático

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Às 22h, a rotina diária marca como não feitos os treinos sem atividade nem marcação, e o plano se ajusta (ADR 0026). Se a sincronização com o Strava parar no dia a dia (acesso revogado, token inválido ou Strava fora do ar), essa rotina marcaria como não feitos treinos que o usuário fez, e o plano se ajustaria sem motivo. O ADR 0040 trata só da falha na importação inicial.

## Decisão

Se a última sincronização com o Strava falhou, a rotina das 22h não marca nenhum treino como não feito. Os treinos do dia ficam **pendentes**.

- A aba Hoje mostra o aviso "Não conseguimos falar com o Strava", com um botão para reconectar.
- Quando a sincronização volta, o app processa os dias pendentes de uma vez: liga as atividades aos treinos (ADRs 0025, 0045 e 0046) e marca como não feitos os que ficaram sem atividade nem marcação. Isso gera um único ajuste com aviso na caixa de entrada.
- Se a sincronização ficar mais de 3 dias sem funcionar, o app pede que o usuário marque os treinos pendentes manualmente, como feitos ou não feitos (ADR 0025).
- O usuário pode marcar treinos manualmente a qualquer momento, mesmo durante a falha.

## Consequências

- Uma falha técnica não gera falsos "não feito" nem ajustes indevidos.
- O backend precisa diferenciar "sem atividade" de "sem sincronização" e guardar o estado "pendente" do treino.
- Durante a falha, o plano pode ficar alguns dias sem ajuste. O limite de 3 dias reduz esse risco.
- O detalhamento da próxima semana (ADR 0044) espera os dias pendentes serem resolvidos. Enquanto isso, a semana já detalhada continua valendo.
- O limite de 3 dias pode ser revisto no épico "Motor de regras".
