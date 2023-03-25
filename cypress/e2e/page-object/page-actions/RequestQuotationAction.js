import RequestQuotation from "../page-elements/RequestQuotation";

export default class RequestQuotationAction {
    constructor() {
        this.requestQuotation = new RequestQuotation();
    }

    clickRequestQuoTab() {
        this.requestQuotation.requestQuoTab().click();
    }

    clickSaveQuo() {
        this.requestQuotation.saveQuoBtn().click();
        cy.wait(1000*3);
    }
}