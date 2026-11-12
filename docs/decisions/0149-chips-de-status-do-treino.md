# ADR 0149: Chips de status do treino

- **Status:** Aceita (texto revisto pelo ADR 0166: "Feito via Strava")
- **Data:** 2026-11-11
- **Complementa:** [ADR 0138](0138-identidade-visual.md) e [ADR 0142](0142-tons-de-status-e-selos.md)

## Contexto

A tela Hoje em alta fidelidade (ADR 0148) mostra o status do treino num chip no topo do card: "Previsto", "Pendente" (falha de sincronização, ADR 0049) e "Feito · Strava". O chip era uma proposta nova, sem ADR.

## Decisão

Chip em pílula (`raio-pilula`), texto de 12 px com peso 500, altura de 24 px:

| Chip | Contorno | Fundo | Texto e ícone |
|---|---|---|---|
| **Previsto** | `borda-forte` | nenhum | `texto-secundario` |
| **Pendente** | `borda-forte` | nenhum | `texto-secundario`, com o ícone Phosphor `arrows-clockwise` |
| **Feito · Strava** | `status-feito` | `status-feito-fundo` | texto em `texto`, com o ícone `check` preenchido em `status-feito` |

- Contraste do texto: 6,8:1 (claro) e 7,1:1 (escuro) no Previsto e no Pendente; 15:1 e 10:1 no Feito. O ✓ fica com 4,0:1 e 5,2:1.
- O contorno do Previsto e do Pendente fica com 2,8:1 no tema claro. O chip não é clicável e o status é lido pelo texto, então o contorno não precisa de 3:1.
- O chip de **não feito** fica para o detalhe do treino, onde aparece pela primeira vez, no mesmo padrão com as cores de não feito.

## Consequências

- O status do treino no card é lido pela palavra, e a cor só reforça.
- O design system Live Run ganha o componente ChipDeStatus (ADR 0143).
