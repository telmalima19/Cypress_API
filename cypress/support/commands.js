Cypress.Commands.add('criar_usuario',(user)=>{
    cy.api({
      method:'POST',
      url:'https://serverest.dev/usuarios',
      body: user
      

})
})
