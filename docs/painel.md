# Painel do projeto

Painel com o status geral do App Corrida (ADR 0175): https://claude.ai/artifact/7jmp7fw9ffnpsSktXgfDkY (privado).

Ele mostra:

- a etapa atual e a próxima;
- os épicos na ordem do README;
- o board por coluna, sem os épicos;
- os ADRs por dia;
- os ADRs e os PRs mais recentes;
- o estado do CI.

O board do GitHub é a fonte da verdade, e o painel é só uma foto dele. Nada é decidido ou mudado pelo painel.

## Como atualizar

Peça ao Claude "atualiza o painel". Isso também acontece em todo fechamento de tópico. Os passos são:

1. Gerar os dados (requer o `gh` autenticado):

   ```bash
   node scripts/painel/gerar-dados.mjs <pasta-de-saida>
   ```

   O script escreve `itens.json`, `prs.json`, `adrs.json` e `ci.json` no formato `{rows, meta}`.

2. Anexar os quatro arquivos ao artifact como assets. Cada upload gera um endereço `/_blob/<id>` novo.
3. Atualizar os datasets `itens`, `prs`, `adrs` e `ci` do artifact com o novo `source.url` e o novo `updated`.
4. Apagar os assets antigos que nenhum dataset usa mais.

A página (`files/index.html` no artifact) só muda quando o desenho do painel mudar.

## De onde vem cada dado

| Dataset | Origem |
| --- | --- |
| `itens` | Issues do repositório com status no GitHub Project "App Corrida". A etapa de cada épico é lida da ordem no `README.md`, e o progresso vem das sub-issues e das listas de tarefas (`- [ ]`) das issues. |
| `prs` | `gh pr list`, com todos os estados |
| `adrs` | Arquivos de `docs/decisions/`: número, título, status e data |
| `ci` | `gh run list` (vazio até o pipeline do card #21) |
