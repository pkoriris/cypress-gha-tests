export class registerPage{

    weblocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        phoneNumber:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        // radioButton:'input[type="radio"]',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }
    openURL(){

        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName) {

       cy.get(this.weblocators.firstName).type(FName)

    }
    enterlastName(LName) {

        cy.get(this.weblocators.lastName).type(LName)
        
      }
      enteremail(email) {

        cy.get(this.weblocators.email).type(email)
        
      }  
      enterphoneNumber(phoneNo) {

        cy.get(this.weblocators.phoneNumber).type(phoneNo)
        
      }  
      enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
      }  
      selectCheckbox() {

        cy.get(this.weblocators.policyCheckbox).check()
        
      }  
      clickonContinue() {

        cy.get(this.weblocators.continue).click()
        
      } 
}