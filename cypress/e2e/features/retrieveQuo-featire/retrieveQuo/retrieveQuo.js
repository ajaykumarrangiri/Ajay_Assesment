import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import RetrieveQuotationAction from "../../../page-object/page-actions/RetrieveQuotationAction";
import { getEnvVar } from "../../../../utils/fetch-test-data";

const loginPage = new LoginPageAction();
const retrieveQuo = new RetrieveQuotationAction();

Given("I have logged into Insurance application", () => {
    loginPage.navigateToURL();
    loginPage.enterLoginDetails(getEnvVar("username"), getEnvVar("password"));
    loginPage.clickLogin();
    cy.wait(1000*3);
});

When("I click on Retrieve Quotation Tab", () => {
    retrieveQuo.clickRetrieveQuoTab();
});

And("I enter {string} ID and click on Retrieve button", (id) => {
    retrieveQuo.retrieveQuo(id);
});

Then("I am able to Retrieve the Quotation", () => {
    cy.get('body > b')
    .should("be.visible");
});