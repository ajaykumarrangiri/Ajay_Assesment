import LoginPage from "../page-elements/loginPage";
import { getEnvVar } from "../../../utils/fetch-test-data";

export default class LoginPageAction {
    constructor() {
        this.loginPage = new LoginPage();
    }

    navigateToURL() {
        cy.visit(getEnvVar("url"));
    }

    enterLoginDetails(email, pwd) {
        this.loginPage.username().type(email);
        this.loginPage.pasword().type(pwd);
    }

    clickLogin() {
        this.loginPage.loginBtn().click();
    }
}