# ADR 0094: Perfil só com dados pessoais, sem itens do plano nem histórico de replanejamentos

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0038 punha no Perfil os dados do setup (incluindo dias de treino, meta e prazo) e o histórico de replanejamentos. Com o detalhe do plano (ADR 0083), a conversa com o Piu (ADR 0090) e Notificações (ADR 0087), os itens do plano e o registro das mudanças já têm lugar em outras telas.

## Decisão

O Perfil tem três seções:

- **Meus dados:** nível, idade, peso e lesões ou limitações, com o botão "Editar perfil" (ADR 0095).
- **Strava:** status da conexão, última sincronização e reconectar.
- **Conta:** e-mail e sair (ADR 0096).

Saem do Perfil:

- **Objetivo e frequência semanal**, que ficam no detalhe do plano (ADRs 0083 e 0097).
- **Histórico de replanejamentos.** O que mudou fica na conversa com o Piu, mantida (ADR 0092), e em Notificações.

Para o ajuste mais recente continuar podendo ser desfeito (ADR 0047), a mensagem dele em Notificações não é excluída enquanto ele puder ser desfeito (ADR 0089).

## Consequências

- O Perfil fica curto e só com dados da pessoa.
- Os ajustes automáticos aparecem só em Notificações. Depois de lidos e passados 30 dias, eles deixam de aparecer no app. O backend continua guardando o registro das mudanças do plano.
- Revisa os ADRs 0018, 0038, 0081, 0083, 0089 e 0092 e os critérios 6.5 e 6.7.
