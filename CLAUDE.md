# CLAUDE.md

Guia de trabalho para o Claude neste repositório.

## Projeto

App Corrida: app para reunir dados de treinos de corrida e interagir com eles para criar ou alterar planos. O app reconhece e analisa os treinos e dá ao usuário controle total do plano, com feedback ou replanejamento a qualquer momento. MVP para amigos e família, projetado para múltiplos usuários.

É um projeto de aprendizado do ciclo completo de desenvolvimento de software (SDLC) com IA.

## Regras de trabalho

- Responder sempre em português, de forma direta e concisa.
- Ao propor ou executar algo, dizer a etapa do SDLC a que a ação pertence (concepção, design, desenvolvimento, segurança, banco de dados, testes, etc.).
- Não usar a skill `treinador-corrida` como base do projeto.
- Antes de implementar uma decisão, registrá-la como ADR em `docs/decisions/` e atualizar o índice em `docs/decisions/README.md`.
- Perguntar as decisões em aberto uma por vez, até que cada ramo esteja resolvido.
- Não criar papéis rotulados (como product owner). O usuário atua em todo o projeto e é dono dos critérios de aceitação.
- Fazer commits pequenos, no padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `test:`, `refactor:`...), com mensagens claras para que o usuário consiga ler cada entrega.
- Descrever nos PRs o que mudou e por quê.
- Seguir a pirâmide de testes: unitários na base, integração no meio, E2E no topo. Respeitar os quality gates de CI antes de qualquer merge.
- Nunca commitar segredos, chaves ou tokens. Usar variáveis de ambiente (`.env*` está no `.gitignore`; documentar as variáveis em `.env.example`).
- Antes de qualquer ação irreversível ou que publique algo (push, criar recursos no GitHub/Supabase, etc.), mostrar o comando e pedir confirmação.
- Ao fim de cada épico ou grande entrega, fazer um fechamento de tópico: resumir o que foi entregue (ADRs, PRs, board), listar o que ficou pendente e qual é o próximo épico, e indicar se é um bom momento para iniciar um novo contexto. O usuário decide quando trocar de contexto. Tudo o que for necessário para retomar deve estar no repositório, no board ou nos PRs, nunca só na conversa.

## Stack

- **App:** React Native + Expo, TypeScript. iOS primeiro, validando Android cedo. Execução via Expo Go no iPhone.
- **Backend:** Supabase (Postgres, auth, RLS).
- **Motor de regras:** pacote TypeScript isolado (`packages/rules-engine`).
- **IA:** interface agnóstica de provedor (`packages/ai-provider`). Claude como primeira implementação, provedor fake para testes.
- **Dados de treino:** API do Strava (polling a cada 2h + atualização manual, conciliação dos últimos 7 dias). **Dados do Strava nunca vão para a IA**, nem derivados (ADR 0066): só o motor de regras os usa.
- **Feedback:** caixa de entrada dentro do app, sem push.
- **Design:** Claude (design mode), sem Figma.

Detalhes e justificativas em [`docs/decisions/`](docs/decisions/README.md).

## Estrutura de pastas (provisória)

```
apps/mobile/            App Expo
packages/rules-engine/  Motor de regras
packages/ai-provider/   Interface e implementações de IA
supabase/               Migrations e configuração
tests/                  Testes (pasta dedicada)
docs/decisions/         ADRs
```

## Comandos

TBD: serão definidos na etapa "Setup do monorepo".

- Instalar dependências: TBD
- Rodar o app: TBD
- Testes (unitários / integração / E2E): TBD
- Lint / typecheck: TBD
- Supabase local e migrations: TBD
