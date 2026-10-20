# ADR 0032: Nome do app: Live Run

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O app precisava de um nome fácil de lembrar, ligado à corrida (com "run" ou "runner"), que pudesse ter uma referência ao nome do usuário (letra V) e que funcionasse em inglês ou português. Foram avaliadas cerca de 20 opções (ex.: VRun, Vai Correr, RunPlan, Passada).

## Decisão

O app se chama **Live Run**.

## Consequências

- "Live" passa a ideia de um plano vivo, que se ajusta a qualquer momento, o que combina com o replanejamento (ADR 0018) e com os ajustes automáticos (ADR 0026).
- O nome é em inglês, mas a interface continua em português (pt-BR).
- O nome do repositório e da pasta (`app-corrida`) não muda por enquanto. O nome aparece no app (tela inicial, ícone, `app.json` do Expo) a partir do setup do monorepo.
- Antes de publicar em loja (fora do MVP, ADR 0010), verificar se o nome está disponível.
