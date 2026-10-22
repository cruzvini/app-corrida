# ADR 0076: Testes da integração com o Strava sem depender do Strava real

- **Status:** Aceita
- **Data:** 2026-10-22
- **Complementa:** [ADR 0011](0011-estrategia-de-testes-piramide.md)

## Contexto

Testes contra a API real consomem a cota, exigem segredos no CI e quebram quando o Strava está instável.

## Decisão

O cliente do Strava fica atrás de uma interface, como o provedor de IA (ADR 0005).

- **Unitários:** motor de regras e conciliação (ADR 0073) sobre um Strava falso.
- **Integração:** o cliente real contra um servidor HTTP simulado, cobrindo token vencido, 401, 429 e Strava fora do ar.
- **E2E:** o app com o Strava falso.
- **Fixtures:** feitas à mão, seguindo o formato da API, **sem dados pessoais no repositório**. Incluem os casos difíceis: relógio atrasado, atividade apagada, tipo trocado e atividade privada.
- **Teste manual (smoke):** com a conta real do desenvolvedor antes de cada entrega do épico.

## Consequências

- O CI não precisa de segredos do Strava.
- O filtro de dados enviados à IA (ADR 0066) também é coberto por testes unitários.
