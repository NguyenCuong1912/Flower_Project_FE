import React, { Fragment, useEffect } from 'react'
import { Table, Input } from 'antd';
import { history } from '../../../App';
import {
    _add,
    _admin,
    _edit,
    _group
} from '../../../utils/util/ConfigPath';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllAction } from '../../../redux/Actions/ManageGroupAction';
import { DeleteGroup } from './../../../redux/Actions/ManageGroupAction';



const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function ManageGroup(props) {

    const dispatch = useDispatch();

    const { lstGroup } = useSelector(state => state.ManageGroupReducer);

    useEffect(() => {
        dispatch(GetAllAction())
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Loại hoa',
            dataIndex: 'GroupName',
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, group) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_group}${_edit}/${group.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa' onClick={() => {
                        dispatch(DeleteGroup(group.id))
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
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý loại hoa</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-600' onClick={() => {
                        history.push(`${_admin}${_group}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/2'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstGroup} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
