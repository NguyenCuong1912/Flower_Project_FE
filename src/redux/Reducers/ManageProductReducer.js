import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../Types/ManageProductType"



const initialState = {
    lstProduct: [],
    detailProduct: [],
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


        default:
            return state
    }
}
