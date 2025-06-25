describe('Teste API', () => {
  it('Criar Usuarios', () => {
        cy.api({
      method:'POST',
      url:'https://serverest.dev/usuarios',
      body:  { 
        "email": "tsese54twedw2wwww2q25e1iippxqtzax2@1gmail.com",
        "nome": "testeasds1jkxoaqt",
        "password": "teste",
        "administrador": "true"
        }
    }).then((response)=>{
      expect(response.status).to.eq(201)
      expect (response.body.message).to.eq('Cadastro realizado com sucesso')
      Cypress.env('id',response.body._id)
})
  })
  it('Buscar Usuario', () => {
    cy.api({
      method:'GET',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`
      
    }).then((response)=>{
      expect(response.status).to.eq(200)

  })
  })
   
  it('Atualizar Usuario', () => {
    cy.api({
      method:'PUT',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`,
      body:{
        "nome":"axsw",
        "email": "tes22teaiippxaaa@agmail.com",
        "password": "teste",
        "administrador": "true"
      }
      
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')

  })
  })
  it('Excluir Usuario', () => {
    cy.api({
      method:'DELETE',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`,
      
      
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')

  })
  })
})

