import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';


export default function DetailAccount(props) {

    const { userLogin } = useSelector(state => state.ManageUserReducer);

    return (
        <Fragment>
            <div className='grid grid-rows'>
                <span className='uppercase text-2xl text-red-500 font-medium font-serif'>Thông tin tài khoản</span>
                <span className='mt-4 text-lg'><span className='font-medium'>Tên tài khoản: </span>{userLogin.account.Username}</span>
                <span className='mt-4 text-lg'><span className='font-medium'>Số điện thoại: </span>{userLogin.account.PhoneNumber}</span>
            </div>
        </Fragment>
    )
}
