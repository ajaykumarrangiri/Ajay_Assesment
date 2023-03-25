import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import EditProfilePageAction from "../../../page-object/page-actions/EditProfilePageAction";
import { getEnvVar } from "../../../../utils/fetch-test-data";

const loginPage = new LoginPageAction();
const editProfile = new EditProfilePageAction();

Given("I have logged into Insurance application", () => {
    loginPage.navigateToURL();
    loginPage.enterLoginDetails(getEnvVar("username"), getEnvVar("password"));
    loginPage.clickLogin();
    cy.wait(1000*3);
});

When("I click on Edit Profile Tab", () => {
    editProfile.clickEditProfileTab();
});

And("I enter details and click on update button", () => {
    editProfile.enterUserDetails();
    editProfile.clickUpdateBtn();
});

Then("I am able to update profile", () => {
    cy.get('div > h1')
    .should("be.visible")
    .and("contain", "Editing user profile");
});