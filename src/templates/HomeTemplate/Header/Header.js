import React, { Fragment } from 'react'
import {
    FaFacebookF,
    FaFacebookMessenger,
    FaPhoneAlt,
} from "react-icons/fa";
import {
    AiOutlineUser
} from "react-icons/ai";
import { Input, Dropdown, Space, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import NavHeader from './NavHeader';
import { _account, _header, _home, _login, _order, _register } from './../../../utils/util/ConfigPath';
import { useSelector } from 'react-redux';
import { USER_LOGIN } from '../../../redux/Types/ManageUserType';
import { history } from '../../../App';
import _ from 'lodash'

const { Search } = Input;
const onSearch = (value) => console.log(value);



export default function Header(props) {
    const { userLogin } = useSelector(state => state.ManageUserReducer);

    const menu = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_account}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-red-500">Thông tin tài khoản</button>,
                    key: '0',
                },
                {
                    label: <Fragment>
                        <button onClick={() => {
                            history.push(`${_order}/${userLogin.account.id}`);
                            window.location.reload();
                        }} className="self-center px-4 py-2 hover:text-red-500">Lịch sử đặt hàng</button>
                    </Fragment>,
                    key: '1',
                },
                {
                    label: <button onClick={() => {
                        sessionStorage.removeItem(USER_LOGIN);
                        history.push(`${_home}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-red-500">Đăng xuất</button>,
                    key: '2',
                },
            ]}
        />
    )
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ?
            <Dropdown
                overlay={menu}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='flex items-center text-black ml-4 cursor-pointer'>
                            <AiOutlineUser className='text-2xl mr-1' />
                            <span className='flex items-center text-lg font-bold '>Xin chào!, {userLogin.account.Username}</span>
                        </div>
                    </Space>
                </span>
            </Dropdown>
            : <Fragment>
                <NavLink to={_login} className='flex p-2 mx-2 text-black border rounded hover:border-red-500 hover:text-red-500'>
                    <span>Đăng nhập</span>
                </NavLink>
                <NavLink to={_register} className='flex p-2 text-black border rounded hover:border-red-500 hover:text-red-500'>
                    <span>Đăng ký</span>
                </NavLink>
            </Fragment>}
    </Fragment>
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3 border-b'>
                    <div className='grid grid-cols-3'>
                        <div className='flex items-center'>
                            <NavLink to='' title='Theo dõi Facebook của GiftLove' className='h-11 w-11 bg-blue-900 border rounded-full text-white grid place-items-center hover:border-blue-900 hover:bg-white hover:text-blue-900'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink to='' title='Liên hệ GiftLove qua Zalo' className='mx-2 h-11 w-11 bg-cyan-400 border rounded-full text-white grid place-items-center hover:border-cyan-400 hover:bg-white hover:text-cyan-400'>
                                <FaFacebookMessenger />
                            </NavLink>
                            <NavLink to='' title='Liên hệ GiftLove qua điện thoại: 19001508' className='h-11 w-11 bg-red-500 border rounded-full text-white grid place-items-center hover:border-red-500 hover:bg-white hover:text-red-500'>
                                <FaPhoneAlt />
                            </NavLink>

                        </div>
                        <div className='ml-12 my-6 cursor-pointer' onClick={() => {
                            history.push(`${_home}`);
                        }}>
                            <img src={`${_header}`} alt='GiftLove' />
                        </div>
                        <div className='flex items-center'>
                            <Search
                                placeholder="Tìm kiếm sản phẩm..."
                                onSearch={onSearch}
                                style={{
                                    width: 180,
                                }}
                            />
                            <div className='flex mt-1'>{operations}</div>
                        </div>
                    </div>
                </div>

            </div>
            <NavHeader />
        </Fragment>
    )
}
