
import { baseService } from "./baseService";

export class ManageUserService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    signUp = (dataSignUp) => {
        return this.post(`api/Account/SignUp`, dataSignUp)
    }

    signIn = (dataSignIn) => {
        return this.post(`api/Account/SignIn`, dataSignIn)
    }

    getAll = (Username) => {
        if (Username) {
            return this.get(`api/Account?Username=${Username}`)
        } else {
            return this.get(`api/Account`)
        }
    }

    getDetail = (id) => {
        return this.get(`api/Account/${id}`)
    }

    updateAccount = (id, data) => {
        return this.put(`api/Account/${id}`, data)
    }

    delUser = (id) => {
        return this.put(`api/Account/Delete/${id}`)
    }


}

export const manageUserService = new ManageUserService();