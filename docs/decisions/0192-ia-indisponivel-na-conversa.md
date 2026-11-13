# ADR 0192: IA indisponível vira um aviso neutro no lugar da resposta do Piu

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0031](0031-controle-de-custos-da-ia.md), [ADR 0150](0150-aviso-neutro-de-falha-do-strava.md), [ADR 0159](0159-baloes-de-mensagem.md), [ADR 0160](0160-feedback-salvo-na-propria-mensagem.md) e [ADR 0191](0191-limite-diario-no-rodape.md)

## Contexto

Quando a IA falha, a mensagem do usuário fica na conversa, e o Piu avisa que não conseguiu responder, com "Tentar de novo" (ADR 0031 e fluxo da jornada 6). O wireframe punha o aviso num balão do Piu. Faltava a forma em alta fidelidade.

Foram comparadas três opções: um aviso neutro no lugar da resposta, com "Tentar de novo" em botão secundário; só uma linha embaixo do balão do usuário, com o link "Tentar de novo", como no feedback que não foi enviado (ADR 0160); e um balão do Piu com o erro e o botão, como no wireframe.

## Decisão

- A mensagem do usuário fica na conversa, no balão normal.
- **No lugar da resposta**, à esquerda, entra o **AvisoNeutro** (ADR 0150): bloco em `neutro-suave`, sem contorno, com o ícone `cloud-slash`, o título **"O Piu não conseguiu responder"** e o texto "A sua mensagem ficou salva. Tente de novo daqui a pouco."
- **"Tentar de novo"** em botão secundário, com o ícone `arrows-clockwise`. Não é o botão principal, porque o principal do rodapé continua sendo o de enviar.
- Tocar em "Tentar de novo" reenvia a mesma mensagem. O aviso dá lugar à resposta do Piu, ou volta se falhar de novo.
- **Sem balão:** não é o Piu falando.
- **Sem vermelho:** falha não é risco (ADR 0142).
- O campo de mensagem continua ativo. Uma mensagem nova também tenta de novo, junto com a anterior.
- Se a falha for o teto mensal, o aviso não aparece na conversa: o rodapé mostra "O Piu está indisponível", como no limite diário (ADR 0191).
- Contrastes: os do AvisoNeutro, e o botão secundário sobre `neutro-suave` 6,1:1 (claro) e 6,9:1 (escuro).

## Consequências

- A falha fica clara no ponto da conversa onde a resposta deveria estar.
- O app tem um aviso só para falhas: o AvisoNeutro, no Hoje e no Piu.
- O AvisoNeutro do design system Live Run ganha a ação em botão secundário, para repetir algo que falhou (ADR 0143).
- Com esta decisão, a tela Piu em alta fidelidade fica concluída (ADRs 0184 a 0192).
