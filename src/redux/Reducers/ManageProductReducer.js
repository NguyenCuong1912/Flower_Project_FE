import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT, LIST_CART, SET_CART } from "../Types/ManageProductType"

let cartDefault = [];
if (sessionStorage.getItem(LIST_CART)) {
    cartDefault = JSON.parse(sessionStorage.getItem(LIST_CART))
}

const initialState = {
    lstProduct: [],
    detailProduct: [],
    lstCart: cartDefault,
    newCart: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManageProductReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCT: {
            state.lstProduct = action.dataProduct
            return { ...state }
        }

        case GET_DETAIL_PRODUCT: {
            state.detailProduct = action.dataDetail

            return { ...state }
        }

        case SET_CART: {
            const { dataCart } = action;
            let cart = [];
            cart.push(state.lstCart);
            cart.push(dataCart);
            sessionStorage.setItem(LIST_CART, JSON.stringify(cart));
            return { ...state, lstCart: cart }
        }


        default:
            return state
    }
}
