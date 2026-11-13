# ADR 0180: Chips de status da proposta, com o pendente em ardósia

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0054](0054-lidas-e-propostas-aguardando.md), [ADR 0149](0149-chips-de-status-do-treino.md) e [ADR 0179](0179-cabecalho-da-mensagem.md)

## Contexto

A proposta que espera decisão leva a etiqueta "aguardando você" (ADR 0054), e a proposta vencida aparece como "desatualizada" (ADR 0052). Na conversa com o Piu, as propostas ficam com o status final, como "descartada" (ADR 0090). Os chips de status do treino já existiam (ADR 0149), mas os da proposta não tinham forma definida.

Foram comparadas três opções para o chip da proposta pendente: em `primaria-suave` com contorno em `primaria`; neutro, igual ao "Previsto"; e sem chip, só com o texto "Proposta aguardando você".

## Decisão

Os status da proposta usam o ChipDeStatus (pílula de 24 px, texto de 12 px com peso 500, ícone de 14 px), com estas variantes:

| Chip | Contorno | Fundo | Texto e ícone |
|---|---|---|---|
| Aguardando você | `primaria` | `primaria-suave` | `texto`, com `clock` em `primaria` |
| Aceita | `borda-forte` | nenhum | `texto-secundario`, com `check` |
| Descartada | `borda-forte` | nenhum | `texto-secundario` |
| Desatualizada | `borda-forte` | nenhum | `texto-secundario` |

- **Só "Aguardando você" tem cor**, porque é o único status que pede uma ação do usuário.
- "Aceita" não usa o verde. O verde continua só para treino feito (ADR 0142).
- Na mensagem aberta, o chip fica embaixo do título, antes do tipo ("Proposta"), como no cabeçalho do detalhe do treino (ADR 0179).
- Na lista de Notificações não há chip: a seção "Aguardando você" e a linha de apoio já dizem o status (ADRs 0177 e 0178).
- O status é lido pela palavra, e a cor só reforça.
- Contrastes do "Aguardando você": texto 14,7:1 (claro) e 12,0:1 (escuro); ícone 5,9:1 e 6,7:1; contorno sobre `fundo` 6,6:1 e 9,1:1. Os chips neutros seguem o "Previsto": texto 6,4:1 e 8,1:1 sobre `fundo`, e contorno de 2,6:1 no tema claro, aceito porque o chip não é clicável.

## Consequências

- A cor da marca aponta o que espera o usuário, sem criar uma cor nova.
- `primaria-suave` passa a ter mais um uso além de selecionado, atual e mensagens do Piu: o status pendente. Na lista ela continua fora (ADR 0178).
- "Aceita" e "Descartada" ficam decididas aqui e são aplicadas na tela do Piu.
- O ChipDeStatus do design system Live Run ganha as quatro variantes da proposta (ADR 0143).
