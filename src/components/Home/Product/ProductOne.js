import React, { Fragment, useEffect } from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom';
import { _detail } from './../../../utils/util/ConfigPath';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import { GetAllAction } from '../../../redux/Actions/ManageGroupAction';
import { DOMAIN } from '../../../utils/Settings/config';
export default function ProductOne(props) {
    const dispatch = useDispatch();

    const { lstGroup } = useSelector(state => state.ManageGroupReducer);

    const { lstProduct } = useSelector(state => state.ManageProductReducer)

    useEffect(() => {
        dispatch(GetAllProductAction());
        dispatch(GetAllAction())
    }, [])

    return (
        <Fragment>

            { lstGroup.map(group => {
                return <Fragment >
                    { group.GroupName === 'Hoa tình yêu' ? <Fragment>
                        { lstProduct.map((product, index2) => {
                            return <Fragment>
                                { product.GroupFlower_ID === group.id ? <Fragment >
                                    <div className='w-1/4 my-4' key={ index2 }>
                                        <div className="w-5/6 pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
                                            <NavLink to={ `${_detail}/${product.id}` }>
                                                <img className="w-full object-cover object-center" src={ `${DOMAIN}/${product.ProductImage}` } alt={ product.ProductName } title={ product.ProductName } />
                                            </NavLink>
                                            <div className='text-center'>
                                                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{ _.truncate(product.ProductName, { 'length': 20, 'separator': '' }) }</h3>

                                                <div className='flex justify-around my-2'>
                                                    <span className='text-red-500 font-bold'>{ (product.Price - product.Price * product.Discount * 0.01).toLocaleString() } đ</span>
                                                    <span className='text-gray-500 font-bold line-through'>{ (product.Price * 1).toLocaleString() } đ</span>
                                                </div>
                                                <NavLink to={ `${_detail}/${product.id}` }>
                                                    <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>

                                </Fragment> : '' }

                            </Fragment>
                        }) }
                    </Fragment> : '' }
                </Fragment>
            }) }

        </Fragment>
    )
}
