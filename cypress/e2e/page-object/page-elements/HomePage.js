const locators = require("../../../locators/locators.json");

export default class HomePage{
    homeTab() {
        return cy.get(locators.Home.homeTab);
    }

    logoutBtn() {
        return cy.get(locators.Home.logoutBtn);
    }
}