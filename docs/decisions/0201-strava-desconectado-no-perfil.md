# ADR 0201: Strava desconectado no Perfil sem aviso à parte, com a seção Strava no topo e o botão oficial

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0049](0049-falha-de-sincronizacao-suspende-nao-feito.md), [ADR 0115](0115-marca-do-strava-no-app.md), [ADR 0116](0116-desconectar-o-strava.md), [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md) e [ADR 0196](0196-status-do-strava-em-chip.md)

## Contexto

Se o acesso ao Strava for revogado, o app detecta, sobe o Strava para o topo do Perfil e pede a reconexão (wireframe do Perfil e ADR 0116). A reconexão pelo Perfil usa o botão oficial "Connect with Strava" (ADR 0115). O Hoje mostra a falha num AvisoNeutro (ADR 0150). Faltava a forma no Perfil em alta fidelidade.

Foram comparadas três opções: o AvisoNeutro no topo com o botão oficial e a seção Strava abaixo; só a seção Strava, no topo, com o motivo dentro do grupo e o botão oficial embaixo; e o AvisoNeutro com o botão em ardósia, como no Hoje, que contraria o ADR 0115.

## Decisão

- **Sem aviso à parte no Perfil.** A própria seção **Strava** sobe para logo abaixo do título "Perfil", antes de Meus dados.
- No grupo da seção (ADRs 0194 e 0196):
  - a linha "Conexão" com o chip neutro **"Desconectado"**;
  - a linha "Última sincronização", com a data e a hora da última vez ("Segunda, 9 nov, às 18:40"), sem o botão de atualizar;
  - uma **linha de efeito** em legenda de 13 px, em `texto-secundario`: "O acesso foi revogado no Strava. Sem a conexão, os treinos não são marcados sozinhos, e o "não feito" das 22h fica suspenso."
- Logo abaixo do grupo, o **botão oficial "Connect with Strava"** (ADR 0115), na forma e nas cores da marca do Strava, seguido do "Powered by Strava".
- "Desconectar o Strava" sai enquanto a conexão não volta.
- **Sem vermelho:** é falha, e não risco (ADR 0142).
- O **Hoje continua com o AvisoNeutro** (ADR 0150), porque lá a falha precisa aparecer acima do treino.
- Ao reconectar, a seção volta ao lugar de antes, depois de Meus dados.
- Contrastes: linha de efeito sobre `superficie` 6,8:1 (claro) e 7,1:1 (escuro); o botão oficial segue a marca do Strava.

## Consequências

- O Perfil não repete a mesma informação num aviso e na seção.
- O AvisoNeutro fica para o Hoje e para a conversa com o Piu (ADR 0192).
- O ChipDeStatus do design system Live Run registra o caso "Desconectado" com a seção no topo (ADR 0143).
- Com esta decisão, a tela Perfil em alta fidelidade fica concluída (ADRs 0193 a 0201).
