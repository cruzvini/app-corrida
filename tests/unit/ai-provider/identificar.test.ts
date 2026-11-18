// Teste de fumaça do pacote (ADR 0136). Sai quando o pacote ganhar testes reais.
import { describe, expect, it } from '@jest/globals';

import { identificar } from '@app-corrida/ai-provider';

describe('identificar', () => {
  it('retorna o nome do pacote', () => {
    expect(identificar()).toBe('@app-corrida/ai-provider');
  });
});
