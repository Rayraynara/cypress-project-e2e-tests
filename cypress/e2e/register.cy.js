describe('Registro', () => {
  beforeEach(() => {
    cy.visit('localhost:3000') 
  })
  it('Cenário de Sucesso', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('User')  
    cy.get('#lastName').type('Test')  
    cy.get('#username').type('UserTest')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')    
    cy.get('[data-test="signup-submit"]').click()
  })

  it('Cenário de Erro', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('User')  
    cy.get('#lastName').type('Test')  
    cy.get('#username').type('UserTest')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123467')    
    cy.get('[data-test="signup-submit"]').click()
    cy.get('.SignInForm-paper')
  })
})