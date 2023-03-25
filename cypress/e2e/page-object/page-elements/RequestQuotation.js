const locators = require("../../../locators/locators.json");

export default class RequestQuotation {
    requestQuoTab() {
        return cy.get(locators.RequestQuotatuion.requestQuoTab);
    }

    saveQuoBtn() {
        return cy.get(locators.RequestQuotatuion.saveQuotation);
    }
}