# ADR 0206: Explicação do Strava no onboarding com as garantias em lista, num grupo sem contorno

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0019](0019-conexao-strava-obrigatoria.md), [ADR 0106](0106-dados-do-strava-nunca-vao-para-a-ia.md), [ADR 0108](0108-historico-de-12-semanas-com-resumo.md), [ADR 0110](0110-permissao-activity-read-all.md), [ADR 0115](0115-marca-do-strava-no-app.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

Antes de abrir a autorização do Strava, o app explica por que a conexão é necessária e o que ele lê (critério 1.3, ADRs 0108 e 0110). O wireframe tinha o texto do porquê e uma nota única com as garantias. Foram comparadas três opções: as garantias em lista num grupo sem contorno; a nota única do wireframe; e a lista solta, sem grupo. O usuário escolheu a primeira e pediu também uma forma de não conectar o Strava agora, que contraria o ADR 0019 e fica para uma decisão à parte.

## Decisão

- Título "Conecte o Strava" em 24 px, negrito, e o **porquê** em `texto-secundario`: "O Live Run usa as suas atividades do Strava, inclusive as privadas, para marcar os treinos como feitos e ajustar o plano."
- Abaixo, as **garantias em lista**, num grupo sem contorno (ADR 0165), uma por linha, cada uma com o ícone `shield-check` de 20 px em `primaria`: "Só o resumo das atividades das últimas 12 semanas, sem mapa nem GPS.", "Nada é publicado no Strava." e "Nada do Strava vai para a IA." (ADR 0106).
- O **botão oficial "Connect with Strava"** (ADR 0115) fica no fim da tela, na largura toda, como o botão da etapa (ADR 0203).
- Recusar ou cancelar a autorização volta para esta tela, com o motivo num AvisoNeutro acima do botão.
- Contrastes: texto sobre `fundo` 6,4:1 (claro) e 8,1:1 (escuro); garantias sobre `superficie` 17,5:1 e 14,2:1; ícone 7,1:1 e 7,9:1.

## Consequências

- As garantias que pesam na hora de autorizar ficam legíveis de relance.
- O design system Live Run ganha o componente ExplicacaoDoStrava (ADR 0143).
- A opção de não conectar o Strava agora, pedida junto com esta escolha, é decidida à parte, porque revisa o ADR 0019.
