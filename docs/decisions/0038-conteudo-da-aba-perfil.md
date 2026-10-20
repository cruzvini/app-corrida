# ADR 0038: Conteúdo da aba Perfil, com o histórico de replanejamentos

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

A aba Perfil (ADR 0034) reúne o que muda pouco: dados do setup, conexão com o Strava e conta. O histórico de replanejamentos (critério 6.7) precisava de um lugar. Foram avaliados: aba Plano, Perfil e Notificações.

## Decisão

A aba Perfil tem quatro seções:

- **Meu treino:** nível, idade, peso, dias de corrida e de musculação (com a divisão), meta e prazo. Tudo editável; ao salvar, o plano é reajustado a partir de hoje (critério 6.5), reaproveitando as telas do setup (ADR 0037).
- **Histórico de replanejamentos:** o que mudou, quando e por quê, incluindo ações prontas, conversas com o Piu e ajustes automáticos (critério 6.7).
- **Strava:** status da conexão, última sincronização e opção de reconectar.
- **Conta:** e-mail e sair.

## Consequências

- A aba Plano fica focada no objetivo e no plano atual.
- O histórico é uma consulta ocasional, então ficar um nível abaixo, dentro do Perfil, não atrapalha o uso diário.
