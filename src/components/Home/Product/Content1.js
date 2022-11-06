import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
export default function Content1() {
    return (
        <Fragment>
            <div className='flex justify-center'>
                <img src='img/background_title.png' alt='' />
            </div>
            <h4 className='text-center text-3xl text-red-500 font-serif'>Nên mua</h4>

            <div className='grid grid-cols-5 py-8 border-t'>
                <div className='col-span-2 border rounded-lg pb-4 shadow-2xl'>
                    <img className='w-full' src='img/product/nenmua/myDarling.png' alt='' />
                    <div className='grid grid-rows text-center'>
                        <span className='text-lg my-3 font-medium'>My Darling</span>
                        <Rate allowHalf defaultValue={2.5} />
                        <div className='flex justify-around text-lg my-2'>
                            <span className='text-red-600 font-medium'>600.000 đ</span>
                            <span className='line-through'>680.000 đ</span>
                        </div>
                        <NavLink to=''>
                            <button type='button' className='px-8 py-2 text-lg text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Đặt hàng</button>
                        </NavLink>
                    </div>
                </div>


                <div className='col-span-3 flex flex-wrap'>
                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/motTinhYeu.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Một Tình Yêu</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/pinkCloudy.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Pink Cloudy</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/pinkMoon.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Pink Moon</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/cozy.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Cozy</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/littleTana.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Little Tana</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl' src='img/product/nenmua/CucTanaXinh.png' alt='' />
                        <div className='grid grid-rows text-center'>
                            <span className='text-lg my-3 font-medium'>Hạ Về</span>
                            <NavLink to=''>
                                <button type='button' className='px-8 py-2 text-red-600 font-bold border border-red-600 rounded hover:text-white hover:bg-red-600'>Chi tiết</button>
                            </NavLink>
                        </div>
                    </div>

                </div>



            </div>
        </Fragment>
    )
}
