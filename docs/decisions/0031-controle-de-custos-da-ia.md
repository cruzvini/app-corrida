# ADR 0031: Controle de custos da IA com teto mensal e limite por usuário

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

Cada geração de plano, detalhamento semanal, ajuste automático, proposta a partir de feedback e mensagem da conversa livre é uma chamada paga à API de IA, cobrada por uso. O custo sai da conta do dono do projeto. A conversa livre é o único uso que cresce sem limite natural.

## Decisão

- **Teto mensal de gasto** configurado no painel do provedor de IA, como trava de segurança.
- **Limite diário por usuário** para mensagens da conversa livre (valor inicial: 20 por dia), configurável no backend.
- Chamadas automáticas (geração do plano, detalhamento semanal, ajustes por treino não feito ou atividade extra, propostas a partir de feedback) não têm limite por usuário, porque são poucas por semana.

## Consequências

- Ao atingir o limite diário, o app avisa o usuário e mantém as ações prontas funcionando (ADR 0018), porque elas não dependem da IA.
- Ao atingir o teto mensal, todas as funções de IA param até o mês seguinte. O app deve mostrar uma mensagem clara, e as ações prontas continuam funcionando.
- Os ajustes automáticos dependem da IA (ADRs 0022 e 0026). Sem IA, é preciso um comportamento de reserva (ex.: tentar de novo mais tarde, ou um ajuste simples só por regras), a ser definido no épico "Motor de regras".
- O backend registra o uso de IA por usuário (quantidade de chamadas e tokens), para acompanhar o custo.
- O valor do teto mensal será definido na configuração da conta do provedor, fora do repositório.
