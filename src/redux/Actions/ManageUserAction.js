
import { manageUserService } from "../../services/ManageUserService";
import { history } from './../../App';
import { message } from 'antd';
import { GET_ALL_USER, GET_DETAIL, SET_LOGIN } from './../Types/ManageUserType';
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
            message.error("Tài khoản này đã tồn tại!")
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
                if (result.data.account.Role === "ADMIN") {
                    message.success("Bạn đã đăng nhập tài khoản admin!")
                    history.push(`${_admin}${_account}`)
                }
                else {
                    message.success("Đăng nhập thành công!")
                    history.push(`${_home}`)
                }

            }
        } catch (error) {
            message.warning("Sai thông tin tài khoản hoặc mật khẩu!")
            console.log('error', error.response?.data)
        }
    }
}


export const GetListUserAction = (Username = '') => {
    return async dispatch => {
        try {
            const result = await manageUserService.getAll(Username);
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

export const AddUserAction = (data) => {
    return async dispatch => {
        try {
            const result = await manageUserService.signUp(data);
            if (result.status === 201) {
                await message.success("Thêm mới tài khoản thành công!")
                history.push(`${_admin}${_account}`)
                dispatch(GetListUserAction())
            }
            else {
                message.error("Thêm mới thất bại!")
            }

        } catch (error) {
            console.log('error', error.response?.data)
            message.error("Tài khoản này đã tồn tại!")
        }
    }
}

export const GetDetailUserAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageUserService.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL,
                    dataDetail: result.data
                })
            }
            else {
                message.warning('error!')
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const UpdateUserAction = (id, data) => {
    return async dispatch => {
        try {
            const result = await manageUserService.updateAccount(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật tài khoản thành công!")
                history.push(`${_admin}${_account}`)
            }
            else {
                message.error("Cập nhật tài khoản thất bại!")
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}
export const UpdateAccountAction = (id, data) => {
    return async dispatch => {
        try {
            const result = await manageUserService.updateAccount(id, data);
            if (result.status === 200) {

                await message.success("Cập nhật tài khoản thành công!")
                alert('Bạn cần đăng nhập lại!')
                history.push(`${_login}`)
            }
            else {
                message.error("Cập nhật tài khoản thất bại!")
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

