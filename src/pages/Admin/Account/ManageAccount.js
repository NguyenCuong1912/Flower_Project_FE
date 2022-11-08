import React, { Fragment, useEffect } from 'react'
import { Table, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteUser, GetListUserAction } from '../../../redux/Actions/ManageUserAction';
import { history } from '../../../App';
import { _account, _admin, _edit } from './../../../utils/util/ConfigPath';



const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function ManageAccount(props) {

    const dispatch = useDispatch();
    const { lstUser } = useSelector(state => state.ManageUserReducer);


    useEffect(() => {
        dispatch(GetListUserAction())
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Tài khoản',
            dataIndex: 'Username'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'PhoneNumber',
            render: (text, user) => {
                return <Fragment>
                    {user.PhoneNumber === null ? <marquee className='text-red-500'>FBI Warning: DCMM</marquee> : <span>{user.PhoneNumber}</span>}
                </Fragment>
            }
        },
        {
            title: 'Quyền',
            dataIndex: 'Role',
            // render: (text, user) => {
            //     return <Fragment>
            //         {user.Role === 1 ? <span className='text-red-500'>ADMIN</span> : <span>CLIENT</span>}
            //     </Fragment>
            // }
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, user) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_account}${_edit}/${user.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={() => {
                        dispatch(DeleteUser(user.id))
                        console.log('first', user.id)

                    }}>
                        <DeleteOutlined style={{ fontSize: 25 }} />
                    </button>
                </div>
            },
        },
    ]

    return (
        <Fragment>
            <div className='container mt-4'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý Users</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-600' onClick={() => {
                        // history.push('/admin/films/add')
                    }}>Thêm </button>
                    <div className='w-1/2'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstUser} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
