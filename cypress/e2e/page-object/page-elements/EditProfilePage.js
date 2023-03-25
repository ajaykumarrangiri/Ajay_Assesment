const locators = require("../../../locators/locators.json");

export default class EditProfilePage{
    editProfileTab() {
        return cy.get(locators.EditProfile.editProfileTab);
    }

    surNameInpt() {
        return cy.get(locators.EditProfile.surname);
    }

    firstNameInpt() {
        return cy.get(locators.EditProfile.firstName);
    }

    phoneInpt() {
        return cy.get(locators.EditProfile.phoneNum);
    }

    year() {
        return cy.get(locators.EditProfile.yearDOB);
    }

    yearopt() {
        return cy.get(locators.EditProfile.yearOpt);
    }

    updateProfileBtn() {
        return cy.get(locators.EditProfile.updateUserBtn);
    }
}