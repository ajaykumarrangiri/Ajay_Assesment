const locators = require("../.././../locators/locators.json");

export default class ProfilePage {
    profileTab() {
        return cy.get(locators.Profile.profileTab);
    }
}