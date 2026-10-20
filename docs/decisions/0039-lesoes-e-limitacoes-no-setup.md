# ADR 0039: Lesões e limitações como campo opcional no setup

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O setup pede nível, idade, peso, frequência e meta (jornada 2). Ao definir o Perfil (ADR 0038), avaliamos outros dados que afetam o treino: lesões ou limitações, sono e rotina, zonas de frequência cardíaca, altura e sexo. O público inclui iniciantes e não praticantes, para quem uma limitação existente muda o plano desde o início.

## Decisão

- O setup ganha um campo **opcional de texto livre "Lesões ou limitações atuais"** (ex.: "joelho sensível em descidas"), também editável em Perfil > Meu treino.
- O texto é contexto para a IA na geração e nos ajustes do plano, como o feedback (ADR 0028).
- Se o texto mencionar dor ou lesão, a resposta recomenda procurar orientação profissional (mesma regra do critério 5.6).
- Sono e rotina, zonas de FC, altura e sexo ficam fora do MVP e vão para as ideias de features.

## Consequências

- O critério 2.2 da concepção passa a incluir o campo opcional.
- O texto é enviado ao provedor de IA (ADR 0029) e é um dado de saúde: deve ser considerado na reavaliação do ADR 0029 antes de abrir para outras pessoas.
- O campo é texto livre, sem validação estruturada, então as regras do motor (`packages/rules-engine`) não o interpretam no MVP.
