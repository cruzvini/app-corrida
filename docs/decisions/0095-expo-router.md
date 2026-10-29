# ADR 0095: Expo Router para a navegação do app

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0034](0034-navegacao-por-abas-com-hoje-no-centro.md)

## Contexto

O ADR 0034 definiu a barra com 5 abas e o Hoje no centro, mas não escolheu como montar a navegação. As opções eram o Expo Router, que tem rotas por arquivo e roda sobre o React Navigation, ou o React Navigation direto, com os navegadores declarados em código.

## Decisão

Usar o **Expo Router**. As abas ficam num grupo de rotas (`app/(tabs)/`), com um arquivo por aba. O botão central do Hoje é um componente customizado na barra de abas.

## Consequências

- Segue o padrão do `create-expo-app`, que é o caminho mais documentado.
- Os deep links são gerados a partir das rotas, o que facilita o retorno do OAuth do Strava.
- A estrutura de pastas do app passa a definir as rotas. Mover um arquivo muda uma URL.
- A customização da barra continua sendo feita com a API do React Navigation, que roda por baixo.
