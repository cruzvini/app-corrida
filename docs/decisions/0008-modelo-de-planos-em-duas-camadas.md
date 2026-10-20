# ADR 0008: Modelo de planos em duas camadas (genérico e específico)

- **Status:** Aceita
- **Data:** 2026-10-19

## Contexto

Os usuários têm objetivos diferentes: alguns querem só correr com regularidade, outros treinam para uma prova ou um recorde pessoal.

## Decisão

Modelar os planos em duas camadas:
- **Plano genérico:** idade, peso, nível de corrida e dias de treino por semana.
- **Plano específico:** tudo do genérico, mais prova ou meta de PR, prazo e pace alvo.

## Consequências

- O plano específico estende o genérico, o que permite reaproveitar regras.
- O modelo de dados e o motor de regras precisam suportar as duas camadas.
- O usuário pode alterar ou replanejar qualquer camada a qualquer momento.
- O plano genérico também inclui a frequência semanal de corrida e de musculação e a divisão da musculação (ex.: 2 superiores, 1 inferiores). Ver ADR 0014.
