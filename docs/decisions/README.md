# Decisões de arquitetura (ADRs)

Cada decisão relevante é registrada aqui antes de ser implementada, no formato: título, status, contexto, decisão, consequências.

**Status possíveis:** Proposta, Aceita, Adiada, Substituída, Rejeitada.

| # | Decisão | Status |
|---|---------|--------|
| 0001 | [Monorepo com pasta dedicada de testes](0001-monorepo-com-pasta-de-testes.md) | Aceita |
| 0002 | [Stack do app: React Native + Expo + TypeScript, iOS primeiro](0002-stack-react-native-expo-typescript.md) | Aceita |
| 0003 | [Backend: Supabase com Postgres, auth e RLS](0003-backend-supabase.md) | Aceita |
| 0004 | [Motor de regras como pacote isolado](0004-motor-de-regras-isolado.md) | Aceita (revisada pelo ADR 0022) |
| 0005 | [Provedor de IA agnóstico, com Claude como primeira implementação e fake para testes](0005-provedor-de-ia-agnostico.md) | Aceita |
| 0006 | [Strava como fonte inicial, com polling agendado e pull-to-refresh](0006-strava-polling-e-pull-to-refresh.md) | Aceita |
| 0007 | [Feedback em caixa de entrada no app, sem push](0007-feedback-em-caixa-de-entrada.md) | Aceita |
| 0008 | [Modelo de planos em duas camadas (genérico e específico)](0008-modelo-de-planos-em-duas-camadas.md) | Aceita |
| 0009 | [Protótipo pessoal primeiro, depois Health Connect / Apple Health ao abrir para amigos e família](0009-prototipo-pessoal-depois-health.md) | Aceita |
| 0010 | [Execução via Expo Go no iPhone, sem assinatura Apple Developer por enquanto](0010-expo-go-sem-apple-developer.md) | Aceita |
| 0011 | [Estratégia de testes: pirâmide com quality gates de CI](0011-estrategia-de-testes-piramide.md) | Aceita |
| 0012 | [Design e wireframes feitos no Claude (design mode), sem Figma](0012-design-no-claude-sem-figma.md) | Aceita |
| 0013 | [Adiados: questionário de prontidão para saúde e registro manual de treinos](0013-adiados-prontidao-e-registro-manual.md) | Adiada |
| 0014 | [Musculação entra no plano como carga que afeta a corrida](0014-musculacao-como-carga-no-plano.md) | Aceita |
| 0015 | [Nível de corrida sugerido pelo Strava e confirmado pelo usuário](0015-nivel-de-corrida-sugerido-e-confirmado.md) | Aceita |
| 0016 | [Plano específico com distância livre](0016-plano-especifico-com-distancia-livre.md) | Aceita |
| 0017 | [Avisar sobre riscos da meta sem bloquear a criação do plano](0017-avisar-riscos-sem-bloquear-plano.md) | Aceita |
| 0018 | [Replanejamento por ações prontas e por conversa livre](0018-replanejamento-acoes-prontas-e-conversa.md) | Aceita |
| 0019 | [Conexão com o Strava obrigatória](0019-conexao-strava-obrigatoria.md) | Aceita |
| 0020 | [Autenticação por e-mail com link mágico](0020-autenticacao-email-link-magico.md) | Aceita |
| 0021 | [Pace alvo sugerido a partir do Strava](0021-pace-alvo-sugerido-pelo-strava.md) | Aceita |
| 0022 | [IA propõe o plano, motor de regras valida](0022-ia-propoe-regras-validam-plano.md) | Aceita |
| 0023 | [Plano inteiro com detalhe progressivo](0023-plano-inteiro-com-detalhe-progressivo.md) | Aceita |
| 0024 | [Treinos estruturados por blocos com pace alvo](0024-treinos-estruturados-por-blocos.md) | Aceita |
| 0025 | [Strava marca o treino como feito, e o usuário corrige](0025-strava-marca-treino-feito-usuario-corrige.md) | Aceita |
| 0026 | [Treino não feito gera ajuste automático do plano, com aviso](0026-treino-nao-feito-ajuste-automatico.md) | Aceita |
| 0027 | [Atividade fora do plano conta como carga e gera ajuste com aviso](0027-atividade-fora-do-plano-conta-como-carga.md) | Aceita |
| 0028 | [Feedback do usuário vira contexto e gera proposta de ajuste quando relevante](0028-feedback-do-usuario-como-contexto.md) | Aceita |
| 0029 | [Dados enviados ao provedor de IA](0029-dados-enviados-ao-provedor-de-ia.md) | Aceita |
| 0030 | [Exclusão de conta e dados fora do MVP](0030-exclusao-de-conta-adiada.md) | Adiada |
| 0031 | [Controle de custos da IA com teto mensal e limite por usuário](0031-controle-de-custos-da-ia.md) | Aceita |
| 0032 | [Nome do app: Live Run](0032-nome-do-app-live-run.md) | Aceita |
| 0033 | [Tom de voz: parceiro de treino](0033-tom-de-voz-parceiro-de-treino.md) | Aceita |
| 0034 | [Navegação por barra de abas inferior com Hoje no centro](0034-navegacao-por-abas-com-hoje-no-centro.md) | Aceita |
| 0035 | [Assistente de conversa chamado Piu](0035-assistente-de-conversa-piu.md) | Aceita |
| 0036 | [Tela de detalhe do treino como ponto central das ações](0036-tela-de-detalhe-do-treino.md) | Aceita |
| 0037 | [Onboarding e setup em fluxo linear, sem a barra de abas](0037-onboarding-e-setup-em-fluxo-linear.md) | Aceita |

## Como criar um novo ADR

1. Copie o formato de um ADR existente com o próximo número (`NNNN-slug.md`).
2. Preencha contexto, decisão e consequências.
3. Adicione uma linha nesta tabela.
