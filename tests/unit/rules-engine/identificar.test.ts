// Teste de fumaça do pacote (ADR 0136). Roda quando o Jest for configurado (card #18).
import { describe, expect, it } from '@jest/globals';

import { identificar } from '@app-corrida/rules-engine';

describe('identificar', () => {
  it('retorna o nome do pacote', () => {
    expect(identificar()).toBe('@app-corrida/rules-engine');
  });
});
