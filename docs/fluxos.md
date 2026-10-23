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
  K -- não --> L[Tela: por que conectar o Strava, inclui atividades privadas 1.3, ADR 0072]
  L --> M[Autorização no Strava OAuth]
  M --> N{Autorizou com as permissões necessárias?}
  N -- não: recusou, cancelou ou desmarcou permissão --> N1[Explica por que é necessário 1.5] --> L
  N -- sim --> O[Mostra Strava conectado e importa 12 semanas, só o resumo 1.4, ADR 0068]
  O --> P{Importação ok?}
  P -- falhou --> P1[Avisa: tentar de novo ou seguir sem histórico, ADR 0040]
  P1 -- tentar de novo --> O
  P1 -- seguir --> S2
  P -- sim --> Q{Tem histórico?}
  Q -- sim --> S1([Setup: nível sugerido, jornada 2])
  Q -- não --> S2([Setup: escolher nível manualmente 1.6])
```

Regras de segurança da jornada: cada usuário só vê os próprios dados (RLS, 1.7), e os tokens do Strava ficam só no backend, em schema privado (ADR 0074). O app não guarda mapa nem GPS (ADR 0072).

## Jornada 2: setup do plano

Fluxo linear, uma pergunta por tela, com barra de progresso e botão de voltar (ADR 0037). As sugestões de nível e de pace vêm do motor de regras, nunca da IA (ADR 0066). O plano é gerado só com as respostas do setup.

```mermaid
flowchart TD
  A([Vem da jornada 1]) --> B{Tem histórico do Strava?}
  B -- sim --> C[Nível sugerido pelas regras, com o motivo 2.1]
  C --> C1{Confirma?}
  C1 -- trocar --> D
  C1 -- confirmar --> E
  B -- não --> D[Escolher nível vendo a descrição de cada um]
  D --> E["Idade de 10 a 100 (ADR 0042), peso e lesões ou limitações opcional 2.2"]
  E --> F[Corrida: quantos dias por semana; dias da semana opcionais 2.3]
  F --> G{Faz outras atividades?}
  G -- sim --> G1["Lista de atividades: tipo e vezes por semana; dias opcionais; musculação com divisão opcional (ADR 0069)"]
  G -- não --> DIAS
  G1 --> DIAS
  DIAS((dias salvos, ADR 0063)) --> H{Tipo de plano 2.4}
  H -- genérico --> INI
  H -- específico --> I[Distância livre e data da prova ou prazo 2.5]
  I --> J{Histórico suficiente para pace?}
  J -- sim --> J1[Pace alvo sugerido pelas regras: aceitar ou ajustar 2.6]
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

Depois do aceite, as semanas seguintes são detalhadas automaticamente na rotina das 22h do último dia de cada semana do plano (ADR 0044), e cada uma gera um resumo em Notificações (3.8).

## Jornada 4: dia a dia

Três fluxos: a sincronização com o Strava, as marcações feitas pelo usuário e a rotina das 22h. Todo ajuste automático desta jornada é feito **só pelo motor de regras**, sem IA (ADRs 0066 e 0067), entra direto no plano e chega a Notificações com o antes e o depois, em texto de template. Só o ajuste mais recente pode ser desfeito (ADR 0047, 4.9). Carga = intensidade do tipo × tempo em movimento, ou nota de esforço × tempo quando o usuário der a nota (ADR 0070).

### Sincronização e treino feito

```mermaid
flowchart TD
  A([Aba Hoje: treino do dia em blocos e semana 4.1]) --> B{Origem da sincronização}
  B -- polling a cada 2h, das 5h às 23h, ADR 0071 --> B1
  B -- atualização manual --> B1{Passaram 30 min desde a última consulta?}
  B1 -- não --> B2[Mostra dados já sincronizados e quando poderá atualizar 4.2] --> A
  B1 -- sim --> C[Lista as atividades dos últimos 7 dias, ADR 0073]
  C --> D{Sincronização ok?}
  D -- falhou ou sem conexão: revogado, desconectado no Perfil, token inválido ou Strava fora --> D1[Aviso no Hoje: conectar o Strava de novo, ADRs 0049 e 0079] --> A
  D -- sim --> E{Compara com o que está salvo}
  E -- nada mudou --> A
  E -- editada --> ED[Atualiza o resumo; se o tipo ou a carga mudou, vai para as regras] --> K
  E -- apagada --> AP[Treino ligado volta a pendente ou a carga extra sai] --> K
  E -- nova, mesmo com data antiga --> MAN{Dia já tem marcação manual?}
  MAN -- sim --> MAN1[Marcação manual prevalece; as regras tratam a carga, ADR 0073] --> K
  MAN -- não --> F{Mesmo dia e tipo de um treino previsto?}
  F -- sim --> G[Soma as atividades compatíveis do dia, ADR 0046]
  G --> H[Treino marcado como feito, com resumo 4.3]
  H --> H1[Musculação assume a divisão prevista 4.5]
  H1 --> I["Card mostra Como foi? e nota de esforço, opcionais 4.10, 4.11, ADRs 0048 e 0077"]
  F -- não: dia sem treino, outro dia ou outro tipo --> J[Conta como carga extra, etiqueta extra, ADRs 0045, 0069 e 0077]
  H --> REV{Treino estava como não feito com ajuste?}
  REV -- sim: atividade chegou depois das 22h --> K
  H --> K
  J --> K
  K{Motor de regras: a carga afeta os próximos treinos?}
  K -- não --> A
  K -- sim --> AJ[Ajuste ou reversão pelas regras, com aviso 4.7, 4.8, ADR 0067]
  AJ --> A
```

