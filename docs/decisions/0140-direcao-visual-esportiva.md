# ADR 0140: Direção visual esportiva sobre a base da identidade

- **Status:** Aceita
- **Data:** 2026-11-10
- **Complementa:** [ADR 0138](0138-identidade-visual.md)

## Contexto

Antes de aplicar a identidade visual sobre os wireframes (card 5 do épico de design), o projeto vai usar skills de design para desenhar as telas, montar o design system e seguir boas práticas de UI. Para escolher essas skills, faltava definir a direção visual: a base do ADR 0138 continua valendo ou não, se a interface segue as convenções nativas de cada sistema ou um design system próprio, qual personalidade as telas passam, onde a alta fidelidade é produzida e qual é a meta de acessibilidade.

## Decisão

- **Base fechada:** o ADR 0138 continua como está. Azul-ardósia como única cor da marca, DM Sans, ícones Phosphor e ícone do app Ritmo. As skills trabalham sobre essa base.
- **Design system próprio, igual em iOS e Android:** componentes próprios, sem seguir o Apple HIG nem o Material 3 à risca.
- **Personalidade esportiva e energética.** A energia vem da **tipografia e do movimento**, sem cor nova:
  - DM Sans em pesos fortes, números grandes (pace, distância, tempo) e contraste alto.
  - Microinterações e animações com propósito, concentradas nos momentos raros (treino concluído, plano montado). Ações repetidas muitas vezes por dia, como trocar de aba, não animam.
- **Artifact primeiro, código depois:** a alta fidelidade e o design system são feitos como artifacts no Claude, como os wireframes (ADR 0063). Depois viram tokens e componentes em React Native (ADR 0133).
- **Acessibilidade básica no MVP:** contraste de texto de 4.5:1 nos dois temas e alvos de toque de pelo menos 44 pt. Leitor de tela (VoiceOver/TalkBack) e fonte dinâmica ficam para depois do MVP. Continua valendo que status e mudanças não dependem só de cor ou de riscado (ADRs 0073 e 0088).

## Consequências

- As skills escolhidas precisam cobrir tipografia, tokens e movimento, e não convenções nativas de plataforma (ver ADR 0141).
- Os tokens ganham uma categoria de movimento (durações e curvas), além de cor, tipografia e espaçamento.
- Com uma cor só na marca, a hierarquia depende muito da escala tipográfica. Ela precisa ser definida com cuidado no design system.
- O app vai precisar do `react-native-reanimated`, que roda no Expo Go.
- Leitor de tela e fonte dinâmica viram dívida registrada para depois do MVP.
