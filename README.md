# App Corrida

App para reunir informações de treinos de corrida e interagir com elas para criar ou alterar planos de treino. O app reconhece e analisa os dados de treino e dá ao usuário controle total do plano, com feedback ou replanejamento a qualquer momento.

Também é um projeto de aprendizado do ciclo completo de desenvolvimento de software (SDLC) com IA.

**MVP:** amigos e família, mas projetado para múltiplos usuários desde o início.

## Ordem das etapas

1. Concepção e escopo
2. Design, marca e fluxos
3. Testes e CI (planejamento; ADR 0081)
4. Setup do monorepo (inclui o pipeline de CI e os quality gates)
5. Backend Supabase (banco de dados, auth, RLS e segurança)
6. Motor de regras
7. Integração Strava
8. Caixa de entrada de feedback

## Documentação

- Regras de trabalho: [`CLAUDE.md`](CLAUDE.md)
- Decisões de arquitetura (ADRs): [`docs/decisions/`](docs/decisions/README.md)
