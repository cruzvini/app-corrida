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

## Jornada 2: setup do plano

Fluxo linear, uma pergunta por tela, com barra de progresso e botão de voltar (ADR 0037).

```mermaid
flowchart TD
  A([Vem da jornada 1]) --> B{Tem histórico do Strava?}
  B -- sim --> C[Nível sugerido com o motivo 2.1]
  C --> C1{Confirma?}
  C1 -- trocar --> D
  C1 -- confirmar --> E
  B -- não --> D[Escolher nível vendo a descrição de cada um]
  D --> E["Idade de 10 a 100 (ADR 0042), peso e lesões ou limitações opcional 2.2"]
  E --> F[Corrida: marcar os dias da semana 2.3]
  F --> G{Faz musculação?}
  G -- sim --> G1[Musculação: marcar os dias e a divisão de cada um]
  G -- não --> DIAS
  G1 --> DIAS
  DIAS((dias salvos, ADR 0041)) --> H{Tipo de plano 2.4}
  H -- genérico --> INI
  H -- específico --> I[Distância livre e data da prova ou prazo 2.5]
  I --> J{Histórico suficiente para pace?}
  J -- sim --> J1[Pace alvo sugerido: aceitar ou ajustar 2.6]
  J -- não --> J2[Sem meta de pace, foco em completar a distância]
  J1 --> INI
  J2 --> INI
  INI["Quando começar: hoje, próximos 5 dias ou outro dia no calendário 2.8"] --> K{Regras detectam risco?}
  K -- sim --> K1[Riscos e alternativas 2.7]
  K1 -- ajustar meta ou data de início --> I
  K1 -- seguir mesmo assim, escolha registrada --> R
  K -- não --> R[Resumo das respostas 2.9]
  R -- editar um item --> EDIT[Volta à tela do item e retorna ao resumo]
  EDIT --> R
  R -- gerar plano --> GER([Jornada 3: geração])
```

## Jornada 3: geração do plano

Segue o fluxo "IA propõe, regras validam" (ADR 0022) e o detalhe progressivo (ADR 0023). Ainda dentro do fluxo linear, sem a barra de abas (ADR 0037).

```mermaid
flowchart TD
  A([Resumo do setup: gerar plano]) --> B[Carregando: montando seu plano]
  B --> C[IA propõe o plano em formato estruturado]
  C --> D{Resposta da IA ok?}
  D -- falhou ou fora do schema --> D1{Ainda há tentativas automáticas?}
  D1 -- sim --> C
  D1 -- não --> ERR[Avisa a falha e oferece tentar de novo, respostas do setup preservadas 3.9]
  ERR -- tentar de novo --> B
  D -- sim --> E{Regras: erro de coerência?}
  E -- sim, ex.: treino em dia não marcado --> D1
  E -- não --> F[Revisão do plano 3.1]
  F --> F1["Estrutura completa: objetivo, fases e volume semanal"]
  F --> F2["Próximas 1 a 2 semanas detalhadas, treinos em blocos 3.2"]
  F --> G{Regras detectaram risco?}
  G -- sim --> G1[Aviso e alternativas antes de aceitar 3.6]
  G1 --> H
  G -- não --> H{Decisão do usuário}
  H -- pedir ajustes --> PIU[Piu com o plano como contexto 3.7]
  PIU -- IA refaz a proposta, revisão mostra o antes e o depois --> C
  H -- aceitar --> ATV[Plano ativo a partir da data escolhida, ADR 0043]
  ATV --> HOJE([Barra de abas, aba Hoje])
```

Depois do aceite, as semanas seguintes são detalhadas automaticamente, e cada uma gera um resumo em Notificações (3.8).
