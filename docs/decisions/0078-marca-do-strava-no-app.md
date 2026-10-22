# ADR 0078: Marca do Strava no app

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

As [diretrizes de marca da API do Strava](https://developers.strava.com/guidelines/) exigem o botão oficial "Connect with Strava" no OAuth, o texto "View on Strava" nos links para os dados originais (em negrito, sublinhado ou laranja `#FC5200`) e o logo "Powered by Strava" separado da marca do app, nunca mais destacado que ela. O Live Run tem uma única cor de marca (ADR 0077), e o laranja do Strava é uma segunda cor forte.

## Decisão

- **Botão "Connect with Strava":** o oficial, laranja, só onde é obrigatório: no onboarding e na reconexão pelo Perfil.
- **"View on Strava":** no resumo da atividade (tela de detalhe), em ardósia com negrito e sublinhado.
- **Logo "Powered by Strava":** versão monocromática (preta no tema claro, branca no escuro), pequena, abaixo do resumo da atividade e junto ao status da conexão no Perfil.
- O app não usa o nome nem partes do logo do Strava na própria marca.

## Consequências

- O laranja aparece só no botão de conexão, e a paleta continua com uma cor.
- Os arquivos oficiais do botão e do logo entram como assets no épico do app, sem alteração.
- Se as diretrizes mudarem, este ADR é revisto.
