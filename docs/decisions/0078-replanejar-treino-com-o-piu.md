# ADR 0078: Mudar um treino é replanejar com o Piu, no lugar de "Pular" e "Trocar dia"

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Replanejar sempre que for preciso é a ideia central do app (ADR 0018). No detalhe do treino, as ações prontas "Pular" (ADR 0058) e "Trocar dia" (ADR 0057) mexem só no treino escolhido. Os motivos para mudar um treino são muitos, e a mudança de um treino afeta os seguintes. Por exemplo, pular um longão de 15 km e colocá-lo no dia seguinte ao treino de pernas deixa o plano ruim, mesmo com o aviso de risco.

Quando a mudança vem do Strava, o plano já é reavaliado automaticamente: treino não feito (ADR 0026) e treino muito acima do previsto, como 8 km no lugar de 4 (ADR 0027). Faltava o caminho para quando o usuário quer mudar um treino antes de ele acontecer.

## Decisão

- **"Pular" e "Trocar dia" deixam de existir como ações prontas.**
- No detalhe de um treino **previsto**, a ação **"Replanejar"** abre o Piu (ADR 0035) com o treino como contexto e com atalhos para os casos comuns:
  - "Não vou fazer";
  - "Quero fazer em outro dia";
  - "Quero mudar o treino" (ex.: distância, tipo, intensidade).
- O usuário pode tocar num atalho ou escrever o que quiser. O Piu pergunta o que faltar (ex.: qual dia) e propõe o ajuste do treino **e dos próximos dias**, pelo fluxo "IA propõe, regras validam" (ADR 0022).
- A proposta segue o caminho da conversa livre: aparece na conversa com o antes e o depois e os avisos de risco, e o usuário aceita, edita ou descarta (ADRs 0018, 0053 e 0062).
- **"Não vou fazer":** o treino só passa a não feito quando a proposta é aceita, junto com o ajuste. Se for descartada, o treino continua previsto, e vale a regra das 22h (ADR 0026).
- **Atividade feita em outro dia:** para ligar uma atividade a outro treino (ADR 0045), o usuário fala com o Piu. A ligação a um dia passado continua sendo a única exceção ao critério 6.6, como era no ADR 0057.
- No treino previsto, "Replanejar" ocupa o lugar de "Falar com o Piu sobre este treino", para a mesma ação não aparecer duas vezes (como no ADR 0053). Nos outros status, o acesso ao Piu continua como estava.

## Consequências

- Toda mudança feita pelo usuário num treino reavalia o plano, e não só o dia escolhido.
- Mudar um treino passa a depender da IA: cada uso é uma chamada sujeita ao controle de custos (ADR 0031). Sem a IA, "Replanejar" mostra que não está disponível no momento; "Marcar como feito", as ações da semana e o ajuste das 22h continuam valendo.
- Mudar um treino deixa de ser imediato: há o passo de aceitar a proposta.
- As ações prontas ficam só no nível da semana: semana mais leve (ADR 0059) e adiar a prova (ADR 0060). No treino, ficam marcar ou desmarcar como feito e corrigir a divisão.
- Revisa os ADRs 0018, 0026, 0036, 0041 e 0045 e os critérios 4.6 e 6.1. Substitui os ADRs 0057 e 0058.
