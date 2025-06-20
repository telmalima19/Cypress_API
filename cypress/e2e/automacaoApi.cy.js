describe('Teste API', () => {
  it.only('Criar Usuarios', () => {
    cy.request({
      method:'POST',
      url:'https://serverest.dev/usuarios',
      body:{
        "nome":"testeasdsjk",
        "email": "testeii@gmail.com",
        "password": "teste",
        "administrador": "true"
      }
    }).then((response)=>{
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')

  })
  })
})