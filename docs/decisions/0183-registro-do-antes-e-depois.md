# ADR 0183: Antes e depois que não vale mais vira registro, em grupo sem contorno

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0052](0052-proposta-desatualizada-e-refeita.md), [ADR 0145](0145-antes-e-depois-com-riscado-e-seta.md), [ADR 0165](0165-secoes-em-grupo-sem-contorno.md) e [ADR 0182](0182-desfazer-pede-confirmacao.md)

## Contexto

Uma proposta fica desatualizada quando um dia afetado muda (ADR 0052): perde os botões, sai do topo e leva à proposta nova. O wireframe mantinha o antes e o depois "quando foi feita", num bloco esmaecido. O ajuste desfeito (ADR 0182) tem a mesma situação: o antes e o depois já não descrevem o plano.

Foram comparadas três opções: o antes e o depois num grupo sem contorno, em tom secundário; o card com contorno mantido, em tom secundário; e tirar o antes e o depois, deixando só a mensagem e o link.

## Decisão

- O antes e o depois que não vale mais vira **registro**: sai do card com contorno e vai para um **grupo sem contorno** (ADR 0165), em `superficie`, com raio de 12 px.
- O título da seção diz que é passado: **"Antes e depois, quando foi feita"** na proposta e **"Antes e depois, quando foi feito"** no ajuste.
- As linhas usam o AntesDepois (ADR 0145) com **tudo em `texto-secundario`**: o dia, o antes riscado, a seta e o depois, este com peso 400. A ordem, o riscado e a seta continuam mostrando o que era antes e o que era depois.
- **Sem botões** no grupo.
- **Proposta desatualizada:** logo abaixo do texto do Piu, o link **"Ver a proposta nova"**, em `primaria`, com peso 500, a seta `caret-right` e alvo de 44 px. Ele abre a mensagem da proposta nova. Se a nova análise concluir que não precisa mudar nada, não há link, e o texto explica (ADR 0052).
- **Ajuste desfeito:** no fim do grupo, a nota com `info` que diz quando foi desfeito (ADR 0182).
- Contrastes: textos do registro sobre `superficie` 6,8:1 (claro) e 7,1:1 (escuro); link sobre `fundo` 6,6:1 e 9,1:1.

## Consequências

- O card com contorno fica só para o que ainda pode ser decidido ou desfeito. Sem contorno, o bloco é leitura.
- O usuário não perde o registro do que tinha sido proposto ou ajustado.
- O mesmo padrão serve para os outros status finais da proposta ("Aceita" e "Descartada") na tela do Piu, onde isso será confirmado.
- O AntesDepois do design system Live Run ganha a variante de registro (ADR 0143).
- Com esta decisão, a tela Notificações em alta fidelidade fica concluída (ADRs 0177 a 0183).
