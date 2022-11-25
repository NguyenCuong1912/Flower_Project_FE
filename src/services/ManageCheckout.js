
import { baseService } from './baseService';
class CheckoutServices extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    // eslint-disable-next-line no-unreachable
    checkout = (data) => {
        return this.post('api/Checkout', data)
    }

    getCheckout = () => {
        return this.get(`api/Checkout`)
    }

    getCheckoutDetail = (id) => {
        return this.get(`api/Checkout/Detail/${id}`)
    }

}
export const checkoutServices = new CheckoutServices();