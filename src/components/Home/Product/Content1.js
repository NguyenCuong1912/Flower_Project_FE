import React, { Fragment, useEffect } from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom';
import { _detail, _name, _src } from './../../../utils/util/ConfigPath';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import { DOMAIN } from '../../../utils/Settings/config';
import { ADD_CART } from '../../../redux/Types/ManageCartType';
import { message } from 'antd';


export default function Content1(props) {
    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);

    useEffect(() => {
        dispatch(GetAllProductAction())
    }, [])

    return (
        <Fragment>
            <div className='flex justify-center mt-8'>
                <img src={`${_src}`} alt={`${_name}`} />

            </div>
            <h4 className='text-center text-3xl text-red-500 font-serif'>Nên mua</h4>

            <div className='grid grid-cols-5 py-8 border-t'>
                {lstProduct.slice(0, 1).map((item, index) => {
                    return <div key={index} className='col-span-2 border rounded-lg pb-4 shadow-2xl'>
                        <NavLink to={`${_detail}/${item.id}`}>
                            <img className='w-full' src={`${DOMAIN}/${item.ProductImage}`} alt={item.ProductName} title={item.ProductName} />
                        </NavLink>
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>{_.truncate(item.ProductName, { 'length': 20, 'separator': '' })}</span>
                            <div className='flex justify-around text-lg my-2'>
                                <span className='text-red-600 font-medium'>{(item.Price - item.Price * item.Discount * 0.01).toLocaleString()} đ</span>
                                <span className='line-through'>{(item.Price * 1).toLocaleString()} đ</span>
                            </div>

                            <div className='flex justify-center'>
                                <button type='button' onClick={() => {
                                    dispatch({
                                        type: ADD_CART,
                                        data: {
                                            item: item,
                                            number: 1
                                        }
                                    })
                                    message.success('Sản phẩm đã được thêm vào giỏ hàng')
                                }} className='px-8 py-2 w-1/2 text-lg text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                })}



                <div className='col-span-3 flex flex-wrap'>
                    {lstProduct.slice(6, 12).map((item, index) => {
                        return <div key={index} className='w-1/3'>
                            <NavLink to={`${_detail}/${item.id}`}>
                                <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src={`${DOMAIN}/${item.ProductImage}`} alt={item.ProductName} title={item.ProductName} />
                            </NavLink>

                            <div className='grid grid-rows text-center'>
                                <span className='text-lg my-3 font-medium'>{_.truncate(item.ProductName, { 'length': 20, 'separator': '' })}</span>
                                <NavLink to={`${_detail}/${item.id}`}>
                                    <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                                </NavLink>
                            </div>
                        </div>
                    })}

                </div>



            </div>
        </Fragment>
    )
}
