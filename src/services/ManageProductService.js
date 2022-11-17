import { baseService } from "./baseService";

export class ManageProductService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addProduct = (dataProduct) => {
        return this.post(`api/Product`, dataProduct)
    }

    getAll = (name) => {
        if (name) {
            console.log("aaa")
            return this.get(`api/Product?name=${name}`)
        } else {
            console.log("bb")
            return this.get(`api/Product`)
        }
    }

    getDetail = (id) => {
        return this.get(`api/Product/${id}`)
    }

    updateProduct = (id, data) => {
        return this.put(`api/Product/${id}`, data)
    }

    delProduct = (id) => {
        return this.put(`api/Product/Delete/${id}`)
    }

}

export const manageProductService = new ManageProductService();