# ADR 0212: Montando o plano com o ícone Ritmo, o objetivo numa frase e a barra de progresso; falha no AvisoNeutro

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0102](0102-plano-ativo-direto-apos-gerar.md), [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md), [ADR 0192](0192-ia-indisponivel-na-conversa.md) e [ADR 0202](0202-boas-vindas-com-a-marca-no-alto.md)

## Contexto

Depois de "Gerar meu plano", o app monta o plano e abre o Hoje, sem revisão nem aceite (ADR 0102). Se não der certo, avisa e permite tentar de novo sem perder as respostas (critério 3.9). O usuário aceitou a proposta desenhada.

## Decisão

- Tela **centralizada**, sem voltar nem contagem: o ícone **Ritmo** de 64 px (ADR 0202), "Montando seu plano" em 24 px, negrito, o objetivo numa frase em `texto-secundario` ("10 km em 29 nov, com 4 corridas e 2 musculações por semana."), a **barra de progresso** de 4 px e 200 px de largura, como a do setup (ADR 0207), e a linha "Em seguida, você vai para o treino de hoje." em legenda.
- Ao terminar, o app abre o Hoje, com a barra de abas.
- **Falha:** a tela troca o bloco pelo **AvisoNeutro** (ADRs 0150 e 0192), com `cloud-slash`, "Não consegui montar seu plano agora", "Suas respostas estão salvas. Tente de novo em alguns minutos." e "Tentar de novo" em botão secundário. No fim da tela, o link "Voltar ao resumo". Sem vermelho.
- Contrastes: título sobre `fundo` 16,4:1 (claro) e 16,3:1 (escuro); frase 6,4:1 e 8,1:1; os do AvisoNeutro na falha.

## Consequências

- É a única tela centralizada do onboarding, porque é espera sem ação.
- O design system Live Run ganha o componente MontandoOPlano, e o AvisoNeutro, o caso da falha ao montar (ADR 0143).
- Com esta decisão, as dez propostas desenhadas da tela Onboarding e setup estão decididas.
