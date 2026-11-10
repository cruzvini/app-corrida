# ADR 0093: Limite diário de mensagens mantido, com aviso só perto do fim

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0031 define um limite diário de mensagens por usuário na conversa com o Piu (valor inicial: 20). O limite protege o teto mensal de gasto: quando o teto estoura, toda a IA do app para, para todos os usuários, inclusive os ajustes automáticos. Foram avaliados: mostrar um contador sempre, avisar só perto do fim, aumentar o valor ou tirar o limite por usuário.

## Decisão

- O **limite diário continua**, como trava contra uso muito alto ou erros que repetem chamadas.
- **Não há contador** no dia a dia.
- Quando faltarem **5 mensagens ou menos**, aparece acima do campo o aviso "Restam N mensagens hoje".
- Ao atingir o limite, o campo fica desativado até a meia-noite, no fuso do usuário, com o motivo e o que continua funcionando.
- O valor (20) pode ser ajustado no backend pelo uso real, sem mudar a interface.

## Consequências

- Quase ninguém percebe o limite, e o app continua protegido.
- O backend precisa informar ao app quantas mensagens restam no dia.
- Complementa o ADR 0031.
