import React, { Fragment, useEffect } from 'react'
import { message, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../redux/Actions/ManageProductAction';
import { GetAllAction } from '../../redux/Actions/ManageGroupAction';
import { NavLink } from 'react-router-dom';
import { _detail, _name, _src } from './../../utils/util/ConfigPath';
import _ from 'lodash';
import { DOMAIN } from '../../utils/Settings/config';
import { ADD_CART } from './../../redux/Types/ManageCartType';



const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Product(props) {
    const dispatch = useDispatch();
    let { id } = props.match.params;


    const { lstGroup } = useSelector(state => state.ManageGroupReducer);

    const { lstProduct } = useSelector(state => state.ManageProductReducer);

    useEffect(() => {
        dispatch(GetAllProductAction());
        dispatch(GetAllAction())
    }, [])

    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>

                    <div className='my-12 text-center'>
                        <div className='flex justify-center mt-8'>
                            <img src={`${_src}`} alt={`${_name}`} />

                        </div>
                        {lstGroup?.map((group, index) => {

                            return <Fragment>
                                {group.id == id ? <div className='text-3xl text-red-500 font-serif'><span className='border-b-2 border-red-500'>{group.GroupName}</span></div> : ''}
                            </Fragment>
                        })}
                    </div>

                    <div className='border py-6 px-4 flex justify-between'>
                        <span className='text-base'>Có tất cả 20 sản phẩm</span>
                        <div>
                            <span className='font-bold mr-2'>Sắp xếp:</span>
                            <Select
                                defaultValue="default"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'asc',
                                        label: 'Giá tăng dần',
                                    },
                                    {
                                        value: 'dsc',
                                        label: 'Giá giảm dần',
                                    },
                                    {
                                        value: 'default',
                                        label: 'Mặc định',
                                    },
                                    {
                                        value: 'new',
                                        label: 'Mới đến cũ',
                                    },
                                    {
                                        value: 'old',
                                        label: 'Cũ đến mới',
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className='flex flex-wrap ml-12 mt-8'>
                        {lstGroup?.map(group => {
                            return <Fragment >
                                {group.id == id ? <Fragment>
                                    {lstProduct.map((product, index2) => {
                                        return <Fragment>
                                            {product.GroupFlower_ID === group.id ? <Fragment >
                                                <div className='w-1/4 my-4' key={index2}>
                                                    <div className="w-5/6 pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
                                                        <NavLink to={`${_detail}/${product.id}`}>
                                                            <img className="w-full object-cover object-center" src={`${DOMAIN}/${product.ProductImage}`} alt={product.ProductName} title={product.ProductName} />
                                                        </NavLink>
                                                        <div className='text-center'>
                                                            <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{_.truncate(product.ProductName, { 'length': 20, 'separator': '' })}</h3>

                                                            <div className='flex justify-around my-2'>
                                                                <span className='text-red-500 font-bold'>{(product.Price - product.Price * product.Discount * 0.01).toLocaleString()} đ</span>
                                                                <span className='text-gray-500 font-bold line-through'>{(product.Price * 1).toLocaleString()} đ</span>
                                                            </div>
                                                            <button type='button' onClick={() => {
                                                                dispatch({
                                                                    type: ADD_CART,
                                                                    data: {
                                                                        item: product,
                                                                        number: 1
                                                                    }
                                                                })
                                                                message.success('Sản phẩm đã được thêm vào giỏ hàng')
                                                            }} className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Fragment> : ''}

                                        </Fragment>
                                    })}
                                </Fragment> : ''}
                            </Fragment>
                        })}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}
