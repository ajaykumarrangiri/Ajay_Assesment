import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";

const loginPage = new LoginPageAction();

Given("I have open the Insurance application", () => {
    loginPage.navigateToURL();
});

When("I enter {string} as eamil and {string} as passwrd", (email, pwd) => {
    loginPage.enterLoginDetails(email, pwd);
});

And("I click on login buton", () => {
    loginPage.clickLogin();
    cy.wait(1000*3);
});

Then("I am able to login to application", () => {
    cy.get('h4').eq(1)
    .should("be.visible");
});