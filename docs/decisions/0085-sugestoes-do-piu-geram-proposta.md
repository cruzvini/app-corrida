# ADR 0085: Sugestões de pedido no Piu geram uma proposta do Piu

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0084 levou "Semana mais leve" e "Adiar objetivo" para o chat do Piu, como sugestões de pedido, e deixou em aberto o que acontece ao tocar numa delas. Uma opção era aplicar na hora a ação pronta determinística (ADRs 0059 e 0060), com desfazer e sem IA, mas que só mexe no que a regra prevê. A outra era o Piu fazer uma proposta que olha o resto do plano, como no replanejar de um treino (ADR 0078).

## Decisão

Tocar numa sugestão de pedido no Piu **envia o pedido ao Piu**, que responde com uma **proposta**, pelo fluxo "IA propõe, regras validam" (ADR 0022):

- A proposta mostra o antes e o depois de todos os dias afetados e os avisos de risco (ADR 0017).
- O usuário aceita, edita (conversando) ou descarta (ADRs 0053 e 0062).
- Depois de aceita, ela pode ser desfeita enquanto for o ajuste mais recente (ADR 0047).
- **"Semana mais leve" deixa de ser uma ação pronta.** As regras do ADR 0059 (reduzir a corrida, intensos viram leves, musculação e dias não mudam) passam a ser o ponto de partida do Piu, que pode ir além se o plano pedir.
- **"Adiar objetivo" pelo Piu** também gera proposta. O atalho do detalhe do plano (ADR 0083) continua sendo a ação pronta do ADR 0060, só com as regras e aplicada na hora.

## Consequências

- Toda mudança de plano pedida no chat segue o mesmo caminho: proposta, decisão e aplicação.
- "Semana mais leve" depende da IA e conta no controle de custos (ADR 0031). Sem a IA, o Piu e as sugestões ficam indisponíveis; o atalho "Adiar objetivo" do detalhe do plano continua funcionando.
- A única ação pronta de replanejamento que sobra é "Adiar objetivo" no detalhe do plano. No treino, continuam marcar ou desmarcar como feito e corrigir a divisão.
- Substitui o ADR 0059 e revisa os ADRs 0018 e 0084 e os critérios 6.1, 6.2 e 6.8.
