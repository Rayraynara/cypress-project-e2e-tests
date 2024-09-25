describe('Login', () => {
    beforeEach(() => {
      cy.visit('localhost:3000') // Visita a página de login antes de cada teste
    })
  
    it('Cenário de Sucesso', () => {
      cy.get('#username').type('RayMartins')
      cy.get('#password').type('ray123')
      cy.get('[data-test="signin-submit"]').click()
    })
  
    it('Cenário de Erro', () => {
      cy.get('#username').type('RayMartinss')
      cy.get('#password').type('ray1234')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="signin-error"]')
    })
  })
  