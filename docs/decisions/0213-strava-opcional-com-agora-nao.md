# ADR 0213: "Agora não" na conexão com o Strava, com o app em modo manual até conectar

- **Status:** Aceita
- **Data:** 2026-11-13
- **Revisa:** [ADR 0019](0019-conexao-strava-obrigatoria.md)
- **Complementa:** [ADR 0015](0015-nivel-de-corrida-sugerido-e-confirmado.md), [ADR 0049](0049-falha-de-sincronizacao-suspende-nao-feito.md), [ADR 0201](0201-strava-desconectado-no-perfil.md) e [ADR 0206](0206-explicacao-do-strava-com-garantias.md)

## Contexto

O ADR 0019 tornou o Strava obrigatório: sem a conexão, o usuário não chega ao setup. Ao decidir a explicação do Strava no onboarding (ADR 0206), o usuário pediu uma forma de não conectar o Strava agora. Foram comparadas três opções: seguir o onboarding sem o Strava, com o app em modo manual; fazer o setup sem o Strava, mas exigir a conexão para gerar o plano; e manter a conexão obrigatória. O usuário escolheu a primeira e pediu que as informações sobre o que o app acessa e como usa o Strava continuem na tela inteiras, sem ficar recolhidas ou menores por causa da nova opção.

## Decisão

- A tela "Conecte o Strava" ganha o link **"Agora não"**, em `primaria`, peso 500, centralizado, logo abaixo do botão oficial "Connect with Strava", no fim da tela (ADR 0203). O botão oficial continua sendo a ação principal.
- **As informações não mudam:** o porquê e as três garantias (ADR 0206) continuam visíveis por inteiro, no mesmo tamanho e no mesmo grupo, sem recolher, resumir ou mover para outra tela.
- Com "Agora não", o usuário segue o setup:
  - o **nível é escolhido à mão**, como no nível sem histórico (ADR 0015), sem sugestão;
  - o prazo sugerido em "Completar uma distância" e o pace alvo usam só o nível e a frequência, sem histórico;
  - o plano é gerado normalmente.
- Até conectar, o app fica em **modo manual**:
  - os treinos são marcados como feitos à mão, pela pílula "Marcar como feito" do detalhe (ADR 0157);
  - o **"não feito" das 22h fica suspenso**, como na falha de sincronização (ADR 0049), e o plano não se ajusta sozinho por treino perdido;
  - o Hoje mostra o AvisoNeutro pedindo a conexão, e o Perfil mostra a seção Strava no topo com o botão oficial, como no Strava desconectado (ADRs 0150 e 0201), com o texto adaptado ("O Strava ainda não está conectado.").
- Ao conectar depois, o app importa as últimas 12 semanas (ADR 0108), o "não feito" volta a valer daí em diante, e as regras podem sugerir um novo nível, que o usuário confirma pelo Piu.

## Consequências

- Quem não tem conta no Strava ou não quer conectar já consegue usar o app, sem deixar de saber o que a conexão faz.
- O app passa a ter dois modos, com e sem Strava; o motor de regras e os testes precisam cobrir o modo manual.
- Treinos feitos sem marcação não contam: sem o "não feito" automático, o plano depende do usuário marcar.
- O ADR 0019 passa a valer como "o Strava é a fonte de dados recomendada", e não mais como bloqueio do setup.
- Os estados do Hoje e do Perfil sem Strava reaproveitam os da falha e da desconexão; não há tela nova.
