# ADR 0181: Ações do ajuste com "Desfazer" no card e o link do Piu fora

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0047](0047-so-o-ajuste-mais-recente-pode-ser-desfeito.md), [ADR 0050](0050-notificacoes-assinadas-pelo-piu.md), [ADR 0158](0158-rodape-fixo-do-detalhe.md) e [ADR 0162](0162-proposta-do-piu-na-conversa.md)

## Contexto

A mensagem de um ajuste mostra o antes e o depois e duas ações: desfazer, só no ajuste mais recente (ADR 0047), e conversar com o Piu (ADR 0050). No wireframe eram dois botões de texto lado a lado. Em alta fidelidade, a proposta do Piu já usa botões de ícone com rótulo (ADR 0157), e o detalhe do treino leva ao Piu por um link (ADR 0158).

Foram comparadas três opções: "Desfazer" em botão dentro do card e o Piu num link fora; dois botões de ícone com rótulo, como na proposta; e dois botões de texto lado a lado, como no wireframe.

## Decisão

- O antes e o depois do ajuste ficam num **card com contorno**, o mesmo da proposta (CardDaProposta), com o título **"Antes e depois"** e as linhas do AntesDepois.
- **Ajuste mais recente:** no fim do card, **"Desfazer" em botão secundário** (pílula de 44 px, contorno em `primaria`), com o ícone `arrow-u-up-left`. É a única ação do card.
- **Ajuste antigo:** no lugar do botão, uma **nota neutra** com o ícone `info`, em `legenda` e `texto-secundario`: "Não pode mais ser desfeito. Só o ajuste mais recente pode." Sem vermelho, porque não é risco (ADR 0142).
- **Fora do card**, o link **"Falar com o Piu sobre este ajuste"**, em `primaria`, com o ícone `chat-circle` e a seta, igual ao "Falar com o Piu sobre este treino" do detalhe (ADR 0158). Aparece no ajuste recente e no antigo.
- O texto do link substitui "Conversar com o Piu sobre isso" (ADR 0050) e "Pedir ao Piu para mudar" (ADR 0047). O comportamento não muda.
- Na proposta pendente não há esse link: "Editar" já abre o Piu (ADR 0053).

## Consequências

- O caminho para o Piu tem a mesma forma no detalhe do treino e na mensagem do ajuste.
- "Desfazer" não disputa atenção com outra ação dentro do card.
- O ícone `arrow-u-up-left` entra no conjunto de ícones do app.
- O que acontece depois de tocar em "Desfazer" (confirmação e estado da mensagem) fica para uma decisão própria.
- O CardDaProposta do design system Live Run ganha a variante do ajuste (ADR 0143).
