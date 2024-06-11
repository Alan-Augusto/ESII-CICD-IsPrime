# 🧪 ESII-CICD-ValidationCPF

Este repositório contém o projeto **ESII-CICD-ValidationCPF**, desenvolvido como parte do curso de Engenharia de Software II na Universidade Federal de Minas Gerais (UFMG). O objetivo principal deste trabalho é aplicar e demonstrar o uso de CI/CD com GitHub Actions.

## 📋 Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [CI/CD com GitHub Actions](#cicd-com-github-actions)
- [Contribuição](#contribuição)

## 🌟 Introdução

Este projeto implementa uma simples validação de CPF (Cadastro de Pessoas Físicas) no Brasil. Inclui uma interface web para entrada de CPF e validação, além de testes automatizados para garantir a precisão da validação.

## ⚙️ Funcionalidades

- Validação de CPF.
- Interface web para entrada e validação de CPF.
- Testes automatizados utilizando Jest.
- Integração e entrega contínuas (CI/CD) utilizando GitHub Actions.

## 🛠️ Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/Alan-Augusto/ESII-CICD-ValidationCPF.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd ESII-CICD-ValidationCPF
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## 🚀 Uso

1. Abra o arquivo `index.html` em seu navegador preferido.
2. Insira um CPF no campo fornecido.
3. Clique no botão "Validar" para verificar se o CPF é válido.

## 📂 Estrutura do Projeto

```
/ESII-CICD-ValidationCPF
|-- .github/
|   |-- workflows/
|       |-- ci.yml
|-- src/
|   |-- validarCPF.js
|-- tests/
|   |-- validarCPF.test.js
|-- .gitignore
|-- jest.config.js
|-- package-lock.json
|-- package.json
|-- README.md
|-- styles.css
|-- index.html
```

## 🔄 CI/CD com GitHub Actions

Este projeto utiliza GitHub Actions para CI/CD. O workflow definido em `.github/workflows/ci.yml` é acionado a cada push ou pull request na branch `main`. O workflow realiza os seguintes passos:

1. Configura o ambiente para Ubuntu, macOS e Windows.
2. Instala as dependências do projeto.
3. Executa os testes automatizados.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o repositório.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

Elab por Alan Augusto para o curso de Engenharia de Software II na UFMG.
