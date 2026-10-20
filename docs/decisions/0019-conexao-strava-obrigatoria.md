# ADR 0019: Conexão com o Strava obrigatória

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O app planeja e acompanha treinos a partir dos dados reais do usuário. Uma entrada manual opcional deixaria o app abrangente demais e com dados menos confiáveis, o que piora a precisão do planejamento e a experiência. O registro manual de treinos já foi adiado (ADR 0013).

## Decisão

Conectar o Strava é obrigatório para usar o app. Sem a conexão, o usuário não chega ao setup do plano.

## Consequências

- O app trabalha sempre com dados reais e sincronizados.
- Quem conecta o Strava e ainda não tem histórico (ex.: um não praticante) escolhe o nível manualmente (ADR 0015). A conexão continua sendo necessária para acompanhar os treinos daqui em diante.
- Se o usuário recusar ou cancelar a autorização, o app explica por que a conexão é necessária e permite tentar de novo.
- Amigos e família sem conta no Strava precisam criar uma, que é gratuita. Isso deve ser revisto quando Apple Health / Health Connect entrarem (ADR 0009).
- Se o usuário revogar o acesso no Strava depois, o app precisa detectar e pedir a reconexão.
