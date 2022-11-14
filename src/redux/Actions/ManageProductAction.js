import { message } from "antd";
import { history } from "../../App";
import { manageProductService } from "../../services/ManageProductService";
import { _admin, _product } from "../../utils/util/ConfigPath";

export const AddProductAction = (dataProduct) => {
    return async dispatch => {
        try {
            const result = await manageProductService.addProduct(dataProduct);
            console.log({ result })
            // if (result.status === 200) {
            //     await message.success("Thêm mới thành công!")
            //     history.push(`${_admin}${_product}`)
            // }
            // else {
            //     message.error("Thêm mới thất bại!")
            // }
        } catch (error) {
            message.error("Loại hoa này đã tồn tại!")
            console.log('error', error.response?.data)
        }
    }
}