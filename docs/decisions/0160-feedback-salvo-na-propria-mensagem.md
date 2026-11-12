# ADR 0160: "Feedback salvo" na própria mensagem

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0055](0055-feedback-salvo-antes-da-analise.md) e [ADR 0159](0159-baloes-de-mensagem.md)

## Contexto

O ADR 0055 pede que o usuário veja "Feedback salvo" depois de enviar um feedback, antes de qualquer análise. Na tela de detalhe em alta fidelidade (ADR 0148), a confirmação era um aviso flutuante (pílula invertida acima do rodapé, que some sozinha), sem ADR. Na conferência, o aviso cobria o fim do feedback, e a skill `expo-design-system` (ADR 0141) pede que a confirmação de sucesso apareça na própria interface, e não num aviso por cima.

Foram comparados: o aviso flutuante e o estado na própria mensagem.

## Decisão

- A confirmação fica **na linha embaixo do balão do feedback** (BalaoDeMensagem), que mostra o estado do envio:
  - **Enviando:** "Enviando…".
  - **Salvo:** ícone Phosphor `check` e "Salvo · Hoje, 19:41 · Apagar".
  - **Falhou:** "Não foi enviado · Tentar de novo", com "Tentar de novo" em `primaria`. O texto do feedback continua no balão, sem se perder.
- A linha usa `legenda` (13 px) em `texto-secundario`; "Apagar" e "Tentar de novo" usam `primaria`, peso 500, com área de toque de 44 px.
- **Não há aviso flutuante** no detalhe do treino.
- Contrastes: estado em `texto-secundario` sobre `fundo` 6,4:1 (claro) e 8,1:1 (escuro); links em `primaria` 6,6:1 e 9,1:1.

## Consequências

- A confirmação fica visível enquanto o feedback está na tela, não cobre conteúdo e cumpre o ADR 0055.
- Falha de envio (rede) aparece no próprio feedback. Falha da análise continua silenciosa, como manda o ADR 0055.
- O componente BalaoDeMensagem do design system Live Run ganha a linha de estado (ADR 0143). Não há componente de aviso flutuante por enquanto.
