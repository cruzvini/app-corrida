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
| 0006 | [Strava como fonte inicial, com polling agendado e pull-to-refresh](0006-strava-polling-e-pull-to-refresh.md) | Aceita (revisada pelos ADRs 0071, 0073) |
| 0007 | [Feedback em caixa de entrada no app, sem push](0007-feedback-em-caixa-de-entrada.md) | Aceita |
| 0008 | [Modelo de planos em duas camadas (genérico e específico)](0008-modelo-de-planos-em-duas-camadas.md) | Aceita |
| 0009 | [Protótipo pessoal primeiro, depois Health Connect / Apple Health ao abrir para amigos e família](0009-prototipo-pessoal-depois-health.md) | Aceita |
| 0010 | [Execução via Expo Go no iPhone, sem assinatura Apple Developer por enquanto](0010-expo-go-sem-apple-developer.md) | Aceita |
| 0011 | [Estratégia de testes: pirâmide com quality gates de CI](0011-estrategia-de-testes-piramide.md) | Aceita (revisada pelo ADR 0081) |
| 0012 | [Design e wireframes feitos no Claude (design mode), sem Figma](0012-design-no-claude-sem-figma.md) | Aceita |
| 0013 | [Adiados: questionário de prontidão para saúde e registro manual de treinos](0013-adiados-prontidao-e-registro-manual.md) | Adiada |
| 0014 | [Musculação entra no plano como carga que afeta a corrida](0014-musculacao-como-carga-no-plano.md) | Substituída (ADR 0069) |
| 0015 | [Nível de corrida sugerido pelo Strava e confirmado pelo usuário](0015-nivel-de-corrida-sugerido-e-confirmado.md) | Aceita |
| 0016 | [Plano específico com distância livre](0016-plano-especifico-com-distancia-livre.md) | Aceita |
| 0017 | [Avisar sobre riscos da meta sem bloquear a criação do plano](0017-avisar-riscos-sem-bloquear-plano.md) | Aceita |
| 0018 | [Replanejamento por ações prontas e por conversa livre](0018-replanejamento-acoes-prontas-e-conversa.md) | Aceita |
| 0019 | [Conexão com o Strava obrigatória](0019-conexao-strava-obrigatoria.md) | Aceita |
| 0020 | [Autenticação por e-mail com link mágico](0020-autenticacao-email-link-magico.md) | Aceita |
| 0021 | [Pace alvo sugerido a partir do Strava](0021-pace-alvo-sugerido-pelo-strava.md) | Aceita |
| 0022 | [IA propõe o plano, motor de regras valida](0022-ia-propoe-regras-validam-plano.md) | Aceita (revisada pelos ADRs 0066, 0067) |
| 0023 | [Plano inteiro com detalhe progressivo](0023-plano-inteiro-com-detalhe-progressivo.md) | Aceita |
| 0024 | [Treinos estruturados por blocos com pace alvo](0024-treinos-estruturados-por-blocos.md) | Aceita |
| 0025 | [Strava marca o treino como feito, e o usuário corrige](0025-strava-marca-treino-feito-usuario-corrige.md) | Aceita |
| 0026 | [Treino não feito gera ajuste automático do plano, com aviso](0026-treino-nao-feito-ajuste-automatico.md) | Aceita (revisada pelo ADR 0067) |
| 0027 | [Atividade fora do plano conta como carga e gera ajuste com aviso](0027-atividade-fora-do-plano-conta-como-carga.md) | Aceita (revisada pelos ADRs 0067, 0069) |
| 0028 | [Feedback do usuário vira contexto e gera proposta de ajuste quando relevante](0028-feedback-do-usuario-como-contexto.md) | Aceita |
| 0029 | [Dados enviados ao provedor de IA](0029-dados-enviados-ao-provedor-de-ia.md) | Aceita (revisada pelo ADR 0066) |
| 0030 | [Exclusão de conta e dados fora do MVP](0030-exclusao-de-conta-adiada.md) | Adiada |
| 0031 | [Controle de custos da IA com teto mensal e limite por usuário](0031-controle-de-custos-da-ia.md) | Aceita |
| 0032 | [Nome do app: Live Run](0032-nome-do-app-live-run.md) | Aceita |
| 0033 | [Tom de voz: parceiro de treino](0033-tom-de-voz-parceiro-de-treino.md) | Aceita |
| 0034 | [Navegação por barra de abas inferior com Hoje no centro](0034-navegacao-por-abas-com-hoje-no-centro.md) | Aceita |
| 0035 | [Assistente de conversa chamado Piu](0035-assistente-de-conversa-piu.md) | Aceita |
| 0036 | [Tela de detalhe do treino como ponto central das ações](0036-tela-de-detalhe-do-treino.md) | Aceita |
| 0037 | [Onboarding e setup em fluxo linear, sem a barra de abas](0037-onboarding-e-setup-em-fluxo-linear.md) | Aceita |
| 0038 | [Conteúdo da aba Perfil, com o histórico de replanejamentos](0038-conteudo-da-aba-perfil.md) | Aceita (revisada pelos ADRs 0069, 0079) |
| 0039 | [Lesões e limitações como campo opcional no setup](0039-lesoes-e-limitacoes-no-setup.md) | Aceita |
| 0040 | [Falha na importação do histórico do Strava não bloqueia o setup](0040-falha-na-importacao-do-strava.md) | Aceita |
| 0041 | [Dias da semana de cada modalidade escolhidos no setup e editáveis no Perfil](0041-dias-da-semana-fixos-e-editaveis.md) | Substituída (ADR 0063) |
| 0042 | [Idade sem limite mínimo, só com validação de valor plausível](0042-idade-sem-limite-minimo.md) | Aceita |
| 0043 | [Data de início do plano escolhida no setup](0043-data-de-inicio-escolhida-no-setup.md) | Aceita |
| 0044 | [Detalhamento da próxima semana na rotina das 22h do último dia da semana](0044-detalhamento-semanal-na-rotina-das-22h.md) | Aceita |
| 0045 | [Atividade feita em outro dia não é ligada ao treino previsto](0045-atividade-em-outro-dia-nao-e-religada.md) | Aceita |
| 0046 | [Atividades compatíveis do mesmo dia são somadas como um treino](0046-atividades-do-mesmo-dia-somadas.md) | Aceita |
| 0047 | [Só o ajuste automático mais recente pode ser desfeito](0047-so-o-ajuste-mais-recente-pode-ser-desfeito.md) | Aceita |
| 0048 | [Feedback pós-treino como campo opcional no card do Hoje](0048-feedback-opcional-no-card-do-hoje.md) | Aceita |
| 0049 | [Falha na sincronização com o Strava suspende o "não feito" automático](0049-falha-de-sincronizacao-suspende-nao-feito.md) | Aceita |
| 0050 | [Mensagens em Notificações assinadas pelo Piu](0050-notificacoes-assinadas-pelo-piu.md) | Aceita (revisada pelo ADR 0080) |
| 0051 | [Dor ou lesão no feedback não gera recomendação automática de procurar um profissional](0051-sem-recomendacao-automatica-de-profissional.md) | Aceita |
| 0052 | [Proposta pendente vence quando o plano muda e é refeita pelo Piu](0052-proposta-desatualizada-e-refeita.md) | Aceita |
| 0053 | [Editar uma proposta é conversar com o Piu](0053-editar-proposta-e-conversar-com-o-piu.md) | Aceita |
| 0054 | [Mensagem lida ao abrir e propostas pendentes no topo de Notificações](0054-lidas-e-propostas-aguardando.md) | Aceita |
| 0055 | [Feedback salvo antes da análise, e falha da IA sem mensagem de erro](0055-feedback-salvo-antes-da-analise.md) | Aceita |
| 0056 | [Feedback pode ser apagado, mas não editado](0056-feedback-pode-ser-apagado-nao-editado.md) | Aceita |
| 0057 | [Ação pronta "trocar dia" dentro da semana atual do plano](0057-acao-trocar-dia.md) | Aceita |
| 0058 | ["Pular" e "não será feito" são a mesma ação](0058-pular-e-nao-sera-feito-sao-a-mesma-acao.md) | Aceita (revisada pelo ADR 0067) |
| 0059 | [Ação pronta "semana mais leve" reduz só a corrida restante da semana](0059-acao-semana-mais-leve.md) | Aceita |
| 0060 | [Ação pronta "adiar a prova" recalcula a estrutura pelas regras](0060-acao-adiar-a-prova.md) | Aceita |
| 0061 | [Mudança nos dados do setup passa por revisão antes de valer](0061-mudanca-no-perfil-passa-por-revisao.md) | Aceita |
| 0062 | [Proposta da conversa com o Piu aparece na conversa e vai para Notificações se ficar pendente](0062-proposta-do-piu-na-conversa.md) | Aceita |
| 0063 | [Quantidade de dias por modalidade, com dias da semana e divisão opcionais](0063-quantidade-de-dias-com-dias-e-divisao-opcionais.md) | Aceita (revisada pelo ADR 0069) |
| 0064 | [Ações do treino no card do Hoje e na tela de detalhe](0064-acoes-do-treino-no-card-do-hoje-e-no-detalhe.md) | Aceita |
| 0065 | [Integração com a API do Strava no backend, sem o Strava MCP](0065-api-do-strava-no-backend.md) | Aceita |
| 0066 | [Dados do Strava nunca vão para a IA](0066-dados-do-strava-nunca-vao-para-a-ia.md) | Aceita |
| 0067 | [Ajustes disparados pelo Strava são feitos só pelo motor de regras](0067-ajustes-do-strava-so-pelo-motor-de-regras.md) | Aceita |
| 0068 | [Histórico do Strava: 12 semanas, só o resumo de cada atividade](0068-historico-de-12-semanas-com-resumo.md) | Aceita |
| 0069 | [Corrida é o foco; outras atividades são declaradas no setup e contam como carga](0069-outras-atividades-declaradas-como-carga.md) | Aceita |
| 0070 | [Carga: intensidade por tipo vezes duração, com nota de esforço opcional](0070-carga-por-esforco.md) | Aceita |
| 0071 | [Polling no Supabase a cada 2h, das 5h às 23h](0071-polling-a-cada-2h.md) | Aceita |
| 0072 | [Permissão activity:read_all no Strava, sem guardar mapa ou GPS](0072-permissao-activity-read-all.md) | Aceita |
| 0073 | [Cada consulta concilia as atividades dos últimos 7 dias](0073-conciliacao-dos-ultimos-7-dias.md) | Aceita |
| 0074 | [Tokens do Strava cifrados com o Supabase Vault](0074-tokens-do-strava-no-vault.md) | Aceita |
| 0075 | [Limite de atletas do app no Strava](0075-limite-de-atletas-no-strava.md) | Aceita |
| 0076 | [Testes da integração com o Strava sem depender do Strava real](0076-testes-da-integracao-com-o-strava.md) | Aceita |
| 0077 | [Identidade visual do Live Run](0077-identidade-visual.md) | Aceita |
| 0078 | [Marca do Strava no app](0078-marca-do-strava-no-app.md) | Aceita |
| 0079 | [Desconectar o Strava deixa o app no estado de falha de sincronização](0079-desconectar-o-strava.md) | Aceita |
| 0080 | [Conversa sobre um ajuste disparado pelo Strava leva só o antes e o depois do plano](0080-piu-sem-o-motivo-dos-ajustes-do-strava.md) | Aceita |
| 0081 | [Planejamento de testes e CI antes do setup do monorepo](0081-planejamento-de-testes-e-ci-antes-do-setup.md) | Aceita |
| 0082 | [Jest como runner de testes unitários e de integração](0082-runner-jest.md) | Aceita |
| 0083 | [E2E com Maestro no Android](0083-e2e-com-maestro.md) | Aceita |
| 0084 | [CI no GitHub Actions](0084-ci-no-github-actions.md) | Aceita |
| 0085 | [Repositório público para os quality gates bloquearem o merge](0085-repositorio-publico.md) | Aceita |
| 0086 | [Todos os quality gates rodam e bloqueiam o merge em todo PR](0086-gates-obrigatorios-em-todo-pr.md) | Aceita |
| 0087 | [Cobertura mínima de testes por pacote](0087-cobertura-minima-por-pacote.md) | Aceita |
| 0088 | [Fluxos cobertos pelo E2E do MVP](0088-fluxos-cobertos-pelo-e2e.md) | Aceita |

## Como criar um novo ADR

1. Copie o formato de um ADR existente com o próximo número (`NNNN-slug.md`).
2. Preencha contexto, decisão e consequências.
3. Adicione uma linha nesta tabela.
