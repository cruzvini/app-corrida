# ADR 0014: Musculação entra no plano como carga que afeta a corrida

- **Status:** Substituída pelo [ADR 0069](0069-outras-atividades-declaradas-como-carga.md)
- **Data:** 2026-10-19

## Contexto

O usuário combina corrida e musculação. A musculação muda quais dias e qual esforço fazem sentido para os treinos de corrida. Montar treinos de musculação em detalhe não é o objetivo do app.

## Decisão

A musculação faz parte do plano de forma leve: o app registra quando ela acontece e analisa sua carga e esforço para ajustar os treinos de corrida. O app não prescreve exercícios, séries ou cargas de musculação.

A musculação aparece em três momentos:

1. **Setup inicial:** o app pergunta o nível atual de corrida e a frequência semanal de cada modalidade, com a divisão de musculação em nível agregado. Exemplo: corrida 3 dias; musculação 3 dias, sendo 2 de superiores e 1 de inferiores.
2. **Plano:** ao montar a semana, o plano distribui esses treinos em dias específicos (ex.: inferiores na segunda, corrida longa no sábado).
3. **Confirmação:** o Strava confirma que o treino aconteceu, e o usuário pode interagir para ajustar o que foi feito (ex.: "hoje fiz inferiores, não superiores").

## Consequências

- O modelo de plano (ADR 0008) passa a ter sessões de musculação, além das de corrida.
- O motor de regras (ADR 0004) considera a musculação ao distribuir dias e intensidade de corrida.
- A análise de treinos cobre a musculação de forma simplificada (presença, duração, esforço).
- **Fonte dos dados:** a frequência e a divisão vêm do setup, os dias específicos vêm do plano, e o Strava confirma o que aconteceu. No Strava, a atividade costuma chegar com o nome genérico (ex.: "Weight Training").
- Sem correção do usuário, o app assume o grupo muscular previsto no plano para aquele dia. A correção é uma anotação sobre a atividade sincronizada, e não o registro manual de treinos adiado no ADR 0013.
- O grupo muscular importa para a corrida: treino de perna, por exemplo, afeta a recuperação e o esforço dos treinos seguintes.
