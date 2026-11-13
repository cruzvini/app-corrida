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
| 0006 | [Strava como fonte inicial, com polling agendado e pull-to-refresh](0006-strava-polling-e-pull-to-refresh.md) | Aceita (revisada pelos ADRs 0109 e 0111) |
| 0007 | [Feedback em caixa de entrada no app, sem push](0007-feedback-em-caixa-de-entrada.md) | Aceita |
| 0008 | [Modelo de planos em duas camadas (genérico e específico)](0008-modelo-de-planos-em-duas-camadas.md) | Aceita (revisada pelo ADR 0103) |
| 0009 | [Protótipo pessoal primeiro, depois Health Connect / Apple Health ao abrir para amigos e família](0009-prototipo-pessoal-depois-health.md) | Aceita |
| 0010 | [Execução via Expo Go no iPhone, sem assinatura Apple Developer por enquanto](0010-expo-go-sem-apple-developer.md) | Aceita |
| 0011 | [Estratégia de testes: pirâmide com quality gates de CI](0011-estrategia-de-testes-piramide.md) | Aceita |
| 0012 | [Design e wireframes feitos no Claude (design mode), sem Figma](0012-design-no-claude-sem-figma.md) | Aceita |
| 0013 | [Adiados: questionário de prontidão para saúde e registro manual de treinos](0013-adiados-prontidao-e-registro-manual.md) | Adiada |
| 0014 | [Musculação entra no plano como carga que afeta a corrida](0014-musculacao-como-carga-no-plano.md) | Aceita (revisada pelo ADR 0137) |
| 0015 | [Nível de corrida sugerido pelo Strava e confirmado pelo usuário](0015-nivel-de-corrida-sugerido-e-confirmado.md) | Aceita |
| 0016 | [Plano específico com distância livre](0016-plano-especifico-com-distancia-livre.md) | Aceita (revisada pelo ADR 0103) |
| 0017 | [Avisar sobre riscos da meta sem bloquear a criação do plano](0017-avisar-riscos-sem-bloquear-plano.md) | Aceita |
| 0018 | [Replanejamento por ações prontas e por conversa livre](0018-replanejamento-acoes-prontas-e-conversa.md) | Aceita (revisada pelos ADRs 0078, 0085 e 0094) |
| 0019 | [Conexão com o Strava obrigatória](0019-conexao-strava-obrigatoria.md) | Aceita |
| 0020 | [Autenticação por e-mail com link mágico](0020-autenticacao-email-link-magico.md) | Aceita |
| 0021 | [Pace alvo sugerido a partir do Strava](0021-pace-alvo-sugerido-pelo-strava.md) | Aceita (revisada pelo ADR 0103) |
| 0022 | [IA propõe o plano, motor de regras valida](0022-ia-propoe-regras-validam-plano.md) | Aceita (revisada pelos ADRs 0106 e 0107) |
| 0023 | [Plano inteiro com detalhe progressivo](0023-plano-inteiro-com-detalhe-progressivo.md) | Aceita (revisada pelo ADR 0139) |
| 0024 | [Treinos estruturados por blocos com pace alvo](0024-treinos-estruturados-por-blocos.md) | Aceita |
| 0025 | [Strava marca o treino como feito, e o usuário corrige](0025-strava-marca-treino-feito-usuario-corrige.md) | Aceita |
| 0026 | [Treino não feito gera ajuste automático do plano, com aviso](0026-treino-nao-feito-ajuste-automatico.md) | Aceita (revisada pelos ADRs 0078 e 0107) |
| 0027 | [Atividade fora do plano conta como carga e gera ajuste com aviso](0027-atividade-fora-do-plano-conta-como-carga.md) | Aceita (revisada pelo ADR 0107) |
| 0028 | [Feedback do usuário vira contexto e gera proposta de ajuste quando relevante](0028-feedback-do-usuario-como-contexto.md) | Aceita |
| 0029 | [Dados enviados ao provedor de IA](0029-dados-enviados-ao-provedor-de-ia.md) | Aceita (revisada pelo ADR 0106) |
| 0030 | [Exclusão de conta e dados fora do MVP](0030-exclusao-de-conta-adiada.md) | Adiada |
| 0031 | [Controle de custos da IA com teto mensal e limite por usuário](0031-controle-de-custos-da-ia.md) | Aceita |
| 0032 | [Nome do app: Live Run](0032-nome-do-app-live-run.md) | Aceita |
| 0033 | [Tom de voz: parceiro de treino](0033-tom-de-voz-parceiro-de-treino.md) | Aceita |
| 0034 | [Navegação por barra de abas inferior com Hoje no centro](0034-navegacao-por-abas-com-hoje-no-centro.md) | Aceita (revisada pelos ADRs 0065 e 0138) |
| 0035 | [Assistente de conversa chamado Piu](0035-assistente-de-conversa-piu.md) | Aceita |
| 0036 | [Tela de detalhe do treino como ponto central das ações](0036-tela-de-detalhe-do-treino.md) | Aceita (revisada pelos ADRs 0078 e 0084) |
| 0037 | [Onboarding e setup em fluxo linear, sem a barra de abas](0037-onboarding-e-setup-em-fluxo-linear.md) | Aceita (revisada pelos ADRs 0095, 0097, 0099 e 0102) |
| 0038 | [Conteúdo da aba Perfil, com o histórico de replanejamentos](0038-conteudo-da-aba-perfil.md) | Aceita (revisada pelos ADRs 0094 e 0116) |
| 0039 | [Lesões e limitações como campo opcional no setup](0039-lesoes-e-limitacoes-no-setup.md) | Aceita |
| 0040 | [Falha na importação do histórico do Strava não bloqueia o setup](0040-falha-na-importacao-do-strava.md) | Aceita |
| 0041 | [Dias da semana de cada modalidade escolhidos no setup e editáveis no Perfil](0041-dias-da-semana-fixos-e-editaveis.md) | Substituída pelo ADR 0097 |
| 0042 | [Idade sem limite mínimo, só com validação de valor plausível](0042-idade-sem-limite-minimo.md) | Aceita |
| 0043 | [Data de início do plano escolhida no setup](0043-data-de-inicio-escolhida-no-setup.md) | Aceita (revisada pelo ADR 0102) |
| 0044 | [Detalhamento da próxima semana na rotina das 22h do último dia da semana](0044-detalhamento-semanal-na-rotina-das-22h.md) | Aceita (revisada pelo ADR 0139) |
| 0045 | [Atividade feita em outro dia não é ligada ao treino previsto](0045-atividade-em-outro-dia-nao-e-religada.md) | Aceita (revisada pelo ADR 0078) |
| 0046 | [Atividades compatíveis do mesmo dia são somadas como um treino](0046-atividades-do-mesmo-dia-somadas.md) | Aceita |
| 0047 | [Só o ajuste automático mais recente pode ser desfeito](0047-so-o-ajuste-mais-recente-pode-ser-desfeito.md) | Aceita |
| 0048 | [Feedback pós-treino como campo opcional no card do Hoje](0048-feedback-opcional-no-card-do-hoje.md) | Aceita |
| 0049 | [Falha na sincronização com o Strava suspende o "não feito" automático](0049-falha-de-sincronizacao-suspende-nao-feito.md) | Aceita |
| 0050 | [Mensagens em Notificações assinadas pelo Piu](0050-notificacoes-assinadas-pelo-piu.md) | Aceita (revisada pelo ADR 0117) |
| 0051 | [Dor ou lesão no feedback não gera recomendação automática de procurar um profissional](0051-sem-recomendacao-automatica-de-profissional.md) | Aceita |
| 0052 | [Proposta pendente vence quando o plano muda e é refeita pelo Piu](0052-proposta-desatualizada-e-refeita.md) | Aceita |
| 0053 | [Editar uma proposta é conversar com o Piu](0053-editar-proposta-e-conversar-com-o-piu.md) | Aceita |
| 0054 | [Mensagem lida ao abrir e propostas pendentes no topo de Notificações](0054-lidas-e-propostas-aguardando.md) | Aceita |
| 0055 | [Feedback salvo antes da análise, e falha da IA sem mensagem de erro](0055-feedback-salvo-antes-da-analise.md) | Aceita |
| 0056 | [Feedback pode ser apagado, mas não editado](0056-feedback-pode-ser-apagado-nao-editado.md) | Aceita |
| 0057 | [Ação pronta "trocar dia" dentro da semana atual do plano](0057-acao-trocar-dia.md) | Substituída pelo ADR 0078 |
| 0058 | ["Pular" e "não será feito" são a mesma ação](0058-pular-e-nao-sera-feito-sao-a-mesma-acao.md) | Substituída pelo ADR 0078 |
| 0059 | [Ação pronta "semana mais leve" reduz só a corrida restante da semana](0059-acao-semana-mais-leve.md) | Substituída pelo ADR 0085 |
| 0060 | [Ação pronta "adiar a prova" recalcula a estrutura pelas regras](0060-acao-adiar-a-prova.md) | Aceita (revisada pelo ADR 0084) |
| 0061 | [Mudança nos dados do setup passa por revisão antes de valer](0061-mudanca-no-perfil-passa-por-revisao.md) | Substituída pelo ADR 0095 |
| 0062 | [Proposta da conversa com o Piu aparece na conversa e vai para Notificações se ficar pendente](0062-proposta-do-piu-na-conversa.md) | Aceita |
| 0063 | [Wireframes em artifact HTML de baixa fidelidade](0063-wireframes-em-artifact-html.md) | Aceita |
| 0064 | [Atualização manual do Strava por gesto de puxar e por botão](0064-atualizacao-manual-puxar-e-botao.md) | Aceita |
| 0065 | [Faixa de 7 dias no Hoje, centrada no dia atual, no lugar do lembrete do treino anterior](0065-faixa-de-7-dias-centrada-no-hoje.md) | Aceita (revisada pelo ADR 0070) |
| 0066 | [Card do Hoje sem ações rápidas, com as ações só no detalhe do treino](0066-card-do-hoje-sem-acoes-rapidas.md) | Aceita |
| 0067 | [Corrida e musculação no mesmo dia: card principal da corrida e card resumido da musculação](0067-corrida-e-musculacao-no-mesmo-dia.md) | Aceita |
| 0068 | [Dia de descanso no Hoje mostra só "Dia de descanso"](0068-dia-de-descanso-no-hoje.md) | Aceita |
| 0069 | [Tocar em um dia com dois treinos na faixa abre a escolha do treino](0069-dia-com-dois-treinos-abre-escolha.md) | Aceita |
| 0070 | [Ícone da modalidade e cor de status no contorno do dia na faixa de 7 dias](0070-icones-e-cores-de-status-na-faixa.md) | Aceita |
| 0071 | [Dia com um treino feito e outro não fica verde com selo "!" na faixa](0071-dia-misto-verde-com-selo.md) | Aceita |
| 0072 | [Dia atual com treino ainda por fazer fica com o contorno padrão](0072-dia-atual-parcial-fica-no-padrao.md) | Aceita |
| 0073 | [Selos ✓ e ✕ reforçam a cor do contorno na faixa de 7 dias](0073-selos-de-status-na-faixa.md) | Aceita |
| 0074 | [Dia atual na faixa se destaca pelo fundo preenchido](0074-destaque-do-dia-atual-na-faixa.md) | Substituída pelo ADR 0144 |
| 0075 | [Detalhe do treino mostra os paces em lista e compara previsto e feito só no geral](0075-paces-sem-barras-e-comparacao-geral.md) | Aceita (revisada pelo ADR 0080) |
| 0076 | [Ações, feedback e Piu ficam numa área fixa no rodapé do detalhe do treino](0076-acoes-e-feedback-no-rodape-do-detalhe.md) | Aceita (revisada pelo ADR 0157) |
| 0077 | [Apagar um feedback pede confirmação](0077-apagar-feedback-pede-confirmacao.md) | Aceita |
| 0078 | [Mudar um treino é replanejar com o Piu, no lugar de "Pular" e "Trocar dia"](0078-replanejar-treino-com-o-piu.md) | Aceita (revisada pelos ADRs 0084 e 0106) |
| 0079 | [O executado no detalhe do treino usa só o resumo do Strava](0079-executado-so-com-o-resumo-do-strava.md) | Aceita |
| 0080 | [Treino feito mostra só o previsto × feito](0080-treino-feito-mostra-so-previsto-x-feito.md) | Aceita |
| 0081 | [Tela inicial do Plano com objetivo, fases e semanas](0081-tela-inicial-do-plano.md) | Aceita (revisada pelo ADR 0094) |
| 0082 | [Fases do plano em retângulos de mesma largura, com rolagem horizontal](0082-fases-em-faixa-com-rolagem.md) | Aceita |
| 0083 | [Detalhe do plano com o volume semanal previsto × feito](0083-detalhe-do-plano.md) | Aceita (revisada pelos ADRs 0094 e 0098) |
| 0084 | ["Semana mais leve" e "Adiar objetivo" viram sugestões de pedido ao Piu](0084-acoes-da-semana-viram-sugestoes-do-piu.md) | Aceita (revisada pelo ADR 0085) |
| 0085 | [Sugestões de pedido no Piu geram uma proposta do Piu](0085-sugestoes-do-piu-geram-proposta.md) | Aceita |
| 0086 | [Mensagem de Notificações abre em tela própria](0086-mensagem-abre-em-tela-propria.md) | Aceita |
| 0087 | [Lista de Notificações em ordem cronológica, com dia e hora em cada mensagem](0087-lista-de-notificacoes-cronologica.md) | Aceita |
| 0088 | [Antes e depois em uma linha por dia, com o antes riscado](0088-antes-e-depois-em-linhas.md) | Aceita |
| 0089 | [Mensagens lidas são excluídas 30 dias depois da leitura](0089-notificacoes-lidas-excluidas-apos-30-dias.md) | Aceita (revisada pelo ADR 0094) |
| 0090 | [Conversa única e contínua com o Piu](0090-conversa-unica-com-o-piu.md) | Aceita (revisada pelo ADR 0106) |
| 0091 | [Sugestões de pedido aparecem só no início de um assunto](0091-sugestoes-de-pedido-so-no-inicio.md) | Aceita |
| 0092 | [O histórico da conversa com o Piu é mantido](0092-historico-da-conversa-mantido.md) | Aceita (revisada pelo ADR 0094) |
| 0093 | [Limite diário de mensagens mantido, com aviso só perto do fim](0093-limite-diario-com-aviso-no-fim.md) | Aceita |
| 0094 | [Perfil só com dados pessoais, sem itens do plano nem histórico de replanejamentos](0094-perfil-so-com-dados-pessoais.md) | Aceita (revisada pelos ADRs 0098 e 0099) |
| 0095 | [Editar o perfil salva os dados e leva ao Piu com o que mudou](0095-editar-perfil-leva-ao-piu.md) | Aceita (revisada pelos ADRs 0098 e 0099) |
| 0096 | [Sair da conta pede confirmação](0096-sair-pede-confirmacao.md) | Aceita |
| 0097 | [Frequência semanal no lugar de dias fixos](0097-frequencia-semanal-sem-dias-fixos.md) | Aceita (revisada pelos ADRs 0098 e 0137) |
| 0098 | [Frequência semanal fica no Perfil, em Meus dados](0098-frequencia-semanal-no-perfil.md) | Aceita (revisada pelo ADR 0137) |
| 0099 | [Nome no Perfil, sugerido pelo Strava](0099-nome-no-perfil.md) | Aceita |
| 0100 | [Boas-vindas só com uma frase e o campo de e-mail](0100-boas-vindas-so-com-frase-e-email.md) | Aceita |
| 0101 | [Progresso do setup com barra e contagem de passos](0101-progresso-do-setup-com-passos.md) | Aceita |
| 0102 | [Plano fica ativo direto depois de gerar, sem tela de revisão e aceite](0102-plano-ativo-direto-apos-gerar.md) | Aceita |
| 0103 | [Objetivo em três opções: completar uma distância, melhorar o tempo ou sem objetivo definido](0103-objetivo-em-tres-opcoes.md) | Aceita |
| 0104 | [Prazo sugerido em "Completar uma distância" é calculado pelas regras](0104-prazo-sugerido-pelas-regras.md) | Aceita |
| 0105 | [Integração com a API do Strava no backend, sem o Strava MCP](0105-api-do-strava-no-backend.md) | Aceita |
| 0106 | [Dados do Strava nunca vão para a IA](0106-dados-do-strava-nunca-vao-para-a-ia.md) | Aceita |
| 0107 | [Ajustes disparados pelo Strava são feitos só pelo motor de regras](0107-ajustes-do-strava-so-pelo-motor-de-regras.md) | Aceita |
| 0108 | [Histórico do Strava: 12 semanas, só o resumo de cada atividade](0108-historico-de-12-semanas-com-resumo.md) | Aceita |
| 0109 | [Polling no Supabase a cada 2h, das 5h às 23h](0109-polling-a-cada-2h.md) | Aceita |
| 0110 | [Permissão activity:read_all no Strava, sem guardar mapa ou GPS](0110-permissao-activity-read-all.md) | Aceita |
| 0111 | [Cada consulta concilia as atividades dos últimos 7 dias](0111-conciliacao-dos-ultimos-7-dias.md) | Aceita |
| 0112 | [Tokens do Strava cifrados com o Supabase Vault](0112-tokens-do-strava-no-vault.md) | Aceita |
| 0113 | [Limite de atletas do app no Strava](0113-limite-de-atletas-no-strava.md) | Aceita |
| 0114 | [Testes da integração com o Strava sem depender do Strava real](0114-testes-da-integracao-com-o-strava.md) | Aceita |
| 0115 | [Marca do Strava no app](0115-marca-do-strava-no-app.md) | Aceita |
| 0116 | [Desconectar o Strava deixa o app no estado de falha de sincronização](0116-desconectar-o-strava.md) | Aceita |
| 0117 | [Conversa sobre um ajuste disparado pelo Strava leva só o antes e o depois do plano](0117-piu-sem-o-motivo-dos-ajustes-do-strava.md) | Aceita |
| 0118 | [Planejamento de testes e CI antes do setup do monorepo](0118-planejamento-de-testes-e-ci-antes-do-setup.md) | Aceita |
| 0119 | [Jest como runner de testes unitários e de integração](0119-runner-jest.md) | Aceita |
| 0120 | [E2E com Maestro no Android](0120-e2e-com-maestro.md) | Aceita |
| 0121 | [CI no GitHub Actions](0121-ci-no-github-actions.md) | Aceita |
| 0122 | [Repositório público para os quality gates bloquearem o merge](0122-repositorio-publico.md) | Aceita |
| 0123 | [Todos os quality gates rodam e bloqueiam o merge em todo PR](0123-gates-obrigatorios-em-todo-pr.md) | Aceita |
| 0124 | [Cobertura mínima de testes por pacote](0124-cobertura-minima-por-pacote.md) | Aceita |
| 0125 | [Fluxos cobertos pelo E2E do MVP](0125-fluxos-cobertos-pelo-e2e.md) | Aceita |
| 0126 | [Gitleaks na CI e push protection do GitHub](0126-scanner-de-segredos.md) | Aceita |
| 0127 | [App mobile entregue em fatias verticais](0127-app-mobile-em-fatias-verticais.md) | Aceita |
| 0128 | [Provedor de IA construído no épico do motor de regras](0128-ai-provider-no-epico-do-motor-de-regras.md) | Aceita |
| 0129 | [npm workspaces como gerenciador do monorepo](0129-npm-workspaces.md) | Aceita |
| 0130 | [Node 24 LTS fixado no projeto](0130-node-24-lts.md) | Aceita |
| 0131 | [ESLint e Prettier para lint e formatação](0131-eslint-e-prettier.md) | Aceita |
| 0132 | [Expo Router para a navegação do app](0132-expo-router.md) | Aceita |
| 0133 | [StyleSheet com módulo de tokens para os estilos do app](0133-stylesheet-com-tokens.md) | Aceita |
| 0134 | [Pacotes internos consumidos como TypeScript fonte, sem build](0134-pacotes-internos-sem-build.md) | Aceita |
| 0135 | [Pasta `tests/` organizada por camada da pirâmide](0135-pasta-tests-por-camada.md) | Aceita |
| 0136 | [Todos os quality gates ativos desde o setup, com testes de fumaça](0136-gates-ativos-desde-o-setup.md) | Aceita |
| 0137 | [Outras atividades declaradas no setup, só como registro de carga](0137-outras-atividades-como-registro-de-carga.md) | Aceita |
| 0138 | [Identidade visual do Live Run](0138-identidade-visual.md) | Aceita |
| 0139 | [Detalhamento semanal pela IA, sem dados do Strava](0139-detalhamento-semanal-sem-dados-do-strava.md) | Aceita |
| 0140 | [Direção visual esportiva sobre a base da identidade](0140-direcao-visual-esportiva.md) | Aceita |
| 0141 | [Skills de design copiadas para o repositório](0141-skills-de-design.md) | Aceita |
| 0142 | [Tons de status, fundo com transparência e selos](0142-tons-de-status-e-selos.md) | Aceita |
| 0143 | [Definições de alta fidelidade registradas no design system Live Run](0143-alta-fidelidade-no-design-system.md) | Aceita |
| 0144 | [Dia atual na faixa se destaca por uma barra embaixo](0144-dia-atual-com-barra-embaixo.md) | Aceita |
| 0145 | [Antes e depois com o antes riscado e uma seta no depois](0145-antes-e-depois-com-riscado-e-seta.md) | Aceita |
| 0146 | [Ícones dos tipos de atividade em figuras](0146-icones-de-atividade-em-figuras.md) | Aceita |
| 0147 | [Ícone da aba Hoje elevado, com o número do dia](0147-icone-do-hoje-elevado.md) | Aceita |
| 0148 | [Telas de alta fidelidade em artifact próprio, com o código no repositório](0148-telas-de-alta-fidelidade-em-artifact.md) | Aceita |
| 0149 | [Chips de status do treino](0149-chips-de-status-do-treino.md) | Aceita |
| 0150 | [Aviso neutro de falha do Strava](0150-aviso-neutro-de-falha-do-strava.md) | Aceita |
| 0151 | [Contagem de não lidas na aba Notificações](0151-contagem-de-nao-lidas.md) | Aceita |
| 0152 | [Folha da escolha do treino](0152-folha-da-escolha-do-treino.md) | Aceita |
| 0153 | [Número em destaque no card do treino](0153-numero-em-destaque-no-card-do-treino.md) | Aceita |
| 0154 | [Cabeçalho e seções do detalhe do treino](0154-cabecalho-e-secoes-do-detalhe.md) | Aceita (revisada pelo ADR 0157) |
| 0155 | [Chip de não feito](0155-chip-de-nao-feito.md) | Aceita |
| 0156 | [Previsto × feito e origem no Strava](0156-previsto-feito-e-origem-no-strava.md) | Aceita |
| 0157 | [Ações diretas no detalhe do treino](0157-acoes-diretas-no-detalhe.md) | Aceita |
| 0158 | [Rodapé fixo do detalhe do treino](0158-rodape-fixo-do-detalhe.md) | Aceita |
| 0159 | [Balões de mensagem do feedback e do Piu](0159-baloes-de-mensagem.md) | Aceita |
| 0160 | ["Feedback salvo" na própria mensagem](0160-feedback-salvo-na-propria-mensagem.md) | Aceita |
| 0161 | [Aviso neutro com link](0161-aviso-neutro-com-link.md) | Aceita |
| 0162 | [Proposta do Piu na conversa, com o treino como contexto](0162-proposta-do-piu-na-conversa.md) | Aceita |
| 0163 | [Diálogo de confirmação próprio](0163-dialogo-de-confirmacao.md) | Aceita |
| 0164 | [Título de seção sem caixa alta](0164-titulo-de-secao-sem-caixa-alta.md) | Aceita |
| 0165 | [Seções em grupo sem contorno](0165-secoes-em-grupo-sem-contorno.md) | Aceita |
| 0166 | [Linhas de apoio em frases, sem pontos médios](0166-linhas-de-apoio-em-frases.md) | Aceita |
| 0167 | [Card do objetivo com a distância em destaque](0167-card-do-objetivo.md) | Aceita |
| 0168 | [Faixa de fases com contorno na fase atual](0168-faixa-de-fases.md) | Aceita |
| 0169 | [Dias da semana num grupo, com o dia em miniatura](0169-dias-da-semana-em-grupo.md) | Aceita |
| 0170 | [Linhas de semana e volume da semana em texto](0170-linhas-de-semana.md) | Aceita |
| 0171 | [Gráfico de volume semanal com a semana atual em faixa](0171-grafico-de-volume-semanal.md) | Aceita |
| 0172 | [Adiar objetivo com o seletor de data do sistema](0172-adiar-objetivo-com-seletor-nativo.md) | Aceita |

## Como criar um novo ADR

1. Copie o formato de um ADR existente com o próximo número (`NNNN-slug.md`).
2. Preencha contexto, decisão e consequências.
3. Adicione uma linha nesta tabela.
