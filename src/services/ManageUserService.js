
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

}

export const manageUserService = new ManageUserService();