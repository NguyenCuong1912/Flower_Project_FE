import { ADD_CART, CLEAR_CART, DELETE_CART, UPDATE_CART, GET_LIST_CART, GET_CHECKOUT_DETAIL } from './../Types/ManageCartType';

const initialState = {
    cart: [
        // {
        //     Description: "Wedding",
        //     Discount: 10,
        //     Price: "100000",
        //     ProductImage: "public/images/products/1668046222906_galaxy-cinema.png",
        //     ProductName: "Flower Wedding",
        //     Product_ID: 2,
        //     Quantity: 2,
        // }
    ],
    lstCart: [],
    lstCheckoutDetail: []
}



// eslint-disable-next-line import/no-anonymous-default-export
export const ManageCartReducer = (state = initialState, { type, data }) => {
    switch (type) {

        case ADD_CART:
            let newCart = [...state.cart]
            const _product = {
                Product_ID: data.item.id,
                Price: data.item.Price,
                Quantity: data.number,
                ProductImage: data.item.ProductImage,
                ProductName: data.item.ProductName,
                Description: data.item.Description,
                Discount: data.item.Discount
            }
            const index = newCart.findIndex(product => product.Product_ID === data.item.id)
            if (index > -1) {
                newCart[index].Quantity += data.number
            } else {
                newCart.push(_product)
            }
            return { ...state, cart: newCart }


        case UPDATE_CART: {
            let updateCart = [...state.cart]
            const index = updateCart.findIndex(product => product.Product_ID === data.id)
            if (index > -1) {
                updateCart[index].Quantity += data.soLuong;
                if (updateCart[index].Quantity < 1) {
                    updateCart[index].Quantity = 1;

                }
            }
            return { ...state, cart: updateCart }
        }

        case DELETE_CART: {
            let deleteCart = [...state.cart]
            const index = deleteCart.findIndex(product => product.Product_ID === data.id)
            if (index > -1) {
                deleteCart.splice(index, 1)
            }
            return { ...state, cart: deleteCart }
        }
        case CLEAR_CART:
            return { ...state, cart: [] }

        case GET_LIST_CART: {
            state.lstCart = data
            return { ...state }
        }
        case GET_CHECKOUT_DETAIL: {
            state.lstCheckoutDetail = data
            return { ...state }
        }
        default:
            return state
    }
}
