# ADR 0076: Ações, feedback e Piu ficam numa área fixa no rodapé do detalhe do treino

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O detalhe do treino (ADR 0036) reúne o treino, o resultado, as ações, o feedback e o acesso ao Piu. No rascunho do wireframe, as ações eram uma seção no meio da tela, separadas do campo de feedback e do botão do Piu. Foram avaliados: seção no meio da tela ou área fixa no rodapé.

## Decisão

As ações do treino, o campo de feedback e o acesso ao Piu ficam juntos numa **área fixa no rodapé** da tela de detalhe, acima da barra de abas, sempre visível.

- Em cima, as ações do status atual, em botões compactos numa linha.
- Embaixo, o campo de feedback com "Enviar", no formato de uma caixa de mensagem.
- Junto ao campo, o acesso "Falar com o Piu sobre este treino".
- O conteúdo do treino (cabeçalho, blocos, resultado) rola acima, e os feedbacks enviados aparecem no fim do conteúdo, logo acima do campo, como mensagens de uma conversa.

## Consequências

- Agir sobre o treino, dar feedback e falar com o Piu ficam no mesmo lugar e com o mesmo jeito de conversa.
- A área fixa ocupa espaço da tela junto com a barra de abas. Por isso cada status mostra poucas ações (no máximo três).
- Com o teclado aberto, o campo de feedback sobe com ele, e as ações podem ficar escondidas enquanto o usuário escreve.
