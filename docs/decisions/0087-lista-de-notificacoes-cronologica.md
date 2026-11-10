# ADR 0087: Lista de Notificações em ordem cronológica, com dia e hora em cada mensagem

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0054 põe as propostas que aguardam decisão no topo, e o resto em ordem cronológica. Faltava definir se a lista seria agrupada por período ("Hoje", "Ontem", "Esta semana") ou não.

## Decisão

Abaixo de "Aguardando você", a lista fica numa seção só, **"Recentes"**, da mais nova para a mais antiga, **sem grupos por período**. Cada mensagem mostra o dia e a hora (ex.: "ter 22:00"; depois de uma semana, a data, como "6 nov").

## Consequências

- A lista é simples de montar e de testar.
- Com a exclusão das mensagens lidas depois de 30 dias (ADR 0089), a lista não fica longa a ponto de precisar de grupos.
