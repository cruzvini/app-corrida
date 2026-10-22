# ADR 0073: Cada consulta concilia as atividades dos últimos 7 dias

- **Status:** Aceita
- **Data:** 2026-10-22
- **Revisa:** [ADR 0006](0006-strava-polling-e-pull-to-refresh.md) (busca incremental)

## Contexto

A busca incremental do ADR 0006 só pega atividades novas pela data de início. Ficam de fora três casos reais: atividade editada no Strava, atividade apagada e relógio que sincroniza atrasado (a atividade chega depois, com data antiga). O último faria a rotina das 22h marcar como não feito um treino que foi feito.

## Decisão

Cada consulta lista as atividades dos **últimos 7 dias** e compara com o que está salvo:

- **Nova** (mesmo com data antiga): entra normalmente.
- **Editada:** atualiza os dados; se o tipo ou a carga mudarem, as regras reavaliam.
- **Apagada:** o treino ligado volta a pendente, ou a carga extra sai; as regras reavaliam.
- Mudanças que alteram o plano geram aviso em Notificações, como qualquer ajuste.
- **Marcações manuais do usuário prevalecem** sobre o Strava.

## Consequências

- Continua sendo 1 chamada por consulta.
- A conciliação é lógica com muitos casos e precisa de testes de integração com fixtures para cada um (ADR 0076).
- Fica alinhado ao ADR 0049, que já previa reprocessar dias pendentes.
