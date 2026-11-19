# ADR 0226: Projeto de integração do Jest passa sem testes até o Supabase local

- **Status:** Aceita
- **Data:** 2026-11-18
- **Complementa:** [ADR 0135](0135-pasta-tests-por-camada.md), [ADR 0136](0136-gates-ativos-desde-o-setup.md)

## Contexto

O card #18 cria os projetos `unit` e `integration` do Jest e os scripts de cada um. O teste de fumaça da integração, que confirma que o Supabase local responde (ADR 0136), só existe a partir do card #19. Sem testes, o Jest falha por padrão. As opções eram aceitar zero testes até o #19, escrever um teste provisório entre os pacotes ou deixar o projeto de integração inteiro para o #19.

## Decisão

O script `test:integration` roda com `--passWithNoTests` **até o card #19**, que remove a flag junto com a entrada do teste de fumaça do Supabase.

## Consequências

- O projeto e o comando de integração existem desde já, como pede o ADR 0135, sem teste artificial no repositório.
- Até o #19, o comando passa mesmo sem testar nada. O risco é esquecer a flag, por isso a remoção faz parte do escopo do #19.
