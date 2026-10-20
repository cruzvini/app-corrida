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
4. [ ] Escopo do MVP: o que entra, o que fica de fora e o que já foi adiado (ADR 0013).
   - Entram no MVP os dois tipos de plano: genérico e específico (ADR 0008).
   - Plano específico com distância livre ([ADR 0016](decisions/0016-plano-especifico-com-distancia-livre.md)).
   - Meta fora do comum: o app avisa sobre os riscos e sugere alternativas, sem bloquear; as regras detectam e a IA explica; a decisão é do usuário ([ADR 0017](decisions/0017-avisar-riscos-sem-bloquear-plano.md)).
5. [ ] Critérios de aceitação de cada jornada (definidos pelo usuário).
6. [ ] Requisitos não funcionais: privacidade de dados de saúde, LGPD e custos (API de IA, Supabase).

## Ideias de features (não priorizadas)

Ficam fora do núcleo por enquanto. Serão avaliadas depois do MVP.

- Dashboard com o andamento do plano.
- Resumo do que está indo bem e do que precisa de atenção.
- Calendário com os treinos.
- PRs por distância.

## Próximos passos

1. **Próxima pergunta:** como o usuário pede o replanejamento: conversa livre, ações prontas ou os dois (card 4).
2. Seguir para os cards 4 a 6, uma decisão por vez.
3. Criar os cards do épico #1 no board, quando o escopo estiver mais claro.
4. Pendências do repositório:
   - trocar a descrição da label `epic` de "Épica" para "Épico";
   - avaliar um `.gitattributes` para padronizar as quebras de linha (os avisos LF/CRLF aparecem no Windows).