### Marcações do usuário

```mermaid
flowchart TD
  A([Card do treino no Hoje ou detalhe do treino]) --> B{Ação}
  B -- desmarcar feito --> C[Treino volta a pendente; atividades viram carga fora do plano 4.4]
  B -- marcar feito sem atividade --> D[Só o status, sem distância, tempo nem pace 4.4]
  D --> D1[Musculação: corrigir a divisão feita 4.5]
  B -- pular: não foi ou não será feito --> E[Não feito na hora; regras ajustam 4.6, ADRs 0058 e 0067]
  B -- nota de esforço 1 a 10 --> NE[Carga recalculada: nota × tempo, ADR 0070 4.11]
  NE --> NE1{Regras: afeta os próximos treinos?}
  NE1 -- sim --> N
  NE1 -- não --> FIM([Sem mudança no plano])
  B -- trocar dia --> F[Ação pronta: liga a atividade a outro treino, ADR 0045]
  B -- feedback --> G[Texto livre, segue a jornada 5]
  E --> N([Notificações: antes e depois, desfazer o mais recente])
  F --> N
```

### Rotina das 22h, no fuso do usuário

```mermaid
flowchart TD
  A([22h]) --> B[Última consulta ao Strava, últimos 7 dias, respeitando os 30 min]
  B --> C{Sincronização ok?}
  C -- não --> P[Treinos do dia ficam pendentes, ADR 0049]
  P --> P1{Mais de 3 dias sem sincronizar?}
  P1 -- sim --> P2[Pede para marcar os pendentes manualmente]
  P1 -- não --> FIM([Aguarda a sincronização voltar])
  C -- sim --> D[Processa dias pendentes, se houver]
  D --> E{Treino sem atividade nem marcação?}
  E -- sim --> F[Conta como não feito e as regras ajustam o plano 4.7, ADR 0067]
  F --> N[Notificações: antes e depois]
  E -- não --> G
  N --> G{Último dia da semana do plano?}
  G -- sim --> H([Detalha a próxima semana, ADR 0044])
  G -- não --> FIM2([Fim do dia])
```

## Jornada 5: feedback e Notificações

Todas as mensagens em Notificações saem assinadas pelo Piu (ADR 0050). Nos ajustes disparados pelo Strava, o texto é de template e o Piu recebe só o antes e o depois do plano, nunca o motivo (ADRs 0066 e 0080). Dor ou lesão segue o mesmo tratamento dos outros feedbacks (ADR 0051, 5.6).

### Feedback

```mermaid
flowchart TD
  A([Campo como foi? no Hoje ou detalhe do treino, feito ou não feito 5.3]) --> B[Usuário envia o texto]
  B --> C[Salva no histórico do treino: feedback salvo 5.4, ADR 0055]
  C --> D[IA analisa só o texto, em segundo plano: pede mudança? ADR 0066]
  D --> E{Análise ok?}
  E -- falhou --> E1{Ainda há tentativas automáticas?}
  E1 -- sim --> D
  E1 -- não --> CTX([Fica só como contexto, sem mensagem de erro])
  E -- não pede mudança --> CTX2([Plano não muda, sem mensagem 5.7])
  E -- pede mudança --> F[IA propõe, regras validam, ADR 0022]
  F --> G([Proposta em Notificações: aguardando você 5.5])
  C -.-> DEL[Apagar no detalhe do treino, ADR 0056]
  DEL --> DEL1([Deixa de ser contexto; ajustes e propostas já gerados ficam])
```

### Notificações

