# ADR 0098: Frequência semanal fica no Perfil, em Meus dados

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O ADR 0097 trocou os dias fixos pela frequência semanal (quantos dias de corrida e de musculação, com a divisão em quantidade). O ADR 0094 pôs a frequência no detalhe do plano e deixou a mudança só pela conversa com o Piu. A frequência, porém, é uma informação da pessoa, como nível e peso.

## Decisão

- A frequência semanal fica no **Perfil, em Meus dados**, junto com nível, idade, peso e lesões ou limitações.
- Ela é mudada pelo **"Editar perfil"**: Salvar grava na hora e abre o Piu com a mensagem do que mudou (ADR 0095).
- Pedir ao Piu para mudar a frequência continua possível. Aceitar a proposta atualiza o Perfil.
- A frequência sai do detalhe do plano.

## Consequências

- Todos os dados que a pessoa informa no setup, menos o objetivo, ficam num lugar só.
- Revisa os ADRs 0083, 0094, 0095 e 0097 e o critério 6.5.
