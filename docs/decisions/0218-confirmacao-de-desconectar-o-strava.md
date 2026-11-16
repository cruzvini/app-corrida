# ADR 0218: Confirmação de desconectar o Strava com o diálogo do "Sair"

- **Status:** Aceita
- **Data:** 2026-11-16
- **Complementa:** [ADR 0116](0116-desconectar-o-strava.md), [ADR 0163](0163-dialogo-de-confirmacao.md), [ADR 0195](0195-linhas-de-acao-do-perfil.md) e [ADR 0201](0201-strava-desconectado-no-perfil.md)

## Contexto

O critério 1.8 e o ADR 0116 pedem uma confirmação que explique o efeito de desconectar o Strava. Na validação do design (card 6, issue #25), o diálogo não estava desenhado.

## Decisão

- Tocar em "Desconectar o Strava", no Perfil, abre o **DialogoDeConfirmacao** do "Sair" (ADR 0163), sem componente novo.
- **Título:** "Desconectar o Strava?"
- **Texto:** "O Live Run para de ler suas atividades e apaga o acesso. Seu plano e as atividades já importadas continuam. Até conectar de novo, você marca os treinos à mão."
- **Botões:** "Cancelar" secundário e "Desconectar" em ardósia, sem vermelho, porque não é risco (ADR 0142).
- Ao confirmar, o Perfil passa ao estado "Strava desconectado" (ADR 0201), e o app funciona como numa falha de sincronização (ADR 0116).
- O estado "Desconectar o Strava" fica na tela Perfil, em [`telas/index.html`](../telas/index.html).

## Consequências

- O critério 1.8 passa a ter estado.
- O diálogo de confirmação fica com quatro usos: apagar feedback, desfazer ajuste, sair e desconectar o Strava, sempre em ardósia.
