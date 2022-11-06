import React, { Fragment, useRef } from 'react'
import Slider from "react-slick";
import { Rate } from 'antd';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
export default function Content2(props) {
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
                    <button className="button h-8 w-8" onClick={previous}>
                        <AiFillLeftCircle className='text-3xl text-red-500 hover:text-red-700' />
                    </button>
                </div>
                <div className='col-span-10'>
                    <Slider ref={ref} {...settings}>
                        <div className='px-2'>
                            <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="h-full object-cover object-center" src="img/product/giamgia/cozy.png" alt="1" />
                                <div className='text-center'>
                                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Cozy</h3>
                                    <Rate style={{ fontSize: 14 }} allowHalf defaultValue={2.5} />

                                    <div className='flex justify-around my-2'>
                                        <span className='text-red-500 font-bold'>100.000 đ</span>
                                        <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                    </div>
                                    <NavLink to=''>
                                        <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="h-full object-cover object-center" src="img/product/giamgia/CucTanaXinh.png" alt="1" />
                                <div className='text-center'>
                                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Hạ Về</h3>
                                    <Rate style={{ fontSize: 14 }} allowHalf defaultValue={2.5} />

                                    <div className='flex justify-around my-2'>
                                        <span className='text-red-500 font-bold'>100.000 đ</span>
                                        <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                    </div>
                                    <NavLink to=''>
                                        <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="h-full object-cover object-center" src="img/product/giamgia/littleTana.png" alt="1" />
                                <div className='text-center'>
                                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Little Tana</h3>
                                    <Rate style={{ fontSize: 14 }} allowHalf defaultValue={2.5} />

                                    <div className='flex justify-around my-2'>
                                        <span className='text-red-500 font-bold'>100.000 đ</span>
                                        <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                    </div>
                                    <NavLink to=''>
                                        <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="h-full object-cover object-center" src="img/product/giamgia/motTinhYeu.png" alt="1" />
                                <div className='text-center'>
                                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Một Tình Yêu</h3>
                                    <Rate style={{ fontSize: 14 }} allowHalf defaultValue={2.5} />

                                    <div className='flex justify-around my-2'>
                                        <span className='text-red-500 font-bold'>100.000 đ</span>
                                        <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                    </div>
                                    <NavLink to=''>
                                        <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className="h-full pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="h-full object-cover object-center" src="img/product/giamgia/rustic.png" alt="1" />
                                <div className='text-center'>
                                    <h3 className="title-font text-lg font-medium text-gray-900 mb-3">Rustic</h3>
                                    <Rate style={{ fontSize: 14 }} allowHalf defaultValue={2.5} />

                                    <div className='flex justify-around my-2'>
                                        <span className='text-red-500 font-bold'>100.000 đ</span>
                                        <span className='text-gray-500 font-bold line-through'>150.000 đ</span>
                                    </div>
                                    <NavLink to=''>
                                        <button type='button' className='px-6 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
                <div className='grid content-center ml-8'>
                    <button className="button h-8 w-8" onClick={next}>
                        <AiFillRightCircle className='text-3xl text-red-500 hover:text-red-700' />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
