import React, { Fragment, useEffect } from 'react'

import { Dropdown, Menu, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    AiFillCaretRight,
    AiOutlineShopping
} from "react-icons/ai";
import { _cart, _product } from '../../../utils/util/ConfigPath';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllAction } from '../../../redux/Actions/ManageGroupAction';
import { history } from '../../../App';


export default function NavHeader(props) {
    const dispatch = useDispatch();

    const { cart } = useSelector(state => state.ManageCartReducer)

    const { lstGroup } = useSelector(state => state.ManageGroupReducer)

    useEffect(() => {
        dispatch(GetAllAction())
    }, [])

    let numberOrder = 0;
    cart?.forEach(element => {
        numberOrder += element.Quantity
    });




    const menu = (
        <Menu>
            {lstGroup?.map((group, index) => {
                return <Fragment key={index}>
                    <Menu.Item key={group.id}>
                        <div onClick={() => {
                            history.push(`${_product}/${group.id}`)
                        }} className='pr-20 text-base'>{group.GroupName}</div>
                    </Menu.Item>
                </Fragment>
            })}
        </Menu>

    );

    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-4 flex'>
                            <div className='my-3 border-r pr-4'>
                                <Dropdown overlay={menu}>
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
                            <NavLink to={_cart} className='my-3 flex justify-end text-lg text-black font-medium font-serif hover:text-red-500'>
                                <AiOutlineShopping className='mt-1 mr-2' />
                                Giỏ hàng
                                <span className='text-red-500 ml-1'>({numberOrder})</span>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
