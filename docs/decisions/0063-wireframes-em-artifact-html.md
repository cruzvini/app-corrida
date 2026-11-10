# ADR 0063: Wireframes em artifact HTML de baixa fidelidade

- **Status:** Aceita
- **Data:** 2026-11-09

## Contexto

O card 4 do épico de design pede os wireframes das telas principais em baixa fidelidade, sem cor nem marca. O ADR 0012 definiu que o design é feito no Claude, sem Figma, e que os artefatos precisam ser referenciados ou exportados para `docs/`. Foram avaliados três formatos: artifact HTML, Claude em design mode e ASCII/Markdown no repositório.

## Decisão

Os wireframes são feitos como **artifact HTML** publicado no Claude, em baixa fidelidade:

- Telas no tamanho de um iPhone, em tons de cinza, sem paleta, tipografia ou ícones da marca (isso fica para o card 5).
- Textos reais no tom de parceiro de treino (ADR 0033), sem lorem ipsum.
- Cada tela indica os ADRs e critérios que ela atende, e marca os pontos ainda em aberto.
- O código-fonte do HTML fica versionado em `docs/wireframes/index.html`, e o artifact publicado é a forma de visualizar.

## Consequências

- Os wireframes podem ser abertos no navegador e no celular, e evoluem por republicação no mesmo link.
- O versionamento no repositório cumpre a consequência do ADR 0012: o histórico das telas fica no git.
- O HTML não vira código do app: as telas serão refeitas em React Native no desenvolvimento.
- O card 6 (validação) confere os wireframes contra os critérios de aceitação usando as referências marcadas em cada tela.
