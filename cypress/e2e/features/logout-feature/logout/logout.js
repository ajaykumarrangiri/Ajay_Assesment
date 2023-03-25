import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import HomePageAction from "../../../page-object/page-actions/HomePageAction";
import { getEnvVar } from "../../../../utils/fetch-test-data";

const loginPage = new LoginPageAction();
const home = new HomePageAction();

Given("I have logged into Insurance application", () => {
    loginPage.navigateToURL();
    loginPage.enterLoginDetails(getEnvVar("username"), getEnvVar("password"));
    loginPage.clickLogin();
    cy.wait(1000*3);
});

When("I click on logout button", () => {
    home.clickLogout();
});

Then("I am able to redirect to Login page", () => {
    cy.get('div > h3')
    .should("be.visible")
    .and("contain", "Login");
});