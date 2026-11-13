# ADR 0203: Botão da etapa flutuante no fim da tela, sem fundo de rodapé, no onboarding

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0037](0037-onboarding-e-setup-em-fluxo-linear.md), [ADR 0158](0158-rodape-fixo-do-detalhe.md) e [ADR 0197](0197-editar-perfil.md)

## Contexto

O onboarding é um fluxo linear em tela cheia, sem a barra de abas (ADR 0037), com uma ação principal por tela ("Receber link de acesso", "Continuar", "Gerar meu plano"). Nas abas, a ação principal de formulário fica no rodapé fixo, em `superficie` com contorno em cima (ADRs 0158 e 0197). Faltava decidir a forma no onboarding.

Foram comparadas três opções: o rodapé fixo do detalhe, encostado no fim da tela; o botão flutuante no fim da tela, sem fundo de rodapé; e o botão no fim do conteúdo, que rola com a tela. A recomendação era o rodapé fixo, pela consistência com as abas. O usuário escolheu o botão flutuante.

## Decisão

- No onboarding, o **botão da etapa flutua** no fim da tela, sem a área em `superficie` e sem o contorno em cima: botão principal em pílula de 44 px, na largura toda, `primaria` com `sobre-primaria`, a 16 px das laterais e a 34 px do fim da tela (área segura).
- A **nota opcional** fica logo abaixo do botão, em legenda de 13 px, em `texto-secundario`, sobre o `fundo` ("Sem senha: você entra pelo link que chega no e-mail.").
- O conteúdo tem um respiro embaixo do tamanho do botão e da nota, para o último item rolar até acima do botão. Ao rolar, o conteúdo passa por trás do botão.
- Vale também para as outras ações do rodapé do onboarding: "Reenviar link" (secundário), o botão oficial "Connect with Strava" e os links "Trocar e-mail" e "Voltar ao resumo".
- Com o teclado aberto, o botão sobe junto.
- **Nas abas não muda:** o detalhe, o Editar perfil e a conversa com o Piu continuam com o rodapé fixo em `superficie` (ADRs 0158 e 0197).
- Contrastes: botão 7,1:1 (claro) e 9,1:1 (escuro); nota sobre `fundo` 6,4:1 e 8,1:1.

## Consequências

- As telas do onboarding ficam mais leves, sem uma faixa branca no fim.
- Em telas longas, como a frequência, o botão cobre o conteúdo enquanto ele rola; o respiro embaixo garante que nada fica escondido no fim da rolagem.
- O RodapeDoTreino do design system Live Run ganha a variante flutuante do onboarding (ADR 0143).
