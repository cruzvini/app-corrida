# ADR 0071: Dia com um treino feito e outro não fica verde com selo "!" na faixa

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

Na faixa de 7 dias do Hoje, o contorno de cada dia mostra o status: verde para feito, vermelho para não feito e padrão para planejado ou pendente (ADR 0070). Um dia com corrida e musculação pode ter um treino feito e o outro não. Foram avaliados: um contorno amarelo e o contorno verde com um pequeno selo de aviso.

## Decisão

O dia misto tem **contorno verde com um pequeno selo "!" no canto superior direito**.

- O app continua com só três cores de status, sem um quarto status para aprender.
- O selo é uma forma, não só uma cor, e se distingue mesmo para quem não diferencia verde de vermelho.
- Qual treino faltou aparece na escolha do treino, ao tocar no dia (ADR 0069), em que cada linha tem o contorno do próprio status.

## Consequências

- O selo "!" passa a ser um elemento do sistema visual, com cor e forma finais definidas no card 5.
- O ponto em aberto do ADR 0070 fica resolvido.
