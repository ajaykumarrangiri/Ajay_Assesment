import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";

const loginPage = new LoginPageAction();

Given("I have opened the Insurance application", () => {
    loginPage.navigateToURL();
});

When("I enter {string} as eamil and {string} as password", (email, pwd) => {
    loginPage.enterLoginDetails(email, pwd);
});

And("I click on login button", () => {
    loginPage.clickLogin();
    cy.wait(1000*3);
});

Then("I am not able to login to application", () => {
    cy.get('span > b')
    .should("be.visible");
});