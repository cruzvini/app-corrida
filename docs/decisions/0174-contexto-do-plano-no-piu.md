# ADR 0174: Contexto do plano no Piu com o ícone da aba Plano

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0090](0090-conversa-unica-com-o-piu.md), [ADR 0106](0106-dados-do-strava-nunca-vao-para-a-ia.md) e [ADR 0162](0162-proposta-do-piu-na-conversa.md)

## Contexto

Quando o Piu é aberto pelo "Editar plano com o Piu", um card de contexto entra na conversa com o plano como assunto (ADR 0090). O bloco de contexto do treino foi decidido no ADR 0162 (ContextoDoTreino). Faltava a versão do plano. Foram comparadas três opções de ícone: o calendário da aba Plano, a bandeira do objetivo e nenhum ícone.

## Decisão

- O contexto do plano usa o mesmo bloco do ContextoDoTreino: `neutro-suave`, `raio-campo`, padding de 8 × 12 px.
- **Ícone:** `calendar-blank`, o mesmo da aba Plano, em `primaria`, numa caixa de 32 px em `superficie`.
- **Texto:** o plano em negrito, em `texto` ("Plano para 10 km em 3 jan"; no genérico, "Plano para correr com constância") e, embaixo, a semana e a fase em `legenda` e `texto-secundario` ("Semana 3 de 10 da base").
- Só o plano entra no contexto, nunca dados do Strava (ADR 0106).
- Contrastes: título 15,2:1 (claro) e 12,4:1 (escuro); resumo 5,9:1 e 6,2:1; ícone 7,1:1 e 7,9:1.

## Consequências

- O ícone mostra de onde a conversa veio, como o ícone da atividade no contexto de um treino.
- O ContextoDoTreino do design system Live Run ganha a variante do plano (ADR 0143).
