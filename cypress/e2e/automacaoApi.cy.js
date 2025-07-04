describe('Teste API', () => {
  it('Criar Usuário', () => {
    cy.fixture('usuario').then(function(usuario) {
      const user = usuario.body_usuario
      cy.criar_usuario(user).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('id', response.body._id)
      })
    })
  })

  it('Busca Usuário po ID', () => {
   const id = Cypress.env('id')
    cy.buscar_usuario(id)
      .then((response)=>{
      expect(response.status).to.eq(200)
        
  })
  })
  it('Lista Usuário', () => {
      const id = ''
    cy.buscar_usuario(id)
      .then((response)=>{
      expect(response.status).to.eq(200)

  })
  })   
  it('Atualiza Usuário', () => {
    cy.fixture('usuario').then(function(usuario){ 
      const atualiza = usuario.atualizar_usuario
    cy.criar_usuario(atualiza)         
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')

  })
  })
 

    it('Realiza login no sistema', () => {
    cy.fixture('usuario').then(function(usuario) {
      const login = usuario.atualizar_usuario.email
      const senha = usuario.atualizar_usuario.password
      cy.api({
      method:'POST',
      url:'https://serverest.dev/login',
      body: {email: login, password: senha
      }}).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')
        Cypress.env('token', response.body.authorization)
      
    })
  })
  })
    it('Cadstro Produto', () => {
    cy.fixture("produto").then(function(produto) {
      const cadastro = produto.body_produto
      cy.criar_produto(cadastro).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('idProduto', response.body._id)
      })
    })
  }) 
  it('Listar Produto', () => {
    cy.api({
      method: "GET",
      url: 'https://serverest.dev/produtos/',
    }).then((response)=>{
        expect(response.status).to.eq(200) 
      })
})

  it('Busca produto po ID', () => {
    cy.api({
      method: "GET",
      url: `https://serverest.dev/produtos/${Cypress.env('idProduto')}`,
    }).then((response)=>{
        expect(response.status).to.eq(200) 
      })
})
  it('Exclui produto', () => {
    cy.api({
      method:'DELETE',
      url:`https://serverest.dev/produtos/${Cypress.env('idProduto')}`,
      headers:{authorization: Cypress.env('token')}
      
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')

  })
  })

  it('Exclui Usuário', () => {
    cy.api({
      method:'DELETE',
      url:`https://serverest.dev/usuarios/${Cypress.env('id')}`,
      
      
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')

  })
  })
 
 
 }) 
 