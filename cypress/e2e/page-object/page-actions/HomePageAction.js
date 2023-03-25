import HomePage from "../page-elements/HomePage";

export default class HomePageAction {
    constructor() {
        this.homePage = new HomePage();
    }

    clickHomeTab() {
        this.homePage.homeTab().click();
    }

    clickLogout() {
        this.homePage.logoutBtn().click();
    }
}