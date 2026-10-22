# ADR 0074: Tokens do Strava cifrados com o Supabase Vault

- **Status:** Aceita
- **Data:** 2026-10-22

## Contexto

Os tokens do Strava ficam só no backend, e o app nunca os vê. O token de acesso vale cerca de 6h, e o refresh token dá acesso contínuo, inclusive às atividades privadas (ADR 0072). O projeto segue o princípio de **custo zero na primeira validação**: etapas pagas só entram com aprovação.

## Decisão

- Os tokens ficam numa **tabela em schema privado**, fora da API exposta, acessada só pelas Edge Functions com a chave de serviço.
- Os tokens são **cifrados com o Supabase Vault**, se ele estiver disponível sem custo no plano gratuito. Caso contrário, ficam sem criptografia, e a criptografia volta a ser avaliada antes de abrir para amigos e família.
- **Renovação:** antes de cada consulta, se o token estiver perto de vencer, o backend renova e salva o novo par.
- **Desconectar o Strava** no Perfil revoga o acesso no Strava e apaga os tokens.

## Consequências

- Um vazamento do banco ou de backup não entrega tokens utilizáveis.
- A disponibilidade do Vault no plano gratuito é confirmada no épico 4, ao criar o projeto.
- Falhas de renovação seguem o ADR 0049.
