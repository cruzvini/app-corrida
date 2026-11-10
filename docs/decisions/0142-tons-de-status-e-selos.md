# ADR 0142: Tons de status, fundo com transparência e selos

- **Status:** Aceita
- **Data:** 2026-11-10
- **Revisa:** [ADR 0070](0070-icones-e-cores-de-status-na-faixa.md), [ADR 0073](0073-selos-de-status-na-faixa.md) e [ADR 0138](0138-identidade-visual.md) (cor do não feito)

## Contexto

O card 5 define os tons finais de feito, não feito e misto e dos selos ✓, ✕ e "!", com contraste nos dois temas (ADRs 0070, 0071, 0073 e 0140). Os wireframes usavam um verde e um vermelho provisórios. Na prévia, o vermelho do não feito pareceu agressivo demais para um treino que só não aconteceu. Ele também ficava quase igual ao vermelho do aviso de risco (`#b3261e`), que o design system reserva para dor, lesão e carga.

Os tons foram medidos contra as superfícies do design system Live Run (`superficie`, `fundo` e `primaria-suave`). Contorno, selo e ícones são elementos gráficos e precisam de 3:1. O texto precisa de 4.5:1 (ADR 0140).

## Decisão

- **Não feito passa a ser amarelo**, e não vermelho. O vermelho fica só para o aviso de risco.
- **Tons finais do contorno:**

  | Status | Claro | Escuro |
  |---|---|---|
  | Feito e misto | `#23854a` | `#4fc27a` |
  | Não feito | `#a16207` (mostarda) | `#e8b339` |

  No tema claro, o amarelo precisa ser mais fechado: um amarelo vivo como `#fbbf24` tem 1,7:1 sobre branco e some. O `#a16207` tem 4,9:1.
- **Fundo do dia na cor do status, com transparência:** o dia resolvido (feito, não feito ou misto) ganha o fundo na cor do contorno, com **12% de opacidade no tema claro e 18% no escuro**, sobre a superfície. Dia planejado, pendente ou de descanso fica com o fundo da superfície.
- **Selos:** círculo de 18 px no canto superior direito, preenchido com a cor do status e com um anel de 2 px na cor do fundo da tela, para separar do contorno. O símbolo (✓, ✕ ou !) é branco no tema claro e `#0f1213` no escuro. O selo "!" do dia misto usa o verde, e se distingue do feito pela forma.
- **Contrastes medidos** (piores casos):
  - Contorno sobre a superfície: 4,4:1 no claro e 7,3:1 no escuro.
  - Contorno sobre o próprio fundo com transparência: 3,9:1 no claro e 5,2:1 no escuro.
  - Número do dia sobre o fundo com transparência: acima de 9:1. Ícones em ardósia: acima de 5:1.
  - Símbolo do selo: 4,6:1 no claro e 8,4:1 no escuro.
- A regra vale também para as linhas da escolha do treino (ADR 0069) e para qualquer lugar que mostre o status de um treino.

## Consequências

- Os ADRs 0070, 0071 e 0073 continuam valendo, com "vermelho" lido como "amarelo" para o não feito.
- Verde e amarelo diferem mais em claridade que verde e vermelho, o que ajuda quem tem deficiência na visão de cores. Os selos continuam garantindo que o status não depende só da cor.
- O design system ganha os tokens `status-feito`, `status-nao-feito` e os fundos com transparência, e o token `risco` volta a ser o único vermelho (item 5 do card 5).
- **Conflito com o ADR 0074:** o dia atual se destacava por ser o único com fundo preenchido. Com os dias resolvidos também coloridos, o destaque do dia atual precisa ser revisto no item 2 do card 5.
- Os wireframes trocam o vermelho provisório pelo amarelo ao aplicar a identidade (item 6 do card 5).
