import { registerPage } from "../../pages/registerPage"

//initialize
const registerObj=new registerPage()
import registerData from '../../fixtures/registerData.json'

describe ('test automation',()=>{

    it('register flow',()=>{
     registerObj.openURL()
     registerObj.enterFirstName(registerData.firstName)
     registerObj.enterlastName(registerData.lastName)
     registerObj.enteremail(registerData.email)
     registerObj.enterphoneNumber(registerData.phoneNumber)
     registerObj.enterPassword(registerData.password)
     registerObj.selectCheckbox()
     registerObj.clickonContinue()


    })
})