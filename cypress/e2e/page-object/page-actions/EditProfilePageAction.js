import EditProfilePage from "../page-elements/EditProfilePage";

export default class EditProfilePageAction {
    constructor() {
        this.editProfilePage = new EditProfilePage();
    }

    clickEditProfileTab() {
        this.editProfilePage.editProfileTab().click();
    }

    enterUserDetails() {
        this.editProfilePage.surNameInpt().type("Rangiri");
        this.editProfilePage.firstNameInpt().type("Ajay Kumar");
        this.editProfilePage.phoneInpt().type("5632485642");
    }

    clickUpdateBtn() {
        this.editProfilePage.updateProfileBtn().click();
    }
}