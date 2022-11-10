import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { _account, _edit, _order } from '../../utils/util/ConfigPath';
import Footer from '../HomeTemplate/Footer/Footer';
import Header from '../HomeTemplate/Header/Header';

export default function AccountTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const { userLogin } = useSelector(state => state.ManageUserReducer);

    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <div className='grid grid-cols-5 my-10'>
                <div className='col-start-2 col-span-3'>
                    <div className='grid grid-cols-4'>
                        <div>
                            <div className='uppercase text-2xl'>Trang tài khoản</div>
                            <div className='font-bold text-lg'>Xin chào!, {userLogin.account.Username}</div>
                            <div className='mt-4'>
                                <NavLink to={_account} className='text-black text-base mt-4 mb-2 hover:text-red-500 hover:underline'>Thông tin tài khoản</NavLink>
                            </div>
                            <div className='mt-4'>
                                <NavLink to={`${_account}${_order}`} className='text-black text-base my-2 hover:text-red-500 hover:underline '>Đơn hàng của bạn</NavLink>
                            </div>
                            <div className='mt-4'>
                                <NavLink to={`${_account}${_edit}`} className='text-black text-base my-2 hover:text-red-500 hover:underline '>Cập nhật tài khoản</NavLink>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <Component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    }} />

}
