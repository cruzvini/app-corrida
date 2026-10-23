# ADR 0079: Desconectar o Strava deixa o app no estado de falha de sincronização

- **Status:** Aceita
- **Data:** 2026-10-22
- **Complementa:** [ADR 0049](0049-falha-de-sincronizacao-suspende-nao-feito.md) e [ADR 0074](0074-tokens-do-strava-no-vault.md)
- **Revisa:** [ADR 0038](0038-conteudo-da-aba-perfil.md)

## Contexto

A tela "por que conectar o Strava" promete que o usuário pode desconectar quando quiser no Perfil, e o ADR 0074 define que desconectar revoga o acesso no Strava e apaga os tokens. Faltava dizer o que acontece com o app depois, já que a conexão é obrigatória (ADR 0019). As opções eram: bloquear o app até reconectar, seguir como numa falha de sincronização, ou apagar tudo e recomeçar o setup.

## Decisão

- **Desconectar** fica na seção Strava do Perfil (ADR 0038), com uma confirmação que explica o efeito.
- Ao confirmar, o backend revoga o acesso no Strava e apaga os tokens (ADR 0074). **As atividades já importadas ficam.**
- O app continua usável, **no mesmo estado da falha de sincronização** (ADR 0049):
  - a aba Hoje mostra o aviso "Strava desconectado", com o botão oficial para conectar (ADR 0078);
  - a rotina das 22h não marca nenhum treino como não feito; os treinos ficam pendentes;
  - depois de 3 dias, o app pede que o usuário marque os pendentes manualmente;
  - as marcações manuais, o Piu e as ações prontas continuam funcionando.
- **Ao reconectar**, a conciliação dos últimos 7 dias (ADR 0073) processa os dias pendentes, como na volta de uma falha.

## Consequências

- Um só estado no app e no backend para "sem Strava", seja por falha, revogação no Strava ou desconexão no Perfil. O texto do aviso muda conforme a causa.
- Desconectar não leva a perder o plano nem o histórico.
- Dias pendentes com mais de 7 dias não são buscados na reconexão; ficam para a marcação manual, que o app já pede depois de 3 dias.
- Verificar no épico 4, na política de API do Strava, se as atividades importadas precisam ser apagadas quando o usuário desconecta. Se precisarem, este ADR é revisto.
