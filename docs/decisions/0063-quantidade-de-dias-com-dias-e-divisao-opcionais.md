# ADR 0063: Quantidade de dias por modalidade, com dias da semana e divisão opcionais

- **Status:** Aceita
- **Data:** 2026-10-21
- **Substitui:** [ADR 0041](0041-dias-da-semana-fixos-e-editaveis.md)

## Contexto

O ADR 0041 obrigava o usuário a marcar no setup os dias da semana de cada modalidade e a divisão de cada dia de musculação. Na revisão dos wireframes (épico #2, card 4), ficou claro que isso vai contra o princípio do app: o usuário deve ter liberdade para não determinar nada específico. Quem quer controle escolhe os dias; quem não quer, deixa o plano decidir.

## Decisão

- No setup, o usuário informa só a **quantidade de dias por semana** de corrida e de musculação (musculação pode ser zero).
- Escolher **os dias da semana** é opcional, para cada modalidade separadamente.
- Na musculação, definir **a divisão** (superiores, inferiores ou corpo todo) também é opcional.
- **Sem dias escolhidos**, o plano mantém só a quantidade de dias de cada modalidade por semana. Os dias podem variar de uma semana para outra.
- **Sem divisão definida**, o plano distribui os grupos musculares.
- **Com dias escolhidos**, o plano usa exatamente esses dias, como no ADR 0041.
- Valem as regras de dias e intensidade (critério 3.4): o plano evita corrida intensa depois de inferiores. Corrida e musculação no mesmo dia continuam permitidas, com aviso em combinação de risco (ADR 0017).
- Tudo fica em **Perfil > Meu treino** (ADR 0038) e pode mudar a qualquer momento, com revisão antes de valer (ADR 0061).
- Mudanças pontuais continuam pela ação "trocar dia" (ADR 0057) ou pelo Piu, sem alterar a configuração. Quando o usuário pede ao Piu uma troca que parece definitiva, o Piu pergunta se deve atualizar o Perfil, como no ADR 0041.

## Consequências

- O critério 2.3 da concepção passa a pedir a quantidade de dias, com dias e divisão opcionais.
- O modelo de dados guarda, por modalidade, a quantidade de dias e, quando houver, os dias fixos e a divisão.
- Sem dias fixos, quem distribui os dias a cada semana é a IA com as regras ("IA propõe, regras validam", ADR 0022). O motor de regras precisa validar a quantidade por semana e a ordem dos dias.
- Sem dias fixos, a semana pode mudar no detalhamento semanal (ADR 0044). A semana atual não muda sozinha.
- Wireframe: tela 05 do canvas de wireframes (épico #2, card 4).
