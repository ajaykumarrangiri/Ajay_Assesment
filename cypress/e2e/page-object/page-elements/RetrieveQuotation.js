const locators = require("../../../locators/locators.json");

export default class RetrieveQuotation {
    retrieveQuoTab(){
        return cy.get(locators.RetrieveQuotation.retrieveQuoTab);
    }
    
    idInpt() {
        return cy.get(locators.RetrieveQuotation.idInpt);
    }

    retrieveBtn() {
        return cy.get(locators.RetrieveQuotation.retrieveBtn);
    }
}