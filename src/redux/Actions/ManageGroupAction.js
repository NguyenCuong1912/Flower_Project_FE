
import { message } from 'antd';
import { history } from '../../App';
import { manageGroupService } from '../../services/ManageGroupService';
import { _admin, _group } from '../../utils/util/ConfigPath';
import { GET_ALL_GROUP, GET_DETAIL_GROUP } from './../Types/ManageGroupType';


export const AddGroupAction = (data) => {
    return async dispatch => {
        try {
            const result = await manageGroupService.addGroup(data);
            if (result.status === 200) {
                await message.success("Thêm mới thành công!")
                history.push(`${_admin}${_group}`)
            }
            else {
                message.error("Thêm mới thất bại!")
            }
        } catch (error) {
            message.error("Loại hoa này đã tồn tại!")
            console.log('error', error.response?.data)
        }
    }
}

export const GetAllAction = () => {
    return async dispatch => {
        try {
            const result = await manageGroupService.getAll();
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_GROUP,
                    dataGroup: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const GetDetailGroupAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageGroupService.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_GROUP,
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


export const DeleteGroup = (id) => {
    return async dispatch => {
        try {
            const result = await manageGroupService.delGroup(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            message.warning('Xóa thất bại!')
            console.log('error', error.response?.data)

        }
    }
}