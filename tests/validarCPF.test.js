const validarCPF = require('../src/validarCPF');

describe('Validação de CPF', () => {
  // Testes com CPFs válidos
  test('CPF válido: 12133944656', () => {
    expect(validarCPF('12133944656')).toBe(true);
  });

  test('CPF válido: 15718738645', () => {
    expect(validarCPF('15718738645')).toBe(true);
  });

  test('CPF válido: 80912095687', () => {
    expect(validarCPF('80912095687')).toBe(true);
  });

  test('CPF válido: 49294598691', () => {
    expect(validarCPF('49294598691')).toBe(true);
  });

  test('CPF válido: 97097560606', () => {
    expect(validarCPF('97097560606')).toBe(true);
  });

  // Testes com CPFs inválidos
  test('CPF inválido: 00000000001', () => {
    expect(validarCPF('00000000001')).toBe(false);
  });

  test('CPF inválido: 11111111111', () => {
    expect(validarCPF('11111111111')).toBe(false);
  });

  test('CPF inválido: 12345678900', () => {
    expect(validarCPF('12345678900')).toBe(false);
  });

  test('CPF inválido: 345678901234', () => {
    expect(validarCPF('345678901234')).toBe(false);
  });

  test('CPF inválido: 0000000000', () => {
    expect(validarCPF('0000000000')).toBe(false); // CPF sem dígitos verificadores
  });
});
