# ADR 0096: Sair da conta pede confirmação

- **Status:** Aceita
- **Data:** 2026-11-10

## Contexto

O login é por link mágico, sem senha (ADR 0020). Depois de sair, o usuário precisa pedir um novo link por e-mail para voltar.

## Decisão

Tocar em "Sair", no Perfil, abre uma confirmação: "Sair da conta? Para voltar, você vai receber um novo link no seu e-mail", com "Cancelar" e "Sair".

## Consequências

- Evita sair por toque acidental e ter que esperar um e-mail para voltar.
- Sair não apaga dados, só encerra a sessão no aparelho.
