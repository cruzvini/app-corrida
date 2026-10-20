# ADR 0014: Musculação entra no plano como carga que afeta a corrida

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

O usuário combina corrida e musculação. A musculação muda quais dias e qual esforço fazem sentido para os treinos de corrida. Montar treinos de musculação em detalhe não é o objetivo do app.

## Decisão

A musculação faz parte do plano de forma leve: o app registra quando ela acontece e analisa sua carga e esforço para ajustar os treinos de corrida. O app não prescreve exercícios, séries ou cargas de musculação.

## Consequências

- O modelo de plano (ADR 0008) passa a ter sessões de musculação, além das de corrida.
- O motor de regras (ADR 0004) considera a musculação ao distribuir dias e intensidade de corrida.
- A análise de treinos cobre a musculação de forma simplificada (presença, duração, esforço).
- **Fonte dos dados:** os dias de musculação são declarados no plano, e o Strava confirma o que aconteceu. No Strava, a atividade costuma chegar com o nome genérico (ex.: "Weight Training").
- O usuário pode anotar o grupo muscular treinado (ombro, perna, peito, costas...) em uma atividade sincronizada. Isso é uma anotação, e não o registro manual de treinos adiado no ADR 0013.
- O grupo muscular importa para a corrida: treino de perna, por exemplo, afeta a recuperação e o esforço dos treinos seguintes.
