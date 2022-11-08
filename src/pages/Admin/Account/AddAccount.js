import React, { Fragment } from 'react'
import {
    Select
} from 'antd';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { AddUserAction } from '../../../redux/Actions/ManageUserAction';
export default function AddAccount(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Username: '',
            Password: '',
            Role: '',
            PhoneNumber: ''
        },
        onSubmit: values => {
            dispatch(AddUserAction(values))
        }
    })

    function changeSelect(value) {
        formik.setFieldValue('Role', value)
    }
    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div className='col-span-3 col-start-3 mt-16 h-full rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='mt-8 text-center text-4xl font-bold text-red-500'>Thêm tài khoản</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='mb-2'>Tài khoản:</div>
                            <input type="text" name='Username' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập tài khoản..." />
                            <div className='mt-4 mb-2'>Mật khẩu:</div>
                            <input type="text" name='Password' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập mật khẩu..." />
                            <div className='mt-4 mb-2'>Phân quyền:</div>
                            <Select className='w-1/5' placeholder='Chọn phân quyền' name='Role' onChange={changeSelect}>
                                {['ADMIN', 'CLIENT'].map(user => {
                                    return <Select.Option value={user}>{user}</Select.Option>
                                })}
                            </Select>
                            <div className='mt-4 mb-2'>Số điện thoại:</div>
                            <input type="text" name='PhoneNumber' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập số điện thoại..." />

                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-500' >Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
