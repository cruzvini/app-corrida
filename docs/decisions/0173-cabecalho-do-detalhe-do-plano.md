# ADR 0173: Cabeçalho do detalhe do plano igual ao card do objetivo

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0083](0083-detalhe-do-plano.md), [ADR 0154](0154-cabecalho-e-secoes-do-detalhe.md) e [ADR 0167](0167-card-do-objetivo.md)

## Contexto

O detalhe do plano abre pelo card do objetivo e mostra o objetivo completo (ADR 0083). Na alta fidelidade, o cabeçalho usava o do detalhe do treino (ADR 0154), com a bandeira, o título "10 km em 3 jan" e, logo abaixo, os números "10 km", "3 jan" e "5:20", repetindo o objetivo. O card do objetivo já tinha perdido a caixa de ícone (ADR 0167). Foram comparadas três opções: manter, tirar só o ícone e repetir o card do objetivo.

## Decisão

- O cabeçalho do detalhe do plano repete o card do objetivo (ADR 0167), direto sobre `fundo`, sem card:
  - "‹ Plano" para voltar, como no detalhe do treino;
  - a distância em `numero` (30 px) com a data ao lado em `legenda` ("10 km" e "até 3 jan"); no plano genérico, o objetivo em `titulo`;
  - em `legenda` e `texto-secundario`, o pace e o prazo ("Pace alvo de 5:20/km, faltam 53 dias") e, na linha de baixo, o início ("Plano específico desde 26 out, com 10 semanas");
  - "Adiar objetivo" em botão secundário, com contorno em `primaria` e o ícone `calendar-dots`, só no plano específico.
- Sem caixa de ícone e sem a linha de três números.
- Contrastes: número 16,4:1 (claro) e 16,3:1 (escuro); legendas 6,4:1 e 8,1:1; voltar e botão secundário 6,6:1 e 9,1:1.

## Consequências

- O que o usuário toca na aba (o card) e o que se abre (o detalhe) têm a mesma cara, e nenhum número aparece duas vezes.
- O CabecalhoDoDetalhe do design system Live Run ganha a variante do detalhe do plano (ADR 0143).
