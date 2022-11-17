import { message } from "antd";
import { history } from "../../App";
import { manageProductService } from "../../services/ManageProductService";
import { _admin, _product } from "../../utils/util/ConfigPath";
import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from './../Types/ManageProductType';

export const AddProductAction = (dataProduct) => {
    return async dispatch => {
        try {
            const result = await manageProductService.addProduct(dataProduct);
            if (result.status === 200) {
                await message.success("Thêm mới thành công!")
                history.push(`${_admin}${_product}`)
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

export const GetAllProductAction = () => {
    return async dispatch => {
        try {
            const result = await manageProductService.getAll();
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    dataProduct: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const GetDetailProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageProductService.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_PRODUCT,
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

export const UpdateProductAction = (id, data) => {
    return async dispatch => {
        try {

            const result = await manageProductService.updateProduct(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật hoa thành công!")
                history.push(`${_admin}${_product}`)
            }
            else {
                message.error("Cập nhật hoa thất bại!")
            }
        } catch (error) {
            message.error("Cập nhật hoa thất bại!!")
            console.log('error', error.response?.data)

        }
    }
}

export const DeleteProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageProductService.delProduct(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllProductAction())
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