// Gera os dados do painel do projeto (ADR 0175) a partir do GitHub e do repositório.
// Uso: node scripts/painel/gerar-dados.mjs <pasta-de-saida>
// Requer o gh autenticado. Escreve itens.json, prs.json, adrs.json e ci.json,
// cada um no formato {rows, meta}, prontos para anexar ao painel.

import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OWNER = 'cruzvini';
const REPO = 'app-corrida';
const PROJECT = 1;
const saida = process.argv[2];
if (!saida) {
  console.error('Uso: node scripts/painel/gerar-dados.mjs <pasta-de-saida>');
  process.exit(1);
}
mkdirSync(saida, { recursive: true });

const gh = (...args) => JSON.parse(execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
const geradoEm = new Date().toISOString();
const comando = 'node scripts/painel/gerar-dados.mjs';
const escrever = (nome, rows, extras = []) => {
  const meta = [{ label: 'Gerado em', value: geradoEm }, { label: 'Comando', value: comando }, ...extras];
  writeFileSync(join(saida, nome), JSON.stringify({ rows, meta }, null, 2));
  console.log(`${nome}: ${rows.length} linhas`);
};

// Ordem das etapas, lida do README ("1. Concepção e escopo", ...).
const readme = readFileSync('README.md', 'utf8');
const etapas = [...readme.matchAll(/^(\d+)\. (.+)$/gm)].map(([, n, t]) => ({ n: Number(n), titulo: t.split(' (')[0].trim() }));
const etapaDe = (titulo) => etapas.find((e) => titulo.startsWith(e.titulo))?.n ?? null;

// Issues com pai, sub-issues e rótulos.
const issues = gh('api', 'graphql', '-f', `query={repository(owner:"${OWNER}",name:"${REPO}"){issues(first:100){nodes{
  number title state body url updatedAt closedAt parent{number}
  subIssuesSummary{total completed} labels(first:10){nodes{name}}}}}}`).data.repository.issues.nodes;

// Status no board.
const board = gh('project', 'item-list', String(PROJECT), '--owner', OWNER, '--format', 'json', '--limit', '200').items;
const statusDe = new Map(board.filter((i) => i.content?.number).map((i) => [i.content.number, i.status ?? 'Sem status']));

const itens = issues
  .filter((i) => statusDe.has(i.number))
  .map((i) => {
    const epico = i.labels.nodes.some((l) => l.name === 'epic');
    return {
      numero: i.number,
      titulo: i.title,
      tipo: epico ? 'épico' : i.parent ? 'card' : 'tarefa',
      etapa: epico ? etapaDe(i.title) : null,
      pai: i.parent?.number ?? null,
      status: statusDe.get(i.number),
      estado: i.state === 'OPEN' ? 'aberta' : 'fechada',
      subissues_total: i.subIssuesSummary.total,
      subissues_fechadas: i.subIssuesSummary.completed,
      tarefas_total: (i.body.match(/^\s*- \[[ xX]\]/gm) ?? []).length,
      tarefas_feitas: (i.body.match(/^\s*- \[[xX]\]/gm) ?? []).length,
      atualizada: i.updatedAt,
      url: i.url,
    };
  })
  .sort((a, b) => a.numero - b.numero);
escrever('itens.json', itens, [{ label: 'Board', value: `https://github.com/users/${OWNER}/projects/${PROJECT}` }]);

// Pull requests.
const prs = gh('pr', 'list', '--repo', `${OWNER}/${REPO}`, '--state', 'all', '--limit', '200', '--json', 'number,title,state,createdAt,mergedAt,url')
  .map((p) => ({
    numero: p.number,
    titulo: p.title,
    estado: { OPEN: 'aberto', MERGED: 'mergeado', CLOSED: 'fechado' }[p.state] ?? p.state,
    criado: p.createdAt,
    mergeado: p.mergedAt || null,
    url: p.url,
  }))
  .sort((a, b) => b.numero - a.numero);
escrever('prs.json', prs);

// ADRs, lidos de docs/decisions.
const pasta = 'docs/decisions';
const adrs = readdirSync(pasta)
  .filter((f) => /^\d{4}-.+\.md$/.test(f))
  .map((f) => {
    const texto = readFileSync(join(pasta, f), 'utf8');
    return {
      numero: Number(f.slice(0, 4)),
      titulo: (texto.match(/^# ADR \d+:\s*(.+)$/m)?.[1] ?? f).trim(),
      status: (texto.match(/^- \*\*Status:\*\*\s*(.+)$/m)?.[1] ?? '').trim(),
      data: texto.match(/^- \*\*Data:\*\*\s*(\d{4}-\d{2}-\d{2})/m)?.[1] ?? null,
      url: `https://github.com/${OWNER}/${REPO}/blob/main/${pasta}/${f}`,
    };
  })
  .sort((a, b) => b.numero - a.numero);
escrever('adrs.json', adrs);

// Execuções de CI (vazio enquanto não houver workflows).
const runs = gh('run', 'list', '--repo', `${OWNER}/${REPO}`, '--limit', '20', '--json', 'databaseId,workflowName,headBranch,status,conclusion,createdAt,url')
  .map((r) => ({
    id: r.databaseId,
    workflow: r.workflowName,
    branch: r.headBranch,
    status: r.status,
    conclusao: r.conclusion || null,
    criado: r.createdAt,
    url: r.url,
  }));
escrever('ci.json', runs);
