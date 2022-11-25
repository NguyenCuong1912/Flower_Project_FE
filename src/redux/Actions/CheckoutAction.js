
import { CLEAR_CART, GET_CHECKOUT_DETAIL, GET_LIST_CART } from '../Types/ManageCartType';
import { checkoutServices } from './../../services/ManageCheckout';
import { history } from './../../App';
import { _home, _login } from './../../utils/util/ConfigPath';
import { message } from 'antd';


export const CheckoutAction = (data) => {
    return async (dispatch) => {
        if (JSON.parse(sessionStorage.getItem("USER_LOGIN"))) {
            const id = JSON.parse(sessionStorage.getItem("USER_LOGIN")).account.id;
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
                    alert("Thanh toán thành công!")
                    history.push(`${_home}`)
                } else {
                    alert('Thanh toán không thành công!')
                }
            } catch (error) {
                console.log('error', error.response?.data)
                message.warning('Thanh toán không thành công!')
            }
        }
        else {
            alert('Bạn phải đăng nhập trước!')
            history.push(`${_login}`)
        }
    }
}


export const GetListCheckout = () => {
    return async dispatch => {
        try {
            const result = await checkoutServices.getCheckout();
            if (result.status === 200) {
                dispatch({
                    type: GET_LIST_CART,
                    data: result.data,
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}


export const GetCheckoutDetail = (id) => {
    return async dispatch => {
        try {
            const result = await checkoutServices.getCheckoutDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_CHECKOUT_DETAIL,
                    data: result.data,
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}