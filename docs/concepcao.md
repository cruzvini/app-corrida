# Concepção e escopo (épico #1)

Notas vivas do épico de concepção. As decisões fechadas viram ADR em `docs/decisions/`.

## Problema

O usuário não quer pagar um coach de corrida, porque não tem um grande objetivo na corrida. Ele já planeja corrida e musculação com uma LLM, com os dados do Strava conectados via MCP, e isso funciona: ele tem controle do tamanho do plano e flexibilidade para programar e reprogramar a qualquer momento, por qualquer motivo.

A dor é que **não existe um lugar dedicado**: o plano, o histórico e os ajustes ficam espalhados em texto de conversa com a LLM.

## Objetivo

Ser o lugar dedicado ao plano de treinos. O plano fica estruturado e visível, e a mesma flexibilidade de conversar com a IA para criar, dar feedback e replanejar continua a qualquer momento.

## Decisões tomadas

- Musculação entra no plano como carga que afeta a corrida, O setup define o nível de corrida e a frequência de cada modalidade (ex.: musculação 3x, sendo 2 superiores e 1 inferiores). O plano distribui os treinos em dias específicos. O Strava e a interação do usuário confirmam o que aconteceu ([ADR 0014](decisions/0014-musculacao-como-carga-no-plano.md)).

## Cards do épico

1. [x] Problema e objetivo. Funcionalidade central, que é o critério de sucesso: **planejar treinos, replanejar com flexibilidade e acompanhar o plano no dia a dia.** O resto é feature.
2. [x] Público e personas: o usuário no protótipo; depois amigos e família, com **perfil misto** (alguns iniciantes, outros mais experientes).
   - Impacto: o setup e o plano precisam funcionar para quem nunca planejou treino, com mais orientação e progressão conservadora, e também para quem já corre.
   - Ao abrir para iniciantes e não praticantes, reavaliar o questionário de prontidão para saúde (ADR 0013). O nível "Não praticante" torna isso mais importante.
   - Nível de corrida: o app sugere pelo Strava e a pessoa confirma; sem histórico, ela escolhe ([ADR 0015](decisions/0015-nivel-de-corrida-sugerido-e-confirmado.md)).
   - **Descrições dos níveis (validadas):**
     - **Não praticante:** não pratica atividade física regularmente e quer começar do zero.
     - **Iniciante:** não corre com regularidade. Faz caminhada ou cardio de vez em quando. Corre poucos minutos seguidos, ou alterna corrida e caminhada.
     - **Intermediário:** corre de 1 a 3 vezes por semana com alguma regularidade. Corre de 3 a 5 km sem parar.
     - **Avançado:** corre 3 ou mais vezes por semana há meses. Completa 10 km ou mais com conforto e já faz treinos variados (intervalado, longão), conhecendo seus paces.
3. [x] Jornadas principais (validadas):
   1. Onboarding: criar a conta e conectar o Strava.
   2. Setup do plano: confirmar o nível, informar a frequência de corrida e musculação, escolher plano genérico ou específico.
   3. Geração do plano: o app monta as semanas, e o usuário revisa e aceita.
   4. Dia a dia: ver o treino do dia; o Strava sincroniza; o usuário confirma ou ajusta.
   5. Feedback: análise do treino na caixa de entrada.
   6. Replanejamento: o usuário pede uma mudança a qualquer momento, e o app ajusta o plano.
4. [x] Escopo do MVP (validado):
   - Entram no MVP os dois tipos de plano: genérico e específico (ADR 0008).
   - Plano específico com distância livre ([ADR 0016](decisions/0016-plano-especifico-com-distancia-livre.md)).
   - Meta fora do comum: o app avisa sobre os riscos e sugere alternativas, sem bloquear; as regras detectam e a IA explica; a decisão é do usuário ([ADR 0017](decisions/0017-avisar-riscos-sem-bloquear-plano.md)).
   - Replanejamento por ações prontas, aplicadas direto, e por conversa livre, com revisão antes de aplicar; é possível desfazer a última ação pronta ([ADR 0018](decisions/0018-replanejamento-acoes-prontas-e-conversa.md)).
   - **Fora do MVP:** notificações push (ADR 0007); Apple Health / Health Connect (ADR 0009); questionário de prontidão para saúde e registro manual de treinos (ADR 0013); prescrição de exercícios de musculação (ADR 0014); dashboard, resumo, calendário e PRs por distância (ideias de features); versionamento completo do plano (ADR 0018); TestFlight / App Store (ADR 0010).
