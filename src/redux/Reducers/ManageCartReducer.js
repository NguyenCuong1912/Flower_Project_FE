import { ADD_CART, CLEAR_CART, DELETE_CART, UPDATE_CART } from './../Types/ManageCartType';

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
    ]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, data }) => {
    switch (type) {

        case ADD_CART:
            let newCart = [...state.cart]
            const _product = {
                Product_ID: data.id,
                Price: data.Price,
                Quantity: 1,
                ProductImage: data.ProductImage,
                ProductName: data.ProductName,
                Description: data.Description,
                Discount: data.Discount
            }
            const index = newCart.findIndex(product => product.Product_ID === data.id)
            if (index > -1) {
                newCart[index].Quantity += 1
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
            console.log(index)
            if (index > -1) {
                deleteCart.splice(index, 1)
            }
            return { ...state, cart: deleteCart }
        }
        case CLEAR_CART:
            return { ...state, cart: [] }
        default:
            return state
    }
}
