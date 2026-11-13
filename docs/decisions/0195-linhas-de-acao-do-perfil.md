# ADR 0195: "Desconectar o Strava" e "Sair" como linhas de ação em ardósia, sem vermelho

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0096](0096-sair-pede-confirmacao.md), [ADR 0116](0116-desconectar-o-strava.md), [ADR 0142](0142-tons-de-status-e-selos.md), [ADR 0163](0163-dialogo-de-confirmacao.md) e [ADR 0194](0194-linhas-de-dados-do-perfil.md)

## Contexto

O Perfil tem duas ações raras que encerram algo: "Desconectar o Strava", na seção Strava (ADR 0116), e "Sair", na seção Conta (ADRs 0096 e 0193). As duas pedem confirmação. O wireframe as marcava como perigosas. Pelo ADR 0142, o vermelho fica só para dor, lesão e carga, e o diálogo de confirmação já não usa vermelho (ADR 0163).

Foram comparadas três opções: linha de ação em ardósia, com ícone, no fim do grupo; botão secundário fora do grupo; e linha em vermelho, como nos Ajustes do iOS.

## Decisão

- As duas ações são **linhas de ação** dentro do grupo da seção, depois das linhas de dados (ADR 0194), separadas pelo mesmo fio em `borda`.
- **Linha de ação:** ícone de 20 px e texto em 15 px, peso 500, os dois em `primaria`, com 10 px entre eles. Altura mínima de 52 px. A linha inteira é a área de toque.
- Ícones: **`link-break`** para "Desconectar o Strava" e **`sign-out`** para "Sair".
- **Sem vermelho:** encerrar a sessão ou a conexão não é risco (ADR 0142).
- **Sem seta:** a ação não abre outra tela. Tocar abre o diálogo de confirmação (ADR 0163): "Sair da conta?" (ADR 0096) e a confirmação que explica o efeito de desconectar (ADR 0116).
- A mesma linha serve a "Adicionar outra atividade", no "Editar perfil".
- Contrastes sobre `superficie`: 7,1:1 (claro) e 7,9:1 (escuro).

## Consequências

- As ações ficam junto do que afetam (a conexão, a conta) sem competir com o "Editar perfil".
- O app não usa vermelho para ações de encerrar nem para apagar.
- O design system Live Run ganha o componente LinhaDeAcao (ADR 0143).
