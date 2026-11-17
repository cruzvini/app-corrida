# ADR 0222: Prettier não formata a documentação em Markdown

- **Status:** Aceita
- **Data:** 2026-11-17
- **Complementa:** [ADR 0131](0131-eslint-e-prettier.md)

## Contexto

O ADR 0131 colocou o `prettier --check` no gate de Lint. Sem configuração, o Prettier também checa os arquivos Markdown. O repositório tem mais de 200 ADRs e outros documentos em `docs/`, escritos sem o Prettier. Checá-los obrigaria a reformatar toda a documentação no PR do setup.

## Decisão

O `.prettierignore` deixa de fora a pasta `docs/` e os arquivos `*.md`. O Prettier formata só o código e os arquivos de configuração.

## Consequências

- O PR do setup fica só com código e configuração, sem reformatar a documentação.
- A formatação dos Markdown continua manual, como até agora.
- Se a documentação passar a ser formatada pelo Prettier, isso vira um novo ADR, com a reformatação num PR próprio.
