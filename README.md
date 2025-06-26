Este repositório contém a suíte de testes automatizados end-to-end utilizando o Cypress e integração contínua com GitHub Actions.

Clone este repositório com o comando:

git clone https://github.com/telmalima19/Cypress_API.git


Instale as dependências com o comando:

  npm install

  
Execute o cypress com os comandos: 


 Para abrir a interface do Cypress:
 
 npx cypress open

 
 Para rodar os testes no terminal no modo headless:
 
 npx cypress run

Estrutura do projeto:

 📁 cypress/
 
├── e2e/              # Arquivos de testes

├── fixtures/         # Dados simulados (mocks)

├── support/          # Comandos customizados e configurações

└── cypress.config.js # Arquivo de configuração do Cypress
