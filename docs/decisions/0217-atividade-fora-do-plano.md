# ADR 0217: Atividade fora do plano numa linha do Hoje e como ícone secundário na faixa

- **Status:** Aceita
- **Data:** 2026-11-16
- **Complementa:** [ADR 0027](0027-atividade-fora-do-plano-conta-como-carga.md), [ADR 0045](0045-atividade-em-outro-dia-nao-e-religada.md), [ADR 0067](0067-corrida-e-musculacao-no-mesmo-dia.md), [ADR 0078](0078-replanejar-treino-com-o-piu.md) e [ADR 0146](0146-icones-de-atividade-em-figuras.md)

## Contexto

O critério 4.8 diz que uma atividade fora do plano conta como carga e pode ajustar os próximos treinos só pelo motor de regras (ADRs 0027 e 0107). Na validação do design (card 6, issue #25), a atividade não aparecia no Hoje, na faixa nem no Plano, e o usuário não teria como ver que o app a considerou.

## Decisão

- **Faixa do Hoje e linha do dia no Plano:** a atividade aparece como mais um ícone do dia, em `texto-secundario`, sem selo, porque não era um treino previsto. O status do dia (contorno, fundo e selo) continua vindo só dos treinos previstos.
- **Hoje:** uma linha abaixo do card, igual à da musculação (ADR 0067), com o tipo e a duração ("Bike, 40 min"), a legenda "Fora do plano" e o chip neutro "Conta como carga".
- **Detalhe:** abre como o detalhe da musculação feita, sem previsto, sem pílula de status e sem feedback, com o resumo e a atividade do Strava de origem ("View on Strava"). O link "Era um treino de outro dia? Fale com o Piu" leva ao Piu para ligar a atividade a um treino (ADR 0078). O Piu recebe só o pedido e o plano, nunca dados do Strava (ADR 0106).
- Se a carga mudar os próximos treinos, o ajuste chega em Notificações como qualquer ajuste automático, com o antes e o depois.
- Os estados "Atividade fora do plano" (Hoje) e "Detalhe da atividade fora do plano" ficam em [`telas/index.html`](../telas/index.html).

## Consequências

- O usuário vê que a atividade foi considerada como carga, sem confundi-la com um treino feito.
- O DiaDaFaixa ganha a variação de ícone secundário, e o ícone `bicycle` entra no sprite e no IconeDeAtividade.
- O chip "Conta como carga" se soma aos chips neutros do ADR 0180.
