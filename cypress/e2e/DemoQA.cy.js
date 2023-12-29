describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Karthika')
    cy.get('#lastname').type('Muthusamy')
    cy.get('#email_address').type('dummy@gmail.com')
    cy.get('#password').type('Personal@12')
    cy.get('#password-confirmation').type('Personal@12')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
     })
})