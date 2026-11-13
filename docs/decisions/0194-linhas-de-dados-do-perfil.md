# ADR 0194: Linhas de dados do Perfil com o rótulo em cima e o valor embaixo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0094](0094-perfil-so-com-dados-pessoais.md), [ADR 0165](0165-secoes-em-grupo-sem-contorno.md) e [ADR 0166](0166-linhas-de-apoio-em-frases.md)

## Contexto

O Perfil mostra dados pessoais que só são lidos ali: nível, idade e peso, frequência semanal, lesões ou limitações, e o estado do Strava. Para mudar, o caminho é o "Editar perfil" (ADR 0095). Alguns valores são longos, como a frequência ("4 corridas, 2 musculações e 1 natação"). Faltava a forma da linha em alta fidelidade.

Foram comparadas três opções: o rótulo em legenda em cima e o valor embaixo; o rótulo à esquerda e o valor à direita, como nos Ajustes do iOS; e o valor em destaque em cima, com o rótulo embaixo, como as linhas de semana do Plano.

## Decisão

- Cada seção é um **grupo sem contorno** (ADR 0165): título fora, conteúdo em `superficie`, raio de 12 px, 16 px de margem interna nas laterais.
- **Linha de dado:** o **rótulo** em legenda de 13 px, em `texto-secundario`, em cima, e o **valor** em 15 px, peso 400, em `texto`, embaixo. Altura mínima de 56 px, com 9 px em cima e embaixo.
- Linhas separadas por um fio de 1 px em `borda`.
- **Sem seta:** a linha não abre nada. Para mudar, "Editar perfil".
- **Valores em frase**, sem ponto médio (ADR 0166): "34 anos e 72 kg", "4 corridas, 2 musculações e 1 natação".
- O valor quebra em mais de uma linha quando precisa, sem cortar.
- Uma ação da linha, como "Atualizar" ou a marca do Strava, fica à direita, centralizada na altura da linha.
- Contrastes sobre `superficie`: rótulo 6,8:1 (claro) e 7,1:1 (escuro); valor 17,5:1 e 14,2:1.

## Consequências

- Valores longos cabem inteiros, sem truncar.
- O rótulo vem antes do valor, na ordem de leitura e para leitores de tela.
- O design system Live Run ganha o componente LinhaDeDado (ADR 0143), que serve também ao Strava desconectado.
