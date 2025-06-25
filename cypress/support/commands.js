Cypress.Commands.add('criar_usuario',(user)=>{
    cy.api({
      method:'POST',
      url:'https://serverest.dev/usuarios',
      body: user
      

})
})
Cypress.Commands.add('buscar_usuario',(id)=>{
   cy.api({
      method:'GET',
      url:`https://serverest.dev/usuarios/`+id
      
    })
      

})

