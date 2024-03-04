import {LoginPage} from "./pages/login_page.js";


let URL = 'https://opensource-demo.orangehrmlive.com/';
let username = 'Admin';
let password = 'admin123';

it('POM Demo', function(){
    cy.visit(URL);
    const loginPage = new LoginPage();
    
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();

})