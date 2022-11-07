
import { manageUserService } from "../../services/ManageUserService";
import { history } from './../../App';
import { message } from 'antd';
import { SET_LOGIN } from './../Types/ManageUserType';

export const RegisterAction = (dataSignUp) => {
    return async dispatch => {
        try {
            const result = await manageUserService.signUp(dataSignUp);
            if (result.status === 201) {
                await message.success("Đăng ký tài khoản thành công!")
                history.push('/login')
            }
            else {
                message.error("Đăng ký thất bại!")
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const LoginAction = (dataSignIn) => {
    return async dispatch => {
        try {
            const result = await manageUserService.signIn(dataSignIn);
            if (result.status === 200) {
                dispatch({
                    type: SET_LOGIN,
                    dataSignIn: result.data
                })
                if (result.data.Role === "ADMIN") {
                    await message.success("Bạn đã đăng nhập tài khoản admin!")
                    history.push('/admin/account')
                }
                else {
                    await message.success("Đăng nhập thành công!")
                    history.push('/')
                }

            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

