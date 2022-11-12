import React, { Fragment } from 'react'
import { Table, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import {
    _add,
    _admin,
    _product
} from '../../../utils/util/ConfigPath';



const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function ManageProduct(props) {
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tên hoa',
            dataIndex: 'ProductName',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'ProductImage',
        },
        {
            title: 'Loại hoa',
            dataIndex: 'GroupFlower_ID',
        },
        {
            title: 'Mô tả',
            dataIndex: 'Description',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'Price',
        },
        {
            title: 'Giảm giá',
            dataIndex: 'Discount',
        },

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        // history.push(`${_admin}${_group}${_edit}/${group.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={() => {
                        // dispatch(DeleteGroup(group.id))
                    }}>
                        <DeleteOutlined style={{ fontSize: 25 }} />
                    </button>
                </div>
            },
        },
    ]
    return (
        <Fragment>
            <div className='mt-4'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý hoa</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-600' onClick={() => {
                        history.push(`${_admin}${_product}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource='' columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
