# ADR 0089: Mensagens lidas são excluídas 30 dias depois da leitura

- **Status:** Aceita (revisada pelo ADR 0094)
- **Data:** 2026-11-10

## Contexto

Notificações servem para avisar de mudanças no plano. O registro do que mudou, quando e por quê fica no histórico de replanejamentos do Perfil (ADR 0038). Guardar todas as mensagens deixaria a lista cada vez maior e manteria por tempo indefinido textos que podem citar dados de saúde do feedback (ADR 0028).

## Decisão

- Uma mensagem **não lida** fica até ser lida, sem prazo.
- Uma mensagem **lida** é excluída **30 dias depois da leitura**.
- Uma proposta **aguardando decisão** não é excluída, mesmo lida. O prazo de 30 dias começa quando ela é decidida (aceita, editada ou descartada) ou fica desatualizada (ADRs 0052 e 0054).
- A exclusão remove a mensagem do banco de dados.

## Consequências

- A lista fica curta, e os dados guardados são só os necessários.
- O histórico de replanejamentos do Perfil não é afetado: ele continua com o registro de cada mudança. *Revisado pelo ADR 0094: o histórico de replanejamentos saiu do Perfil.*
- Se o ajuste mais recente tiver a mensagem excluída, ele ainda pode ser desfeito pelo histórico de replanejamentos (ADR 0018). *Revisado pelo ADR 0094: a mensagem do ajuste mais recente não é excluída enquanto ele puder ser desfeito.*
- A exclusão roda numa rotina diária do backend, coberta por testes de integração.
