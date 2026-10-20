# ADR 0034: Navegação por barra de abas inferior com Hoje no centro

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O app precisa dar acesso rápido às 6 jornadas validadas na concepção. O centro do produto é acompanhar o plano no dia a dia e replanejar com flexibilidade. Foram avaliadas barras com 3, 4 e 5 abas. A aba Hoje deveria ficar no centro, o que exige um número ímpar de abas.

## Decisão

Barra de abas fixa na parte inferior da tela, com 5 abas nesta ordem:

`Plano · Isaias · [Hoje] · Notificações · Perfil`

- **Hoje** (centro, em destaque e um pouco elevada; ícone ligado ao dia atual, ex.: calendário com o número do dia): é a aba aberta ao entrar no app. O ponto principal é o treino planejado do dia. Mostra também um pequeno lembrete do treino anterior e o calendário da semana (jornada 4).
- **Plano** (ícone de calendário): destaca o objetivo do plano e mostra as informações completas (fases, semanas e treinos). Tem um botão "Editar plano" que abre o Isaias com o contexto do plano (jornadas 3 e 6).
- **Isaias** (ícone de bot): conversa livre com o assistente (ADR 0035), no estilo de apps de mensagem (WhatsApp, Messages), com as mensagens do usuário de um lado e as do Isaias do outro (jornada 6).
- **Notificações** (ícone de sino): a caixa de entrada do app (ADR 0007), com o selo de não lidas. São só notificações dentro do app, sem push (jornada 5).
- **Perfil** (ícone de pessoa): dados do setup, que podem ser editados a qualquer momento, e o status da conexão com o Strava (jornadas 1, 2 e 6).

## Consequências

- O nome "Caixa de entrada", usado nos documentos da concepção, passa a se chamar "Notificações" na interface. O comportamento definido no ADR 0007 não muda.
- A ordem simétrica (duas abas de cada lado do Hoje) exige um componente de barra de abas com o botão central customizado no Expo (React Navigation).
- O ícone do Hoje precisa mudar todo dia (número do dia), o que a identidade visual (card 5) deve prever.
