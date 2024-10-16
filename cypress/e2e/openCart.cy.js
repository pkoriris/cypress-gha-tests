import {faker} from '@faker-js/faker'

describe('Registration Flow', () => {
    let password =faker.internet.password()
    // //steps
    // it('Testcase1', () => {
    //   cy.visit('/web/index.php/auth/login')
    // })

    it('Enter form details', () => {
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
      cy.get('input-firstname').type('Isaiah')
      cy.get('input-lastname').type('Ronoh')
      cy.get('input-email').type('isaiahkipkorir1994@gmail.com')
      cy.get('input-telephone').type('070')
      cy.get('input-password').type('Isaiah')
      cy.get('input-confirm').type('Isaiah')
      cy.get('input[type="radio"]').eq(1).check()
      cy.get('input[type="checkbox"]').check()
      cy.get('.btn btn-primary').click()
      cy.contains('Your Account Has Been Created!').should('exist')

  })
 
  })