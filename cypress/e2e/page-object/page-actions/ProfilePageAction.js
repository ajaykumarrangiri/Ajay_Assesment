import ProfilePage from "../page-elements/ProfilePage";

export default class ProfilePageAction {
    constructor() {
        this.profilePage = new ProfilePage();
    }

    clickProfileTab() {
        this.profilePage.profileTab().click();
    }
}