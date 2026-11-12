# ADR 0167: Card do objetivo com a distância em destaque

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0081](0081-tela-inicial-do-plano.md), [ADR 0153](0153-numero-em-destaque-no-card-do-treino.md) e [ADR 0165](0165-secoes-em-grupo-sem-contorno.md)

## Contexto

A tela inicial do Plano começa pelo card do objetivo, com o botão "Editar plano com o Piu", e tocar no card abre o detalhe do plano (ADR 0081). A forma do card era uma proposta nova na tela de alta fidelidade. Foram comparadas três opções: card com a bandeira numa caixa de ícone e título de 18 px, objetivo em destaque (distância no estilo `numero`, sem a caixa do ícone) e a primeira com o botão em contorno.

## Decisão

- **Card** em `superficie`, com contorno `borda`, `raio-card` e padding de 16 px, porque é tocável e abre o detalhe do plano (ADR 0165). Seta `caret-right` em `texto-secundario` à direita.
- **Plano específico:** a distância do objetivo no estilo `numero` (30 px, negrito, algarismos tabulares), com a data ao lado em `legenda` ("10 km" e "até 3 jan"), como o número em destaque do card do treino (ADR 0153). Embaixo, o pace alvo e o prazo em `legenda` e `texto-secundario`, em frase ("Pace alvo de 5:20/km, faltam 53 dias", ADR 0166). Objetivo de tempo mostra o tempo como número.
- **Plano genérico:** sem número, o objetivo fica em `subtitulo` (18 px, negrito), com a frequência embaixo em `legenda` ("4 corridas e 2 musculações por semana, sem data final").
- Sem caixa de ícone.
- **"Editar plano com o Piu"**: botão principal em pílula, de largura total, em `primaria` com `sobre-primaria`, com o ícone `chat-circle` de 20 px. É o único botão da aba.
- Contrastes: número e título 17,5:1 (claro) e 14,2:1 (escuro); legendas 6,8:1 e 7,1:1; botão 7,1:1 e 9,1:1.

## Consequências

- O objetivo se lê como o treino do Hoje: o número primeiro, o resto em apoio.
- O design system Live Run ganha o componente CardDoObjetivo (ADR 0143).
