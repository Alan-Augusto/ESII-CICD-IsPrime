function validarCPF(cpf) {
  // Remove caracteres especiais
  cpf = cpf.replace(/[^0-9]/g, '');

  // Verifica se o CPF tem o tamanho correto
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Cálculo do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  let resto = soma % 11;
  if (resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto !== parseInt(cpf[9])) return false;

  // Cálculo do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = soma % 11;
  if (resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto !== parseInt(cpf[10])) return false;

  return true;
}

module.exports = validarCPF;
