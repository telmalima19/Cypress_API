describe('Teste API', () => {
  it('Criar Usuarios', () => {
    cy.fixture('usuario').then(function(usuario){ 
      const user = usuario.body_usuario
    cy.criar_usuario(user)
        }).then((response)=>{
      expect(response.status).to.eq(201)
      expect (response.body.message).to.eq('Cadastro realizado com sucesso')
      Cypress.env('id',response.body._id)
   })     

  })
  it('Buscar Usuario', () => {
   const id = Cypress.env('id')
    cy.buscar_usuario(id)
      .then((response)=>{
      expect(response.status).to.eq(200)
        
  })
  })
  it('Listar Usuario', () => {
      const id = ''
    cy.buscar_usuario(id)
      .then((response)=>{
      expect(response.status).to.eq(200)

  })
  })
  it('Atualizar Usuario', () => {
    cy.api({
      method:'PUT',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`,
      body:{
        "nome":"telma lima qa",
        "email": "telma.lima.qa@gmail.com.br",
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
