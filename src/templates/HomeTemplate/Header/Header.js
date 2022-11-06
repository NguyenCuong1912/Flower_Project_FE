import React, { Fragment } from 'react'
import {
    FaFacebookF,
    FaFacebookMessenger,
    FaPhoneAlt,
    FaAngleDown,
    FaRegUser,

} from "react-icons/fa";
import {
    AiOutlineLogin,
    AiFillEdit
} from "react-icons/ai";
import { Dropdown, Space, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import NavHeader from './NavHeader';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const items = [
    {
        label: (
            <NavLink to='' className='p-2 flex text-lg' >
                <AiOutlineLogin className='mt-1 mr-2' />
                Đăng nhập
            </NavLink>
        ),
        key: '0',
    },
    {
        label: (
            <NavLink to='' className='p-2 flex text-lg'>
                <AiFillEdit className='mt-1 mr-2' />
                Đăng ký
            </NavLink>
        ),
        key: '1',
    },
];
export default function Header() {
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
                        <div className='ml-12 my-6'>
                            <img src='img/logo.png' alt='GiftLove' />
                        </div>
                        <div className='flex items-center ml-32'>
                            <Search
                                placeholder="Tìm kiếm sản phẩm..."
                                onSearch={onSearch}
                                style={{
                                    width: 200,
                                    marginRight: 8,
                                }}
                            />
                            <Dropdown
                                menu={{
                                    items,
                                }}
                            >
                                <NavLink to='' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <span className='flex text-lg text-black hover:text-red-500'>
                                            <FaRegUser />
                                            <FaAngleDown />
                                        </span>
                                    </Space>
                                </NavLink>
                            </Dropdown>
                        </div>
                    </div>
                </div>

            </div>
            <NavHeader />
        </Fragment>
    )
}
