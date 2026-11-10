# ADR 0138: Identidade visual do Live Run

- **Status:** Aceita
- **Data:** 2026-10-22 (trazida para o histórico oficial em 2026-11-10)

## Contexto

O card 5 do épico de design define paleta, tipografia e ícones, aplicados sobre os wireframes. Num histórico paralelo do repositório, a identidade visual já tinha sido definida (ADR 0077 de lá), com o design system "Live Run" e o canvas do ícone do app como referência. Na reconciliação de 2026-11-10, ela foi aproveitada como base, com dois ajustes para combinar com as decisões desta sessão: as cores de status da faixa de 7 dias (ADRs 0070 a 0074) e a ausência de nota de esforço no MVP (ADR 0137).

## Decisão

- **Cor da marca:** só o azul-ardósia, `#3d5a80` no tema claro e `#9fb6d6` no escuro. Não há cor de apoio da marca. Tema claro por padrão e escuro pelo sistema.
- **Cores de status:** seguem os ADRs 0070 a 0074 desta sessão: contorno verde com selo ✓ para feito, vermelho com selo ✕ para não feito, verde com selo "!" para o dia misto e contorno padrão para planejado ou pendente. São cores funcionais, separadas da cor da marca. Os tons finais, com contraste nos dois temas, são definidos no card 5.
- **Outros estados do treino:**
  - **Atividade fora do plano:** mesmo estilo de feito, com o ícone do tipo e a etiqueta **"extra"**.
  - **Pendente por falha de sincronização** (ADR 0049): estilo de pendente, com ícone de sincronização e o texto "aguardando o Strava" no detalhe.
  - **Atividade apagada no Strava** (ADR 0111): sem estado próprio; o treino assume o estado dado pelas regras, e a explicação vai para Notificações.
- **Tipografia:** DM Sans, com algarismos tabulares em pace, distância e tempo.
- **Ícones da interface:** Phosphor Icons (`phosphor-react-native`, licença MIT). Peso regular no estado normal e preenchido no selecionado. Abas: calendário (Plano), balão de conversa (Piu), sino (Notificações) e pessoa (Perfil); o Hoje é um círculo com o número do dia.
- **Ícones por tipo de atividade:** corrida, musculação, natação, bike, funcional e outra, também do Phosphor (ADR 0137).
- **Ícone do app:** **Ritmo**, uma linha de pulso branca sobre ardósia, com traço grosso e um único pico principal, legível em 40 px, com variantes clara, escura e tingida, como pede o iOS.

## Consequências

- Referências visuais: o design system [Live Run](https://claude.ai/artifact/ScbFpKZfPXDDM42Y7Aawmy) e o canvas [Live Run — Ícone do app](https://claude.ai/artifact/Hru2NxT6jGPcM2iuYnihdu) (artefatos privados no Claude). O design system ainda usa as cores de status antigas (feito em ardósia, não feito em cinza) e precisa ser atualizado no card 5.
- O app ganha a dependência `phosphor-react-native`, que usa `react-native-svg`.
- A marca do Strava segue o ADR 0115, e os estilos usam o módulo de tokens do ADR 0133.
- Revisa o ADR 0034: o ícone da aba Piu é um balão de conversa, e não um bot.
