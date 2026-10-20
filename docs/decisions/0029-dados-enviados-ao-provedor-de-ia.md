# ADR 0029: Dados enviados ao provedor de IA

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

A IA monta e ajusta os planos (ADR 0022) e interpreta o feedback do usuário (ADR 0028). Para isso, ela precisa de dados do usuário. Pela LGPD, dados de saúde (peso, idade, treinos, relatos de dor) são dados pessoais sensíveis. As opções eram: enviar só o necessário sem identificação, enviar tudo incluindo identificação, ou enviar apenas dados agregados.

## Decisão

O app envia ao provedor de IA todos os dados relevantes do usuário, **incluindo dados de identificação** (ex.: nome, e-mail, ID do Strava), além de perfil, histórico de treinos, plano e feedbacks.

## Consequências

- A implementação fica mais simples: não é preciso separar ou mascarar campos antes de chamar a IA.
- O provedor de IA passa a tratar dados pessoais sensíveis identificados. Isso precisa ser informado de forma clara no consentimento do usuário, principalmente ao abrir para amigos e família.
- A política de uso e retenção de dados do provedor (ex.: a API da Anthropic) deve ser verificada e registrada antes da implementação.
- Em caso de vazamento no provedor, os dados ficam associados a uma pessoa identificável.
- A chave da API fica só no backend (ADR 0005). O app cliente nunca chama a IA diretamente.
- Essa decisão difere do princípio de minimização da LGPD e deve ser reavaliada antes de abrir o app para outras pessoas.
