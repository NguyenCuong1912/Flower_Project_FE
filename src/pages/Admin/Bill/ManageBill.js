
import React, { Fragment } from 'react';
import { Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


const { Search } = Input;
const ManageBill = (props) => {
    const dispatch = useDispatch();
    const onSearch = (value) => {
        console.log(value)
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '2%'
        },
        {
            title: 'Tên hoa',
            dataIndex: 'ProductName',
            width: '10%'

        },
        {
            title: 'Hình ảnh',
            dataIndex: 'ProductImage',
            // render: (text, item) => {
            //     return <Fragment>
            //         <img className='h-36 w-36' src={ `${DOMAIN}/${item.ProductImage}` } alt='' />
            //     </Fragment>
            // },
            width: '12%'

        },
        {
            title: 'Loại hoa',
            dataIndex: 'GroupFlower_ID',
            render: (text, item) => {
                // return <Fragment>
                //     { lstGroup.map((lst, index) => {
                //         return <span key={ index }>{ lst.id === item.GroupFlower_ID ? <span>{ lst.GroupName }</span> : '' }</span>
                //     }) }
                // </Fragment>
            },
            width: '10%'

        },
        {
            title: 'Mô tả',
            dataIndex: 'Description',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'Price',
            width: '10%'

        },
        {
            title: 'Giảm giá',
            dataIndex: 'Discount',
            width: '10%'

        },

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={ () => {
                        // history.push(`${_admin}${_product}${_edit}/${item.id}`)
                    } }>
                        <EditOutlined style={ { fontSize: 25 } } />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={ () => {
                        // dispatch(DeleteProductAction(item.id))
                    } }>
                        <DeleteOutlined style={ { fontSize: 25 } } />
                    </button>
                </div>
            },
            width: '10%'

        },
    ]

    return (
        <Fragment>
            <div className='mt-4'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý hoa</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-600' onClick={ () => {
                        // history.push(`${_admin}${_product}${_add}`)
                    } }>Thêm </button>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={ onSearch } enterButton />
                    </div>
                </div>
                <Table columns={ columns } rowKey='id' />;
            </div>
        </Fragment>
    );
}

export default ManageBill;
