import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import ProfilePageAction from "../../../page-object/page-actions/ProfilePageAction";
import { getEnvVar } from "../../../../utils/fetch-test-data";

const loginPage = new LoginPageAction();
const profile = new ProfilePageAction();

Given("I have logged into Insurance application", () => {
    loginPage.navigateToURL();
    loginPage.enterLoginDetails(getEnvVar("username"), getEnvVar("password"));
    loginPage.clickLogin();
    cy.wait(1000*3);
});

When("I click on Profile Tab", () => {
    profile.clickProfileTab();
});

Then("I am able to redirect to profile page", () => {
    cy.get('div[id = tabs-4] > p > strong').eq(1)
    .should("be.visible");
});