import React, { Fragment, useEffect, useRef } from 'react'
import Slider from "react-slick";
import _ from 'lodash'
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction, GetDetailProductAction } from '../../../redux/Actions/ManageProductAction';
import { DOMAIN } from '../../../utils/Settings/config';
import { _cart, _detail } from '../../../utils/util/ConfigPath';
import { history } from '../../../App';
import { AddCArtAction } from '../../../redux/Actions/CartAction';
import { ADD_CART } from './../../../redux/Types/ManageCartType';


export default function Content2(props) {

    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);
    useEffect(() => {
        dispatch(GetAllProductAction());
    }, [])



    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Fragment>
            <div className='my-12 border-b text-center'>
                <div className='flex justify-center'>
                    <img src='img/background_title.png' alt='' />
                </div>
                <h4 className='text-3xl text-red-500 font-serif'>Giảm giá hôm nay</h4>
            </div>
            <div className='grid grid-cols-12 my-8'>
                <div className='grid content-center ml-12'>
                    <button className="button h-8 w-8" onClick={ previous }>
                        <AiFillLeftCircle className='text-3xl text-red-500 hover:text-red-700' />
                    </button>
                </div>
                <div className='col-span-10'>
                    <Slider ref={ ref } { ...settings }>
                        { lstProduct.map((item, index) => {
                            return <div key={ index } className='px-2'>
                                <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <NavLink to={ `${_detail}/${item.id}` }>
                                        <img className="h-full object-cover object-center" src={ `${DOMAIN}/${item.ProductImage}` } alt={ item.ProductName } title={ item.ProductName } />
                                    </NavLink>

                                    <div className='text-center'>
                                        <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{ _.truncate(item.ProductName, { 'length': 20, 'separator': '' }) }</h3>


                                        <div className='flex justify-around my-2'>
                                            <span className='text-red-500 font-bold'>{ (item.Price - item.Price * item.Discount * 0.01).toLocaleString() } đ</span>
                                            <span className='text-gray-500 font-bold line-through'>{ (item.Price * 1).toLocaleString() } đ</span>
                                        </div>
                                        <button type='button' onClick={ () => {
                                            dispatch({
                                                type: ADD_CART,
                                                data: item
                                            })
                                            // console.log(item)
                                            // history.push(`${_cart}`)
                                        } } className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>

                                    </div>
                                </div>
                            </div>
                        }) }


                    </Slider>
                </div>
                <div className='grid content-center ml-8'>
                    <button className="button h-8 w-8" onClick={ next }>
                        <AiFillRightCircle className='text-3xl text-red-500 hover:text-red-700' />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
