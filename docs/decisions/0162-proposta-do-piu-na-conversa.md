# ADR 0162: Proposta do Piu na conversa, com o treino como contexto

- **Status:** Aceita
- **Data:** 2026-11-12
- **Complementa:** [ADR 0062](0062-proposta-do-piu-na-conversa.md), [ADR 0078](0078-replanejar-treino-com-o-piu.md), [ADR 0106](0106-dados-do-strava-nunca-vao-para-a-ia.md), [ADR 0145](0145-antes-e-depois-com-riscado-e-seta.md) e [ADR 0157](0157-acoes-diretas-no-detalhe.md)

## Contexto

O "Replanejar com o Piu" do treino previsto abre a conversa com o treino como contexto (ADR 0078), e a proposta aparece na conversa com o antes e o depois e os botões de decisão (ADR 0062). Os botões já foram definidos no ADR 0157 e os balões no ADR 0159. Na tela de detalhe em alta fidelidade (ADR 0148), o topo da conversa, o bloco de contexto e o card da proposta eram propostas novas.

## Decisão

- **Topo:** "‹ Intervalado" (o nome do treino de origem) para voltar, à esquerda, em `primaria`, e o título "Piu" no centro, 16 px, negrito.
- **Contexto do treino:** bloco em `neutro-suave`, `raio-campo`, padding de 8 × 12 px, logo abaixo do topo, com:
  - o ícone da atividade numa caixa de 32 px em `superficie`, em `primaria`;
  - o treino e a data em negrito, em `texto` (ex.: "Intervalado · Seg 9 nov");
  - o resumo em `legenda` e `texto-secundario` (ex.: "8,6 km · previsto").
  - Mostra só o treino previsto, sem dados do Strava (ADR 0106).
- **Card da proposta:** em `superficie`, contorno `borda`, `raio-card`, padding de 14 × 16 px, com:
  - o rótulo "Proposta";
  - as linhas do AntesDepois (ADR 0145), separadas por divisores em `borda`;
  - uma **nota informativa** opcional, com o ícone Phosphor `info` e o texto em `legenda` e `texto-secundario` (ex.: "Semana com 5 km a menos de corrida."). Avisos de risco (ADR 0017) não usam esta nota: usam o aviso de risco em `risco-suave` com contorno `risco`;
  - os BotaoDeIcone Aceitar, Editar e Descartar no fim (ADR 0157).
- Contrastes:

  | Par | Claro | Escuro |
  |---|---|---|
  | Treino e data do contexto (`texto` sobre `neutro-suave`) | 15,2:1 | 12,4:1 |
  | Resumo do contexto (`texto-secundario` sobre `neutro-suave`) | 5,9:1 | 6,2:1 |
  | Ícone do contexto (`primaria` sobre `superficie`) | 7,1:1 | 7,9:1 |
  | Antes riscado e nota (`texto-secundario` sobre `superficie`) | 6,8:1 | 7,1:1 |
  | Depois (`texto` sobre `superficie`) | 17,5:1 | 14,2:1 |
  | Seta do depois (`primaria` sobre `superficie`) | 7,1:1 | 7,9:1 |

## Consequências

- O usuário vê de qual treino a conversa trata e decide a proposta sem sair dela.
- O mesmo card da proposta pode ser usado em Notificações, onde a proposta pendente também aparece (ADR 0062).
- O design system Live Run ganha os componentes ContextoDoTreino e CardDaProposta (ADR 0143).
