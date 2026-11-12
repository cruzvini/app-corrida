# ADR 0151: Contagem de não lidas na aba Notificações

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0034](0034-navegacao-por-abas-com-hoje-no-centro.md) e [ADR 0147](0147-icone-do-hoje-elevado.md)

## Contexto

A aba Notificações tem um selo com o número de mensagens não lidas (ADR 0034). Na tela Hoje em alta fidelidade (ADR 0148), a forma do selo era uma proposta nova, sem ADR.

## Decisão

- **Pílula de 16 px de altura** no canto superior direito do sino, com largura mínima de 16 px e 4 px de padding nas laterais.
- Fundo em `primaria` e número em `sobre-primaria`, negrito, **11 px**, com algarismos tabulares.
- Anel de 2 px na cor `superficie`, a mesma da barra, para separar do ícone.
- Conta só as mensagens não lidas. **Acima de 9, mostra "9+".** Sem não lidas, a pílula some.
- Contraste do número: 7,1:1 no tema claro e 9,1:1 no escuro.

## Consequências

- A contagem usa a cor da marca, e não uma cor de alerta, como o resto da navegação.
- O componente BarraDeAbas do design system Live Run ganha a contagem (ADR 0143).