5. [ ] Critérios de aceitação de cada jornada (definidos pelo usuário).
   - **Jornada 1, onboarding (validada):**
     1. Eu informo meu e-mail, recebo um link mágico e, ao tocar nele, entro no app sem senha ([ADR 0020](decisions/0020-autenticacao-email-link-magico.md)).
     2. Ao reabrir o app, continuo logado, sem precisar entrar de novo.
     3. Conectar o Strava (OAuth) é obrigatório: sem essa conexão, não chego ao setup do plano ([ADR 0019](decisions/0019-conexao-strava-obrigatoria.md)).
     4. Depois de conectar, o app mostra que o Strava está conectado e importa meu histórico recente.
     5. Se eu recusar ou cancelar a autorização, o app explica por que a conexão é necessária e permite tentar de novo.
     6. Se eu não tiver histórico no Strava, sigo para o setup e escolho meu nível manualmente.
     7. Só eu vejo meus dados. Outro usuário não acessa nada meu (RLS, ADR 0003).
   - **Jornada 2, setup do plano (validada):**
     1. Se eu tiver histórico no Strava, o app sugere meu nível e explica o motivo. Posso confirmar ou trocar, vendo a descrição de cada nível (ADR 0015).
     2. Informo idade e peso.
     3. Informo quantos dias por semana quero correr e se faço musculação. Se faço, informo quantos dias e a divisão (ex.: 2 superiores, 1 inferiores) (ADR 0014).
     4. Escolho entre plano genérico e plano específico.
     5. No plano específico, informo a distância (qualquer valor) e a data da prova ou o prazo da meta (ADR 0016).
     6. No plano específico, o app sugere um pace alvo com base no meu histórico, e eu aceito ou ajusto. Sem histórico suficiente, o plano começa sem meta de pace, com foco em completar a distância (ADR 0021).
     7. Se a meta for muito fora do comum para o meu nível ou o prazo, o app explica os riscos e sugere alternativas. Posso seguir mesmo assim, e minha escolha fica registrada (ADR 0017).
     8. Antes de gerar o plano, vejo um resumo das minhas respostas e posso editar qualquer uma.
   - **Jornada 3, geração do plano (validada):**
     1. Depois do setup, o app gera o plano e mostra a estrutura completa (fases e volume semanal) e as próximas 1 a 2 semanas detalhadas (ADR 0023).
     2. Cada treino de corrida detalhado mostra o tipo (ex.: leve, limiar, intervalado, progressivo, longão) e é dividido em blocos (ex.: aquecimento, repetições, recuperação, desaquecimento). Cada bloco tem distância ou duração e um pace alvo, ou uma faixa de intensidade quando não houver meta de pace (ADR 0024).
     3. Os treinos respeitam os dias de corrida e musculação que informei, e a musculação aparece com a divisão do dia (ex.: inferiores).
     4. O plano não coloca corrida intensa logo depois de um treino de inferiores.
     5. No plano específico, o plano termina na data da prova ou no prazo da meta.
     6. Se a validação das regras encontrar um risco, vejo o aviso e as alternativas antes de aceitar (ADR 0017).
     7. Antes de aceitar, posso pedir ajustes. O plano só fica ativo depois que eu aceito.
     8. As semanas seguintes são detalhadas automaticamente, e recebo um resumo na caixa de entrada.
     9. Se a geração falhar (ex.: IA indisponível), o app avisa e permite tentar de novo, sem perder minhas respostas do setup.
6. [ ] Requisitos não funcionais: privacidade de dados de saúde, LGPD e custos (API de IA, Supabase).

## Ideias de features (não priorizadas)

Ficam fora do núcleo por enquanto. Serão avaliadas depois do MVP.

- Dashboard com o andamento do plano.
- Resumo do que está indo bem e do que precisa de atenção.
- Calendário com os treinos.
- PRs por distância.

## Próximos passos

1. **Próxima pergunta:** jornada 4 (card 5): o que acontece com atividades fora do plano.
2. Seguir para os cards 5 e 6, uma decisão por vez.
3. Criar os cards do épico #1 no board, quando o escopo estiver mais claro.
4. Pendências do repositório:
   - trocar a descrição da label `epic` de "Épica" para "Épico";
   - avaliar um `.gitattributes` para padronizar as quebras de linha (os avisos LF/CRLF aparecem no Windows).
