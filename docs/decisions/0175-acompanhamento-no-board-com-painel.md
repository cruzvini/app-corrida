# ADR 0175: Acompanhamento do projeto no board do GitHub, com painel em artifact

- **Status:** Aceita
- **Data:** 2026-11-13

## Contexto

No início do projeto, o andamento era acompanhado no GitHub Project "App Corrida" (https://github.com/users/cruzvini/projects/1), com épicos e tarefas como issues. A última atualização dele foi em 29/10/2026. Depois disso, 112 commits (ADRs 0100 a 0174, `apps/mobile`, `packages/*`) entraram direto na `main`, sem issue nem PR. O board ficou desatualizado e não havia mais uma visão geral do projeto.

Foram comparadas três opções:

1. **Só o GitHub Project.** Ele se liga ao trabalho (issue, PR, `Closes #n`), mas não mostra bem um resumo do projeto.
2. **Só um painel em artifact no Claude.** É bom para visualizar, mas fica fora do repositório e é atualizado à mão. Viraria uma segunda fonte desatualizada.
3. **Híbrido:** o board é a fonte da verdade, e o painel é só uma leitura gerada a partir dele.

## Decisão

Fica a opção 3.

- **Fonte da verdade:** o GitHub Project "App Corrida". Épicos e tarefas são issues, com os status Backlog, Em andamento e Concluído.
- **Fluxo:** toda entrega tem uma issue e uma branch, e entra por PR com `Closes #n`. Isso vale também para os lotes de ADRs (um PR por lote ou por tela). Ninguém faz commit direto na `main`.
- **Painel:** um artifact no Claude, só para leitura e sempre no mesmo link. Ele é gerado a partir do board, das issues, dos PRs e do CI no GitHub, e dos ADRs no repositório. Mostra:
  - os épicos e o progresso de cada um;
  - o que está em andamento;
  - os PRs abertos e o estado do CI;
  - os ADRs recentes;
  - o que está pendente e qual é o próximo épico.
- **Atualização do painel:** quando o usuário pedir ("atualiza o painel") e em todo fechamento de tópico. Atualizar sozinho em horário fixo fica para depois.
- O painel não aceita edição. Nenhuma decisão ou mudança de status é registrada só nele.

## Consequências

- O board precisa ser posto em dia antes do painel: marcar o que já foi entregue e criar os épicos que faltam, como o das telas e o do app mobile.
- O painel é uma foto do momento e mostra a data em que foi gerado.
- O fechamento de tópico (CLAUDE.md) passa a incluir atualizar o board e o painel.
