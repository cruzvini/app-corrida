# ADR 0075: Limite de atletas do app no Strava

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

Pela política do Strava em 2026, um app novo começa liberado para 1 atleta (o desenvolvedor). Dá para subir sozinho até 10, sem revisão nem custo. A partir do 11º, o Strava precisa revisar, sem prazo nem garantia. A assinatura do Strava é exigida só do desenvolvedor.

## Decisão

- **Protótipo:** 1 atleta.
- **Ao abrir para amigos e família:** subir para 10.
- **Acima de 10:** decidir na hora entre pedir a revisão do Strava e depender do Apple Health / Health Connect (ADR 0009).

## Consequências

- **O MVP para amigos e família fica limitado a 10 pessoas** enquanto depender do Strava.
- A cota da API é compartilhada por todos os atletas do app (ADR 0071).
