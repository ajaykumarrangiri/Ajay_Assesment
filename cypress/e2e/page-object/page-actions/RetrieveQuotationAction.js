import RetrieveQuotation from "../page-elements/RetrieveQuotation";

export default class RetrieveQuotationAction {
    constructor() {
        this.retrieveQuotation = new RetrieveQuotation();
    }

    clickRetrieveQuoTab() {
        this.retrieveQuotation.retrieveQuoTab().click();
    }

    retrieveQuo(id) {
        this.retrieveQuotation.idInpt().type(id);
        this.retrieveQuotation.retrieveBtn().click();
    }
}