
import { manageUserService } from "../../services/ManageUserService";
import { history } from './../../App';
import { message } from 'antd';
import { GET_ALL_USER, SET_LOGIN } from './../Types/ManageUserType';
import { _login, _home, _admin, _account } from './../../utils/util/ConfigPath';

export const RegisterAction = (dataSignUp) => {
    return async dispatch => {
        try {
            const result = await manageUserService.signUp(dataSignUp);
            if (result.status === 201) {
                await message.success("Đăng ký tài khoản thành công!")
                history.push(`${_login}`)
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
                    history.push(`${_admin}${_account}`)
                }
                else {
                    await message.success("Đăng nhập thành công!")
                    history.push(`${_home}`)
                }

            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const GetListUserAction = () => {
    return async dispatch => {
        try {
            const result = await manageUserService.getAll();
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_USER,
                    dataUser: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}


export const DeleteUser = (id) => {
    return async dispatch => {
        try {
            const result = await manageUserService.delUser(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetListUserAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

