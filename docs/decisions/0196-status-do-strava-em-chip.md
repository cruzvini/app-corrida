# ADR 0196: Status do Strava no Perfil em chip neutro, com a marca abaixo do grupo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0115](0115-marca-do-strava-no-app.md), [ADR 0180](0180-chips-de-status-da-proposta.md) e [ADR 0194](0194-linhas-de-dados-do-perfil.md)

## Contexto

A seção Strava do Perfil mostra o status da conexão e a última sincronização, com a atualização manual (ADR 0094), e leva o logo "Powered by Strava" junto ao status (ADR 0115). Faltava a forma do status em alta fidelidade.

Foram comparadas três opções: duas linhas de dado, com "Conectado" em texto e a marca na mesma linha; o status num chip, com a marca logo abaixo do grupo; e uma linha só, "Conectado" e "Sincronizado há 12 min", com a marca abaixo.

## Decisão

- **Linha "Conexão":** o rótulo "Conexão" em 15 px, em `texto`, à esquerda, e o status num **ChipDeStatus neutro** à direita: **"Conectado"** ou **"Desconectado"**, com contorno em `borda-forte`, sem fundo, texto em `texto-secundario`.
- **Sem cor no chip:** a conexão não é treino feito (verde) nem risco (vermelho), e o amarelo é do não feito (ADR 0142). O status é lido pela palavra; o Strava desconectado já tem o AvisoNeutro no topo.
- **Linha "Última sincronização"** continua como LinhaDeDado (ADR 0194), com "Atualizar" em botão de ícone de 44 px, `arrows-clockwise` em `primaria`, à direita.
- **"Powered by Strava"** monocromático (preto no claro, branco no escuro), logo **abaixo do grupo**, alinhado à esquerda, a 2 px do grupo (ADR 0115).
- Contrastes sobre `superficie`: texto do chip 6,8:1 (claro) e 7,1:1 (escuro); contorno 2,8:1 e 3,4:1, aceito porque o chip não é clicável (ADR 0149).

## Consequências

- O status da conexão se destaca dos dados que só são lidos, e a marca do Strava fica junto da seção, sem disputar espaço com o chip.
- O ChipDeStatus do design system Live Run ganha a variante da conexão (ADR 0143).
