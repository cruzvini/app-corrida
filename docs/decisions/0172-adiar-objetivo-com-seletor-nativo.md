# ADR 0172: Adiar objetivo com o seletor de data do sistema

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0060](0060-acao-adiar-a-prova.md), [ADR 0083](0083-detalhe-do-plano.md), [ADR 0145](0145-antes-e-depois-com-riscado-e-seta.md) e [ADR 0152](0152-folha-da-escolha-do-treino.md)

## Contexto

O atalho "Adiar objetivo" do detalhe do plano é uma ação pronta, só com as regras, aplicada na hora e que pode ser desfeita (ADRs 0060, 0083 e 0085). No wireframe, ele abria uma folha com um calendário, o antes e o depois e o botão de confirmar. A forma da folha era uma proposta nova na tela de alta fidelidade. Foram comparadas três formas de escolher a data: calendário próprio, seletor de data nativo do sistema e semanas sugeridas (de 1 a 4) com o seletor nativo para outra data. A skill `expo-design-system` (ADR 0141) prefere controles nativos para escolher valores.

## Decisão

- **Folha** igual à da escolha do treino (ADR 0152): véu, `superficie`, cantos de 24 px em cima, alça e título "Adiar objetivo" em 18 px negrito.
- **Dica** em `legenda` e `texto-secundario`: "Escolha uma data depois de 3 jan. Para antecipar ou trocar o objetivo, fale com o Piu."
- **Seletor de data nativo** do sistema, inline na folha (calendário do iOS; seletor de data do Material no Android), com a cor de destaque em `primaria`. Datas até o objetivo atual ficam indisponíveis, no cinza do sistema. A data escolhida aparece no círculo cheio do seletor.
- **Antes e depois** (AntesDepois, ADR 0145) num bloco em `fundo`, com o plano ("10 semanas" → "12 semanas, até 17 jan") e as fases que mudam, e a nota informativa "As semanas já detalhadas não mudam." Prazo arriscado mostra o aviso de risco, sem bloquear (ADR 0017).
- **Botão principal** de largura total: "Adiar para 17 jan", que muda com a data escolhida. Ao confirmar, aplica na hora e pode ser desfeito (ADR 0047).
- Contrastes: data escolhida 7,1:1 (claro) e 9,1:1 (escuro); antes riscado 6,4:1 e 8,1:1 sobre `fundo`; botão 7,1:1 e 9,1:1. As datas indisponíveis seguem o sistema.

## Consequências

- Acessibilidade, leitura de tela e formato de data vêm do sistema, sem um calendário próprio para manter.
- A aparência do seletor muda um pouco entre iOS e Android; a folha em volta é a mesma.
- O design system Live Run ganha o componente SeletorDeData, que descreve o uso do seletor nativo (ADR 0143).