```mermaid
flowchart TD
  A([Abrir o app: selo com não lidas no sino 5.2]) --> B[Aba Notificações 5.1]
  B --> B1[Topo: propostas aguardando você, ADR 0054]
  B --> B2[Lista: ajustes automáticos, semanas novas, sugestões]
  B1 --> M[Abrir mensagem: marca como lida]
  B2 --> M
  M --> T{Tipo}
  T -- ajuste automático --> AJ{É o mais recente?}
  AJ -- sim --> AJ1[Desfazer, ADR 0047]
  AJ -- não --> PIU[Conversar com o Piu sobre isso, ADR 0050; se veio do Strava, só o antes e o depois, ADR 0080]
  T -- semana nova ou sugestão --> PIU
  T -- proposta --> P{Ainda válida?}
  P -- não: dias afetados mudaram --> V[Marcada como desatualizada, ADR 0052]
  V --> V1{Piu refaz: ainda pede mudança?}
  V1 -- sim --> NOVA([Nova proposta aguardando você])
  V1 -- não --> V2([Mensagem explica que não precisa mudar])
  P -- sim --> D{Decisão}
  D -- aceitar --> AC[Aplica no plano; pode desfazer como o mais recente]
  D -- descartar --> DS([Plano não muda])
  D -- editar --> ED[Piu com o contexto da notificação, ADR 0053]
  ED --> ED1[Proposta revisada; a original fica como editada]
  ED1 --> P
```

## Jornada 6: replanejamento

Treinos passados nunca são alterados (6.6). A única exceção é "trocar dia" para um dia passado com atividade ainda não ligada, que só registra o que já aconteceu (ADR 0057). Riscos geram aviso e alternativas, sem bloqueio (ADR 0017, 6.4). Só o ajuste mais recente pode ser desfeito (ADR 0047).

### Ações prontas

```mermaid
flowchart TD
  A([Card do Hoje, detalhe do treino ou cabeçalho da semana 6.1]) --> B{Ação pronta}
  B -- pular --> P[Treino vira não feito na hora, ADR 0058]
  P --> P1[Regras ajustam os próximos dias, sem IA, ADR 0067] --> N
  B -- trocar dia --> T[Escolhe dia da semana atual do plano, ADR 0057]
  T --> T1{Destino}
  T1 -- futuro ou hoje, sem treino da modalidade --> T2[Muda de dia]
  T1 -- futuro ou hoje, com treino da modalidade --> T3[Os dois trocam de lugar]
  T1 -- passado com atividade não ligada --> T4[Liga a atividade e marca feito]
  T1 -- passado sem atividade --> T5[Indisponível]
  T2 --> R
  T3 --> R
  T4 --> N
  B -- semana mais leve --> L[Reduz a corrida de hoje em diante; intensos viram leves, ADR 0059] --> R
  B -- adiar a prova, só plano específico --> AD[Escolhe data mais tarde; regras esticam a estrutura, ADR 0060] --> R
  R{Regras detectam risco?}
  R -- sim --> R1[Aviso e alternativas, sem bloqueio 6.4] --> N
  R -- não --> N
  N([Aplicado na hora: mostra o que mudou e permite desfazer 6.2])
```

### Conversa livre com o Piu

```mermaid
flowchart TD
  A([Piu: usuário descreve a situação 6.3]) --> B[IA propõe, regras validam, ADR 0022]
  B --> C{Proposta ok?}
  C -- falhou --> C1[Piu avisa e oferece tentar de novo] --> A
  C -- sim --> D[Card na conversa: antes e depois, avisos de risco 6.4, ADR 0062]
  D --> E{Decisão}
  E -- aceitar --> F([Aplica a partir de hoje; pode desfazer como o mais recente])
  E -- editar --> G[Continua a conversa; a anterior fica como editada, ADR 0053] --> B
  E -- descartar --> H([Plano não muda])
  E -- sai sem decidir --> I[Notificações: aguardando você, ADR 0054]
  I --> J{Dias afetados mudaram antes da decisão?}
  J -- sim --> K([Desatualizada; Piu refaz, ADR 0052])
  J -- não --> E
```

### Mudança nos dados do setup

```mermaid
flowchart TD
  A([Perfil > Meu treino: dias de corrida, outras atividades, meta, prazo, nível ou lesões 6.5]) --> B[Salvar: ajustando seu plano, ADR 0061]
  B --> C{Proposta ok?}
  C -- falhou --> C1[Avisa e oferece tentar de novo, mudança preservada] --> B
  C -- sim --> D[Revisão: antes e depois da estrutura e das semanas detalhadas]
  D --> D1{Regras detectam risco?}
  D1 -- sim --> D2[Aviso e alternativas 6.4] --> E
  D1 -- não --> E{Decisão}
  E -- aceitar --> F([Perfil atualizado; plano reajustado a partir de hoje])
  E -- editar --> G[Piu com a proposta como contexto, ADR 0053] --> D
  E -- descartar --> H([Perfil volta ao que era; plano não muda])
```
