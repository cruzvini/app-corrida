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
2. [ ] Público e personas: você no protótipo; amigos e família depois.
3. [ ] Jornadas principais: onboarding, conexão com o Strava, criação do plano, treino sincronizado, feedback e replanejamento.
4. [ ] Escopo do MVP: o que entra, o que fica de fora e o que já foi adiado (ADR 0013).
5. [ ] Critérios de aceitação de cada jornada (definidos pelo usuário).
6. [ ] Requisitos não funcionais: privacidade de dados de saúde, LGPD e custos (API de IA, Supabase).

## Ideias de features (não priorizadas)

Ficam fora do núcleo por enquanto. Serão avaliadas depois do MVP.

- Dashboard com o andamento do plano.
- Resumo do que está indo bem e do que precisa de atenção.
- Calendário com os treinos.
- PRs por distância.

## Próximos passos

1. **Próxima pergunta:** público e personas (card 2).
2. Seguir para os cards 3 a 6, uma decisão por vez.
3. Criar os cards do épico #1 no board, quando o escopo estiver mais claro.
4. Pendências do repositório:
   - trocar a descrição da label `epic` de "Épica" para "Épico";
   - avaliar um `.gitattributes` para padronizar as quebras de linha (os avisos LF/CRLF aparecem no Windows).
