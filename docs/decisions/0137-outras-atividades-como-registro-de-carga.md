# ADR 0137: Outras atividades declaradas no setup, só como registro de carga

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Aqui, a frequência semanal tinha só corrida e musculação, com a divisão (ADRs 0097 e 0098). No histórico paralelo do repositório, o setup tinha uma lista de outras atividades e uma nota de esforço por treino (ADRs 0069 e 0070 de lá, não trazidos). Muita gente faz natação, bike ou funcional, e isso pesa na corrida, mas o MVP não deve crescer por causa disso.

## Decisão

- No setup e no "Editar perfil", além dos dias de corrida, o usuário declara as **outras atividades** que faz, com o **tipo** e **quantas vezes por semana** (ex.: natação 1x, bike 1x).
- A **musculação** vira um item dessa lista e continua sendo a única com detalhe: a divisão em quantidade (ex.: 1 de superiores e 1 de inferiores).
- As outras atividades são **só registro**: o app não prescreve nada (distância, duração, séries ou intensidade). No plano, aparecem como a musculação, com o tipo no dia escolhido pelo plano, e o Strava confirma se foram feitas.
- Toda atividade conta como **carga** que pode ou não afetar a corrida, com o peso de cada tipo definido no motor de regras (ADR 0027). Os ajustes que ela dispara seguem só pelas regras (ADR 0107).
- Não há nota de esforço por treino no MVP. Ela vai para as ideias de features.

## Consequências

- O plano posiciona as corridas mais puxadas considerando a carga das outras atividades, sem telas novas além da lista no setup e no Perfil.
- Cada tipo de atividade precisa de um peso de carga e de um ícone. Os ícones ficam para o card 5.
- Revisa os ADRs 0014, 0097 e 0098 e os critérios 2.3, 3.3 e 3.4.
