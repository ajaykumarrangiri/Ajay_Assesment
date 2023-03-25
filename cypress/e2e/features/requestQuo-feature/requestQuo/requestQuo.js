import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import RequestQuotationAction from "../../../page-object/page-actions/RequestQuotationAction";
import { getEnvVar } from "../../../../utils/fetch-test-data";

const loginPage = new LoginPageAction();
const requestQuo = new RequestQuotationAction();

Given("I have logged into Insurance application", () => {
    loginPage.navigateToURL();
    loginPage.enterLoginDetails(getEnvVar("username"), getEnvVar("password"));
    loginPage.clickLogin();
    cy.wait(1000*3);
});

When("I click on Request Quotation Tab", () => {
    requestQuo.clickRequestQuoTab();
});

And("I click on save Quotation button", () => {
    requestQuo.clickSaveQuo();
});

Then("I am able to save the Quotation", () => {
    cy.get('body > b').eq(1)
    .should("be.visible");
});