# ADR 0033: Tom de voz: parceiro de treino

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O Live Run conversa com o usuário em mensagens da caixa de entrada, avisos, propostas de ajuste e na conversa livre com a IA. O público é misto: iniciantes e corredores experientes (concepção, card 2). Foram avaliados três tons: parceiro de treino, treinador técnico e motivador.

## Decisão

O tom de voz é de **parceiro de treino**:

- Próximo e direto: trata o usuário por "você", com frases curtas.
- Não julga: treino não feito é tratado com naturalidade ("tudo bem"), sem culpa.
- Reforça o controle do usuário: sempre diz o que mudou e oferece desfazer, aceitar, editar ou descartar (ADRs 0017 e 0018).
- Avisos de risco e menções a dor ou lesão usam um tom mais sério e cuidadoso, sem perder a proximidade (ADRs 0017 e 0028).
- Sem emojis nas mensagens: a proximidade vem do texto, e os ícones da identidade visual cumprem o papel visual. Emojis aparecem diferente no iOS e no Android e destoam dos avisos sérios.

Exemplo: "Ontem não rolou o treino, tudo bem. Passei o intervalado para sexta e deixei a quinta leve. Quer desfazer?"

## Consequências

- Os textos fixos do app e os prompts da IA (`packages/ai-provider`) seguem este tom.
- Os testes do provedor de IA podem conferir o formato das respostas (ex.: sempre informar o que mudou), mas não o estilo exato do texto.
