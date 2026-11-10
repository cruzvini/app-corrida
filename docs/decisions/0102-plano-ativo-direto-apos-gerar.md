# ADR 0102: Plano fica ativo direto depois de gerar, sem tela de revisão e aceite

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0037 terminava o onboarding com uma tela de revisão e aceite do plano, com "Pedir ajustes" pelo Piu, e o plano só ficava ativo depois do aceite (critério 3.7). Ver e mudar o plano, porém, já faz parte do dia a dia: aba Plano, detalhe do plano e conversa com o Piu (ADRs 0081, 0083 e 0085).

## Decisão

- Depois de **"Gerar meu plano"**, o app mostra "Montando seu plano" e, quando termina, **abre direto o Hoje**, com a barra de abas.
- O plano fica **ativo na hora**, a partir da data de início escolhida (ADR 0043). Não há tela de revisão nem de aceite.
- Para ver o plano, o usuário vai à aba Plano. Para mudar, conversa com o Piu.
- Riscos do objetivo continuam aparecendo no setup, antes de gerar (critério 2.7). Se as regras acharem um risco no plano gerado, o aviso chega em Notificações, assinado pelo Piu, com as alternativas.
- Se a geração falhar, o app avisa e oferece tentar de novo, sem perder as respostas (critério 3.9).

## Consequências

- O onboarding termina mais rápido, e o usuário já cai no treino do dia.
- O plano pode ficar ativo com algo que o usuário mudaria. A mudança é feita pelo Piu, como qualquer replanejamento.
- Revisa os ADRs 0037 e 0043 e os critérios 3.1, 3.6 e 3.7.
