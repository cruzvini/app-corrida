# ADR 0169: Dias da semana num grupo, com o dia em miniatura

- **Status:** Aceita
- **Data:** 2026-11-12
- **Revisa:** [ADR 0081](0081-tela-inicial-do-plano.md) ("um card por dia")
- **Complementa:** [ADR 0142](0142-tons-de-status-e-selos.md), [ADR 0144](0144-dia-atual-com-barra-embaixo.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

O ADR 0081 pôs a semana atual (e as semanas anteriores, quando abertas) com "um card por dia, no mesmo contorno e selos da faixa do Hoje". Na alta fidelidade, isso deu sete caixas com contorno empilhadas, o padrão que a skill `expo-design-system` chama de "Everything's a Card" e que o ADR 0165 reservou para objetos e ações. Foram comparadas três opções: uma linha com contorno por dia (o ADR 0081 ao pé da letra), um grupo com o dia em miniatura do DiaDaFaixa e um grupo com um ícone de status à direita.

## Decisão

- **Os dias da semana ficam num grupo sem contorno** (ADR 0165): `superficie`, `raio-campo`, um dia por linha, com divisórias de 1 px em `borda` e linhas de pelo menos 66 px.
- **À esquerda, o dia em miniatura** do DiaDaFaixa, de 46 × 48 px: dia da semana em 11 px e número em 16 px negrito, com o contorno de 2 px, o fundo e o selo do status, as mesmas regras da faixa do Hoje (ADR 0142). Descanso com contorno tracejado. O selo ganha um anel de 2 px em `superficie`.
- **Dia atual:** a barra de 20 × 4 px em `primaria` embaixo da miniatura (ADR 0144).
- **Depois:** os ícones da atividade em `primaria`, o treino com peso 500 e, embaixo, o resumo em `legenda` e `texto-secundario` ("8,7 de 8,6 km", "Corrida feita, superiores não feito"). A seta `caret-right` leva ao detalhe do treino. O descanso não tem seta.
- Contrastes: contorno `status-feito` 4,4:1 (claro) e 7,3:1 (escuro); selo, no pior caso, 4,6:1 e 8,4:1; resumo 6,8:1 e 7,1:1.

## Consequências

- O status da semana se lê como na faixa do Hoje, e a tela perde as sete caixas com contorno.
- Revisa o "card por dia" do ADR 0081; o resto da ordem da tela continua igual.
- O design system Live Run ganha o componente LinhaDoDia e cita a miniatura no DiaDaFaixa (ADR 0143).
