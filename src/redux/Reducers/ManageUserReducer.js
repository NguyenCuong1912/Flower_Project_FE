import { GET_ALL_USER, SET_LOGIN } from "../Types/ManageUserType"


const initialState = {
    lstUser: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManageUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            state.lstUser = action.dataSignIn
            return { ...state }
        }

        case GET_ALL_USER: {
            state.lstUser = action.dataUser
            return { ...state }
        }
        default:
            return state
    }
}
