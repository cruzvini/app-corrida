# ADR 0187: Proposta aceita na conversa fica no card, com chip, nota e "Desfazer"

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0047](0047-so-o-ajuste-mais-recente-pode-ser-desfeito.md), [ADR 0160](0160-feedback-salvo-na-propria-mensagem.md), [ADR 0162](0162-proposta-do-piu-na-conversa.md), [ADR 0180](0180-chips-de-status-da-proposta.md), [ADR 0181](0181-acoes-do-ajuste.md) e [ADR 0182](0182-desfazer-pede-confirmacao.md)

## Contexto

Aceitar uma proposta na conversa aplica a mudança na hora, e o ajuste pode ser desfeito enquanto for o mais recente (ADR 0047). O wireframe mostrava um aviso flutuante "Plano atualizado. Desfazer" na base da tela. Em Notificações, o ajuste que pode ser desfeito já tem forma: card com contorno e "Desfazer" em botão secundário (ADR 0181), com confirmação (ADR 0182). O chip "Aceita" já existia, neutro (ADR 0180).

Foram comparadas três opções: o card mantém o contorno, com o chip "Aceita", uma nota e o "Desfazer"; o card com o chip e a nota, e o "Desfazer" só na mensagem em Notificações; e o aviso flutuante do wireframe.

## Decisão

Depois de "Aceitar", enquanto o ajuste for o mais recente:

- O card **mantém o contorno**, porque ainda pode ser desfeito.
- Os botões Aceitar, Editar e Descartar **saem**.
- O **chip neutro "Aceita"**, com o ícone `check`, fica à direita do título "Proposta", na mesma linha (ADR 0180).
- No fim do card, uma **nota** com o ícone `check`, em `legenda` e `texto-secundario`, diz o que mudou e quando: "Plano atualizado hoje às 12:34." Se a proposta mudou também o Perfil, como a frequência (ADR 0098): "Plano e Perfil atualizados hoje às 12:40."
- Abaixo da nota, **"Desfazer" em botão secundário**, com o ícone `arrow-u-up-left`, igual ao do ajuste em Notificações (ADR 0181). Tocar abre a confirmação "Desfazer este ajuste?" (ADR 0182).
- O aviso de risco, se houver, continua no card, antes da nota.
- **Sem aviso flutuante.** A confirmação fica no próprio card, como no feedback salvo (ADR 0160).
- Desfazer pela conversa ou pela mensagem em Notificações tem o mesmo efeito: a proposta é a mesma nos dois lugares (ADR 0062).
- Quando outro ajuste ficar mais recente, o card perde o "Desfazer" e segue a regra das propostas com status final.

## Consequências

- O card da proposta aceita e o do ajuste em Notificações têm a mesma forma, e o usuário desfaz onde acabou de aceitar.
- O app não tem aviso flutuante em nenhuma tela.
- Depois de desfeita na conversa, a proposta fica com o chip "Desfeita" e vira registro, como o ajuste desfeito (ADR 0182).
- O CardDaProposta do design system Live Run ganha a variante da proposta aceita (ADR 0143).
