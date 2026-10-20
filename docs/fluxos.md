# Fluxos das jornadas (épico #2, card 3)

As 6 jornadas validadas em [`concepcao.md`](concepcao.md), desenhadas passo a passo, com os caminhos de erro. A navegação segue os ADRs 0034 a 0038. Os números entre parênteses apontam os critérios de aceitação (ex.: 1.3 é o critério 3 da jornada 1).

## Jornada 1: onboarding

```mermaid
flowchart TD
  A([Abrir o app]) --> B{Sessão ativa?}
  B -- sim --> C{Plano ativo?}
  C -- sim --> HOJE([Aba Hoje])
  C -- não --> RET([Retoma o setup no passo salvo, ADR 0037])
  B -- não --> D[Boas-vindas: informar e-mail]
  D --> E{E-mail válido?}
  E -- não --> E1[Erro no campo] --> D
  E -- sim --> F[Envia link mágico 1.1]
  F --> G[Tela: verifique seu e-mail<br/>reenviar link / trocar e-mail]
  G --> H[Usuário toca no link]
  H --> I{Link válido?}
  I -- não: expirado ou já usado --> I1[Explica e oferece novo link] --> D
  I -- sim --> J[Sessão criada e mantida 1.2]
  J --> K{Strava conectado?}
  K -- sim --> C
  K -- não --> L[Tela: por que conectar o Strava 1.3]
  L --> M[Autorização no Strava OAuth]
  M --> N{Autorizou com as permissões necessárias?}
  N -- não: recusou, cancelou ou desmarcou permissão --> N1[Explica por que é necessário 1.5] --> L
  N -- sim --> O[Mostra Strava conectado e importa histórico 1.4]
  O --> P{Importação ok?}
  P -- falhou --> P1[Avisa: tentar de novo ou seguir sem histórico, ADR 0040]
  P1 -- tentar de novo --> O
  P1 -- seguir --> S2
  P -- sim --> Q{Tem histórico?}
  Q -- sim --> S1([Setup: nível sugerido, jornada 2])
  Q -- não --> S2([Setup: escolher nível manualmente 1.6])
```

Regras de segurança da jornada: cada usuário só vê os próprios dados (RLS, 1.7), e os tokens do Strava ficam só no backend.
