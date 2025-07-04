Cypress.Commands.add("criar_usuario", (user) => {
  cy.api({
    method: "POST",
    url: "https://serverest.dev/usuarios",
    body: user,
  }).then((response)=>{return response})
})
Cypress.Commands.add("buscar_usuario", (id) => {
  cy.api({
    method: "GET",
    url: `https://serverest.dev/usuarios/` + id,
  }).then((response)=>{return response})
})
Cypress.Commands.add("criar_usuario", (atualiza) => {
  cy.api({
      method:'PUT',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`,
      body:atualiza,
  }).then((response)=>{return response})
})
Cypress.Commands.add("criar_produto", (cadastro) => {
  cy.api({
    method: "POST",
    url: "https://serverest.dev/produtos",
    body: cadastro,
    headers:{authorization: Cypress.env('token')} 
  }).then((response)=>{return response})
})
Cypress.Commands.add("buscar_produto", (id) => {
  cy.api({
    method: "GET",
    url: `https://serverest.dev/produtos/` + idProduto,
  }).then((response)=>{return response})
})