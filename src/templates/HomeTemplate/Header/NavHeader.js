import React, { Fragment } from 'react'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    AiFillCaretRight,
    AiOutlineShopping
} from "react-icons/ai";
export default function NavHeader(props) {
    const items = [
        {
            label: (
                <NavLink to='' className='pr-20 text-base'>
                    Hoa sinh nhật
                </NavLink>
            ),
            key: '0',
        },
        {
            label: (
                <NavLink to='' className='text-base'>
                    Hoa cưới
                </NavLink>
            ),
            key: '1',
        },
        {
            label: (
                <NavLink to='' className='text-base'>
                    Hoa tình yêu
                </NavLink>
            ),
            key: '2',
        },
        {
            label: (
                <NavLink to='' className='text-base'>
                    Hoa khai trương
                </NavLink>
            ),
            key: '3',
        },
        {
            label: (
                <NavLink to='' className='text-base'>
                    Hoa tặng mẹ
                </NavLink>
            ),
            key: '4',
        },
    ];
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-4 flex'>
                            <div className='my-3 border-r pr-4'>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <NavLink to='' onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <span className='flex text-lg font-medium font-serif text-black hover:text-red-500 '>
                                                Sản phẩm
                                                <AiFillCaretRight className='mt-2' />
                                            </span>
                                        </Space>
                                    </NavLink>
                                </Dropdown>
                            </div>
                            <NavLink to='' className='my-3 border-r px-4 text-lg text-black font-medium font-serif hover:text-red-500 '>Hoa tươi</NavLink>
                            <NavLink to='' className='my-3 border-r px-4 text-lg text-black font-medium font-serif hover:text-red-500'>Hoa đặc biệt</NavLink>
                            <NavLink to='' className='my-3 border-r px-4 text-lg text-black font-medium font-serif hover:text-red-500'>Tin tức</NavLink>
                            <NavLink to='' className='my-3 px-4 text-lg text-black font-medium font-serif hover:text-red-500'>Liên hệ</NavLink>
                        </div>
                        <div className='w-full'>
                            <NavLink to='' className='my-3 flex justify-end text-lg text-black font-medium font-serif hover:text-red-500'>
                                <AiOutlineShopping className='mt-1 mr-2' />
                                Giỏ hàng
                                <span className='text-red-500 ml-1'>(0)</span>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
