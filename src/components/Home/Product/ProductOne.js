import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
export default function ProductOne() {
    return (
        <Fragment>
            <div className='w-1/4 my-4'>
                <div className="w-5/6 pb-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-2xl">
                    <img className="w-full object-cover object-center" src="img/product/giamgia/cozy.png" alt="1" />
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
        </Fragment>
    )
}
