# ADR 0150: Aviso neutro de falha do Strava

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0049](0049-falha-de-sincronizacao-suspende-nao-feito.md) e [ADR 0138](0138-identidade-visual.md)

## Contexto

Quando o app não consegue falar com o Strava, o Hoje mostra um aviso no topo com o botão para reconectar (ADR 0049). Na tela Hoje em alta fidelidade (ADR 0148), o aviso era uma proposta nova, sem ADR. O vermelho do app é reservado para risco de dor, lesão e carga (ADR 0142), e uma falha de conexão não é risco.

## Decisão

O aviso de falha do Strava é um **aviso neutro**:

- Bloco com fundo `neutro-suave`, cantos `raio-card` (16 px) e padding de 16 px, sem contorno.
- Título em negrito, 15 px, em `texto`, com o ícone Phosphor `cloud-slash` de 20 px na frente: "Não conseguimos falar com o Strava".
- Texto de apoio de 13 px em `texto-secundario`.
- Botão principal "Reconectar o Strava": pílula em `primaria`, texto em `sobre-primaria`, 44 px de altura.
- Fica no topo do Hoje, acima do card do treino.
- Contrastes: título 15,2:1 (claro) e 12,4:1 (escuro); texto de apoio 5,9:1 e 6,2:1; texto do botão 7,1:1 e 9,1:1.

## Consequências

- O app tem dois tipos de aviso: o neutro, para falhas e informações, e o de risco, em `risco-suave` com contorno `risco`, só para dor, lesão e carga.
- O design system Live Run ganha o componente AvisoNeutro (ADR 0143), que pode ser usado em outros avisos que não são risco.
