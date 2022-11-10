import { GET_ALL_GROUP, GET_DETAIL_GROUP } from './../Types/ManageGroupType';



const initialState = {
    lstGroup: [],
    detailGroup: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManageGroupReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_GROUP: {
            state.lstGroup = action.dataGroup
            return { ...state }
        }

        case GET_DETAIL_GROUP: {
            state.detailGroup = action.dataDetail
            return { ...state }
        }

        default:
            return state
    }
}
