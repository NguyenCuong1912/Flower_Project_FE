import React, { Fragment, useEffect } from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import { DOMAIN } from '../../../utils/Settings/config';
import { _detail, _name, _src } from '../../../utils/util/ConfigPath';
import { ADD_CART } from '../../../redux/Types/ManageCartType';
import { message } from 'antd';

export default function Content3(props) {

    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);
    useEffect(() => {
        dispatch(GetAllProductAction());
    }, [])

    return (
        <Fragment>
            <div className='my-12 border-b text-center'>
                <div className='flex justify-center'>
                    <img src={`${_src}`} alt={`${_name}`} />
                </div>
                <h4 className='text-3xl text-red-500 font-serif'>Sản phẩm mới</h4>
            </div>
            <div className='flex flex-wrap ml-12 mb-12'>
                {lstProduct.slice(0, 8).map((item, index) => {
                    return <div className='w-1/4 my-4' key={index}>
                        <div className="w-5/6 pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
                            <NavLink to={`${_detail}/${item.id}`}>
                                <img className="w-full object-cover object-center" src={`${DOMAIN}/${item.ProductImage}`} alt={item.ProductName} title={item.ProductName} />
                            </NavLink>
                            <div className='text-center'>
                                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{_.truncate(item.ProductName, { 'length': 20, 'separator': '' })}</h3>

                                <div className='flex justify-around my-2'>
                                    <span className='text-red-500 font-bold'>{(item.Price - item.Price * item.Discount * 0.01).toLocaleString()} đ</span>
                                    <span className='text-gray-500 font-bold line-through'>{(item.Price * 1).toLocaleString()} đ</span>
                                </div>

                                <button type='button' onClick={() => {
                                    dispatch({
                                        type: ADD_CART,
                                        data: {
                                            item: item,
                                            number: 1
                                        }
                                    })
                                    message.success('Sản phẩm đã được thêm vào giỏ hàng')


                                }} className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>

                            </div>
                        </div>
                    </div>
                })}
            </div>
        </Fragment>
    )
}
