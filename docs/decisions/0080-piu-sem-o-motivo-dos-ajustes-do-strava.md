# ADR 0080: Conversa sobre um ajuste disparado pelo Strava leva só o antes e o depois do plano

- **Status:** Aceita
- **Data:** 2026-10-22
- **Revisa:** [ADR 0050](0050-notificacoes-assinadas-pelo-piu.md)

## Contexto

O ADR 0050 coloca em toda mensagem de Notificações o botão "Conversar com o Piu sobre isso", que abre a conversa com a mensagem como contexto. Nos ajustes disparados pelo Strava (treino não feito às 22h, carga extra, treino muito acima do previsto, atividade editada ou apagada), o texto da mensagem cita o motivo, que é dado do Strava. Pelo ADR 0066, esse motivo não pode ir para a IA. As opções eram manter o botão sem o motivo ou tirar o botão dessas mensagens.

## Decisão

- O botão continua em todas as mensagens, como no ADR 0050.
- Nos ajustes disparados pelo Strava, **o Piu recebe só o antes e o depois do plano** (ajuste feito pelas regras, permitido pelo ADR 0066), sem o texto da mensagem nem o motivo.
- A conversa abre com o ajuste à vista e um convite curto do Piu para o usuário contar o que aconteceu, se quiser. O que o usuário escreve é dado dele e pode ir para a IA.
- Nas outras mensagens (semana nova, sugestão, proposta do feedback), vale o ADR 0050: a mensagem vai inteira como contexto.

## Consequências

- O usuário tem sempre o mesmo caminho para mudar um ajuste, inclusive os antigos que não podem mais ser desfeitos (ADR 0047).
- Cada mensagem precisa guardar a origem (Strava ou usuário), e o filtro do ADR 0066 decide o que vai para o Piu. Esse caso entra nos testes do filtro.
- Os textos dessas mensagens são de template, sem IA, e seguem o tom de voz (ADR 0033).
