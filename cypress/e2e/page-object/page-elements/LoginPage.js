const locators = require("../../../locators/locators.json");

export default class LoginPage {
    username(){
        return cy.get(locators.Login.email);
    }

    pasword(){
        return cy.get(locators.Login.password);
    }

    loginBtn(){
        return cy.get(locators.Login.loginBtn);
    }
}