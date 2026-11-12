# ADR 0166: Linhas de apoio em frases, sem pontos médios

- **Status:** Aceita
- **Data:** 2026-11-12
- **Revisa o texto de:** [ADR 0149](0149-chips-de-status-do-treino.md), [ADR 0154](0154-cabecalho-e-secoes-do-detalhe.md), [ADR 0155](0155-chip-de-nao-feito.md), [ADR 0157](0157-acoes-diretas-no-detalhe.md), [ADR 0160](0160-feedback-salvo-na-propria-mensagem.md) e [ADR 0162](0162-proposta-do-piu-na-conversa.md)
- **Complementa:** [ADR 0033](0033-tom-de-voz-parceiro-de-treino.md) e [ADR 0141](0141-skills-de-design.md)

## Contexto

As linhas de apoio das telas Hoje e Detalhe juntavam os dados com pontos médios: "Segunda, 9 nov · Semana 3 de 10 · Base", "~50 min · 5:47/km médio", "Feito · Strava", "Salvo · Hoje, 19:41 · Apagar", "Feito · 5,1 km · 6:28/km". A skill `frontend-design` (ADR 0141) aponta metadados unidos por pontos médios como texto padrão de template. Foram comparadas três opções: manter, frases naturais e no máximo um ponto por linha.

## Decisão

- **Nenhum ponto médio no texto do app.** As linhas de apoio viram frases curtas, com vírgula e preposição, no tom de parceiro de treino (ADR 0033).
- Textos revistos:

| Antes | Depois |
|---|---|
| Semana 3 de 10 · Base | Semana 3 de 10 da base |
| Segunda, 9 nov · Semana 3 de 10 · Base | Segunda, 9 nov, semana 3 de 10 da base |
| ~50 min · 5:47/km médio | ~50 min a 5:47/km |
| Feito · Strava / Feito · por você | Feito via Strava / Feito por você |
| Salvo · Hoje, 19:41 · Apagar | Salvo hoje às 19:41 + link "Apagar" |
| Não foi enviado · Tentar de novo | Não foi enviado + link "Tentar de novo" |
| Corrida · Leve / Musculação · Superiores | Corrida leve / Musculação de superiores |
| Feito · 5,1 km · 6:28/km | Feito, 5,1 km a 6:28/km |
| Atividade do Strava, 5 nov às 18:30 · 52 min | Atividade do Strava de 52 min, 5 nov às 18:30 |
| Intervalado · Seg 9 nov / 8,6 km · previsto | Intervalado de segunda, 9 nov / 8,6 km previstos |

- Uma ação ao lado de um texto (ex.: "Apagar") se separa pelo espaço e pela cor `primaria`, sem ponto.
- Os contrastes não mudam: só o texto muda.

## Consequências

- O texto fica mais próximo da fala e um pouco mais longo. Linhas que não couberem numa linha quebram, sem cortar o texto.
- A regra vale para as próximas telas: o texto das telas Plano, Notificações, Piu, Perfil e onboarding já nasce em frases.
- O design system Live Run atualiza os textos de exemplo de CabecalhoDoDetalhe, AlternarFeito, ChipDeStatus, CardDoTreino, FolhaDeEscolha, ContextoDoTreino, BalaoDeMensagem e OrigemDoStrava (ADR 0143).
