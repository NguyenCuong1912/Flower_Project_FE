import { baseService } from "./baseService";

export class ManageProductService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addProduct = (dataProduct) => {
        return this.post(`api/Product`, dataProduct)
    }




}

export const manageProductService = new ManageProductService();