# ADR 0087: Cobertura mínima de testes por pacote

- **Status:** Aceita
- **Data:** 2026-10-29
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md), [ADR 0086](0086-gates-obrigatorios-em-todo-pr.md)

## Contexto

Faltava decidir se a CI exige uma cobertura mínima de testes e com que valor. As partes do monorepo têm riscos diferentes. O motor de regras é lógica pura e crítica. O provedor de IA é uma interface com implementações. A UI do app também é coberta pelo E2E.

## Decisão

Exigir uma cobertura mínima de linhas e de branches **por pacote**, no Jest (`coverageThreshold`):

| Pacote | Mínimo |
| --- | --- |
| `packages/rules-engine` | 90% |
| `packages/ai-provider` | 80% |
| `apps/mobile` | 60% |

Se algum pacote ficar abaixo do mínimo, o check de testes unitários falha e o merge é bloqueado (ADR 0086).

## Consequências

- A lógica crítica fica bem protegida, sem exigir números irreais da UI.
- O relatório de cobertura aparece no PR.
- Arquivos sem lógica (configuração, tipos, barrels) ficam fora da conta.
- Os mínimos podem ser revistos num novo ADR, se ficarem frouxos ou começarem a induzir testes artificiais.
