# ADR 0080: Treino feito mostra só o previsto × feito

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0075 definiu que o treino feito mostra o executado, a comparação geral entre previsto e feito e, abaixo, a lista do previsto por bloco. Depois que o treino foi feito, o previsto só interessa para comparar com o que foi executado. A lista por bloco repete o plano sem acrescentar nada, e o executado em destaque repete a coluna "feito" da comparação.

## Decisão

No detalhe de um treino de corrida **feito**, aparece só a seção **"Previsto × feito"**:

- distância, duração e pace médio, lado a lado, com o previsto e o feito (ADR 0079);
- abaixo, a atividade do Strava de origem (nome e horário).

Saem a lista do previsto por bloco e o bloco separado do executado. Os blocos com o pace previsto aparecem só enquanto o treino está previsto.

## Consequências

- O treino feito fica mais curto, com foco no que aconteceu.
- Quem quiser rever os blocos previstos de um treino feito pode perguntar ao Piu. Não há atalho na tela.
- Revisa o ADR 0075.
