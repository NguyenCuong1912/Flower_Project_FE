
import { CLEAR_CART } from '../Types/ManageCartType';
import { checkoutServices } from './../../services/ManageCheckout';
import { history } from './../../App';
import { _home } from './../../utils/util/ConfigPath';
export const CheckoutAction = (data) => {
    return async (dispatch) => {
        const id = JSON.parse(sessionStorage.getItem("USER_LOGIN")).account.id
        try {
            const dataCheckout = {
                Account_ID: id,
                ListProduct: data
            }
            const result = await checkoutServices.checkout(dataCheckout);
            if (result.status === 200) {
                dispatch({
                    type: CLEAR_CART
                })
                alert("Thanh toán thành công")
                history.push(`${_home}`)
            } else {

            }
        } catch (error) {

        }
    }
}