import React, { Fragment, useEffect, useState } from 'react'
import ImageLensZoom from 'react-lens-zoom';
import {
    AiOutlineShoppingCart,
    AiFillLike,
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineShareAlt,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetDetailProductAction } from './../../redux/Actions/ManageProductAction';
import { DOMAIN } from './../../utils/Settings/config';
import { ADD_CART } from '../../redux/Types/ManageCartType';
import { message } from 'antd';




export default function ProductDetail(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch()

    const { detailProduct } = useSelector(state => state.ManageProductReducer);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        dispatch(GetDetailProductAction(id))
    }, [])



    return (
        <Fragment>
            <div className='my-20 grid grid-cols-10'>
                <div className='col-start-3 col-span-6 flex'>
                    <div className='grid grid-cols-12 z-50'>
                        <div className='col-span-9'>
                            <ImageLensZoom
                                source={`${DOMAIN}/${detailProduct.ProductImage}`}
                                sourceHeight='365'
                                sourceWidth='365'
                                destWidth='400'
                                destHeight='400'
                            />
                        </div>
                        <div className='col-span-2 z-0' style={{ width: '760px', marginLeft: '-450px' }}>
                            <div className='border-b-2 grid grid-rows'>
                                <span className='text-3xl font-medium py-2'>
                                    {detailProduct.ProductName}
                                </span>
                            </div>
                            <div className='py-4 border-b-2 flex'>
                                <span className='text-3xl font-medium text-red-600'>{(detailProduct.Price - detailProduct.Price * detailProduct.Discount * 0.01).toLocaleString()} <span className='underline'>đ</span></span>
                                <span className='text-xl font-medium text-gray-600 line-through py-2 px-4'>{(detailProduct.Price * 1).toLocaleString()} <span className='underline'>đ</span></span>
                                <span className='py-3'>{'('}Bạn đã tiết kiệm được {(detailProduct.Price * detailProduct.Discount * 0.01).toLocaleString()} <span className='underline'>đ</span>{')'}</span>
                            </div>


                            <div>
                                <span className='font-bold'>Số lượng</span>
                                <div className='h-10 flex'>
                                    <button id='decrease' type='button' onClick={() => {

                                        if (number <= 1) {
                                            setNumber(1)
                                        } else {
                                            setNumber(number - 1)
                                        }


                                    }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                                    <input type="text" disabled id='soluong' value={number} name="number" className="text-center w-1/12 p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block sm:text-sm focus:ring-1" />
                                    <button type='button' onClick={() => {
                                        setNumber(number + 1)
                                    }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                                </div>
                                <div className='my-4'>
                                    <button type='button' onClick={() => {
                                        dispatch({
                                            type: ADD_CART,
                                            data: {
                                                item: detailProduct, number
                                            }
                                        })
                                        message.success('Sản phẩm đã được thêm vào giỏ hàng')
                                    }} className='flex border-2 p-2 text-white bg-red-500 rounded-md text-xl hover:bg-red-700'>Thêm vào giỏ hàng <AiOutlineShoppingCart className='mt-2 mx-2 mb-1' /></button>
                                </div>
                                <div className='mt-2 flex'>
                                    <button type='button' className='flex border-2 px-2 text-white bg-blue-500 rounded-md hover:bg-blue-700'><AiFillLike className='mx-1 mt-1' />Thích</button>
                                    <button type='button' className='flex border-2 px-2 text-white bg-blue-500 rounded-md hover:bg-blue-700'><AiOutlineShareAlt className='mx-1 mt-1' />Chia sẻ</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-10'>
                <div className='col-start-3 col-span-6'>

                    <div className='border-2 p-4 my-4'>
                        <h3 className='text-3xl'>Mô tả</h3>
                        <span className='text-base'>
                            {detailProduct.Description}
                        </span>

                        <div className='flex justify-center my-8'>
                            <img className='w-2/3' src={`${DOMAIN}/${detailProduct.ProductImage}`} alt={detailProduct.ProductName} />

                        </div>
                    </div>



                </div>
            </div>
        </Fragment>
    )
}
