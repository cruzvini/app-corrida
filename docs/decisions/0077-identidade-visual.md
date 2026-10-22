# ADR 0077: Identidade visual do Live Run

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

O card 5 do épico #2 define paleta, tipografia e ícones, aplicados sobre os wireframes. O design system "Live Run" (artefato privado no Claude) já guardava tokens de cor, a escala de tipos e uma primeira direção de ícones. As decisões do épico #6 trouxeram novos estados de treino (atividade extra, falha de sincronização, atividade apagada), a nota de esforço (ADR 0070) e a lista de outras atividades (ADR 0069), que precisavam de tratamento visual.

## Decisão

- **Cor:** só o azul-ardósia como cor da marca, `#3d5a80` no claro e `#9fb6d6` no escuro. Não há cor de apoio. Tema claro por padrão e escuro pelo sistema. Tokens no design system.
- **Status do treino:**
  - Feito em ardósia; não feito em cinza; vermelho só em aviso de risco.
  - **Atividade fora do plano:** mesmo estilo de feito, com o ícone do tipo e a etiqueta **"extra"**.
  - **Pendente por falha de sincronização** (ADR 0049): estilo de pendente normal, com ícone de sincronização e o texto "aguardando o Strava" no detalhe.
  - **Atividade apagada no Strava** (ADR 0073): sem estado próprio; o treino assume o estado dado pelas regras, e a explicação vai para Notificações.
- **Nota de esforço** (ADR 0070): aparece junto do "Como foi?" no card do Hoje quando o treino vira feito; no dia seguinte, fica só no detalhe (mesmo padrão do ADR 0048).
- **Tipografia:** DM Sans, com algarismos tabulares (`tabular-nums`) em pace, distância e tempo. Escala no design system.
- **Ícones da interface:** Phosphor Icons (`phosphor-react-native`, licença MIT). Peso regular (contorno) no estado normal e preenchido no selecionado ou feito. Abas: calendário, balão de conversa, sino e pessoa; o Hoje é um círculo com o número do dia. Substitui o Ionicons previsto no design system, que não tem ícones de corrida nem de natação.
- **Ícone do app:** **Ritmo**, uma linha de pulso branca sobre ardósia, com traço grosso e um único pico principal, legível em 40 px. Variantes clara, escura (`#9fb6d6` sobre fundo escuro) e tingida (monocromática), como pede o iOS.

## Consequências

- O design system e o canvas "Live Run — Ícone do app" são a referência visual para o desenvolvimento.
- Ícones por tipo de atividade (corrida, musculação, natação, bike, funcional/HIIT, outra) vêm do Phosphor.
- O app ganha a dependência `phosphor-react-native`, que usa `react-native-svg`.
- A marca do Strava segue o [ADR 0078](0078-marca-do-strava-no-app.md).
