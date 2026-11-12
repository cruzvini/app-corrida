# ADR 0159: Balões de mensagem do feedback e do Piu

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0056](0056-feedback-pode-ser-apagado-nao-editado.md), [ADR 0076](0076-acoes-e-feedback-no-rodape-do-detalhe.md) e [ADR 0077](0077-apagar-feedback-pede-confirmacao.md)

## Contexto

O ADR 0076 mostra os feedbacks enviados no fim do detalhe do treino, como mensagens de uma conversa, e a conversa com o Piu (ADR 0035) usa o mesmo formato. Na tela de detalhe em alta fidelidade (ADR 0148), a forma dos balões era uma proposta nova. O README do design system já reservava `primaria-suave` para a mensagem do Piu.

## Decisão

- **Feedback do usuário:** balão alinhado à direita, em `neutro-suave`, com texto em `texto`, 15 px.
- **Mensagem do Piu:** balão alinhado à esquerda, em `primaria-suave`, com texto em `texto`, 15 px.
- **Forma:** cantos de 16 px, com o canto de baixo do lado de quem fala em 4 px. Largura máxima de 82% da área, padding de 10 × 14 px e 8 px entre balões.
- **Embaixo do feedback:** a hora em `legenda` e `texto-secundario` e o link "Apagar" em `primaria`, peso 500, com área de toque de 44 px. "Apagar" abre a confirmação do ADR 0077. O feedback não tem "Editar" (ADR 0056).
- **No detalhe do treino:** os feedbacks ficam sob o rótulo "Feedback", do mais antigo para o mais novo, sem card em volta, logo acima do rodapé fixo.
- Quem fala é indicado pelo lado e pelo canto, e não só pela cor.
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Texto do feedback (`texto` sobre `neutro-suave`) | 15,2:1 | 12,4:1 |
  | Texto do Piu (`texto` sobre `primaria-suave`) | 14,7:1 | 12,0:1 |
  | Hora (`texto-secundario` sobre `fundo`) | 6,4:1 | 8,1:1 |
  | "Apagar" (`primaria` sobre `fundo`) | 6,6:1 | 9,1:1 |

## Consequências

- O feedback no detalhe e a conversa com o Piu têm o mesmo desenho, o que reforça que o feedback também é uma conversa.
- O design system Live Run ganha o componente BalaoDeMensagem (ADR 0143), que será usado também na tela do Piu.
