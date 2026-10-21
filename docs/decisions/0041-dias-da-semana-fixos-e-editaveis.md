# ADR 0041: Dias da semana de cada modalidade escolhidos no setup e editáveis no Perfil

- **Status:** Substituída pelo [ADR 0063](0063-quantidade-de-dias-com-dias-e-divisao-opcionais.md)
- **Data:** 2026-10-20

## Contexto

O critério 3.3 diz que os treinos respeitam "os dias de corrida e musculação que informei", mas não estava definido se o usuário informa a quantidade de dias ou os dias da semana. A rotina de quem treina costuma ser fixa (trabalho, academia), mas pode mudar de forma pontual ou definitiva.

## Decisão

- No setup, o usuário **marca os dias da semana de cada modalidade** e, na musculação, a divisão de cada dia (ex.: corrida seg/qua/sáb; musculação ter superiores e qui inferiores).
- O plano usa exatamente esses dias. As regras usam a ordem dos dias para evitar corrida intensa depois de inferiores (critério 3.4).
- Corrida e musculação podem ser marcadas no mesmo dia. Em combinação de risco (corrida + inferiores no mesmo dia), as regras deixam a corrida leve naquele dia e mostram um aviso, sem bloquear (ADR 0017).
- Os dias ficam em **Perfil > Meu treino** (ADR 0038) e podem ser alterados a qualquer momento. A mudança é definitiva: o plano é reajustado a partir de hoje e as semanas seguintes passam a usar a nova configuração (critério 6.5).
- Mudanças pontuais (ex.: só nesta semana) continuam sendo feitas pela ação pronta "trocar dia" ou pelo Piu, sem alterar a configuração.
- Quando o usuário pede ao Piu uma troca de dia que parece definitiva (ex.: "inferiores agora vão ser na sexta"), o Piu aplica a mudança e pergunta se vale só para esta semana ou se deve atualizar os dias no Perfil. A configuração só muda com a confirmação do usuário.

## Consequências

- O critério 2.3 da concepção passa a citar os dias da semana.
- O modelo de dados guarda a configuração semanal (dia, modalidade e divisão) separada dos treinos do plano.
- Treinos passados não mudam com a nova configuração (critério 6.6).
