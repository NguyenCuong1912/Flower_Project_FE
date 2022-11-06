import React, { Fragment } from 'react'
import {
    FaTelegramPlane,
    FaHeadphonesAlt,
    FaGift
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export default function Contact() {
    return (
        <Fragment>
            <div className='grid grid-cols-3'>
                <div className='my-8 text-center'>
                    <div className='flex justify-center'>
                        <NavLink to='' title='Ship toàn quốc' className=' text-4xl text-white h-20 w-20 bg-red-500 rounded-full grid place-items-center border hover:border-red-500 hover:text-red-500 hover:bg-white'>
                            <FaTelegramPlane />
                        </NavLink>
                    </div>
                    <div className='my-4 grid grid-rows'>
                        <span className='text-2xl'>Giao hàng toàn quốc</span>
                        <span className='w-2/3 mx-16 text-base'>
                            Giao hàng trên toàn quốc với mức phí ưu đãi nhất
                        </span>
                    </div>
                </div>
                <div className='my-8 text-center'>
                    <div className='flex justify-center'>
                        <NavLink to='' title='Liên hệ' className=' text-4xl text-white h-20 w-20 bg-red-500 rounded-full grid place-items-center border hover:border-red-500 hover:text-red-500 hover:bg-white'>
                            <FaHeadphonesAlt />
                        </NavLink>
                    </div>
                    <div className='my-4 grid grid-rows'>
                        <span className='text-2xl'>Hỗ trợ khách hàng</span>
                        <span className='w-2/3 mx-16 text-base'>
                            Hỗ trợ khách hàng trực tuyến 24/7 <br /> Hãy gọi cho chúng tôi
                        </span>
                    </div>
                </div>
                <div className='my-8 text-center'>
                    <div className='flex justify-center'>
                        <NavLink to='' title='Ship toàn quốc' className=' text-4xl text-white h-20 w-20 bg-red-500 rounded-full grid place-items-center border hover:border-red-500 hover:text-red-500 hover:bg-white'>
                            <FaGift />
                        </NavLink>
                    </div>
                    <div className='my-4 grid grid-rows'>
                        <span className='text-2xl'>Gói hoa miễn phí</span>
                        <span className='w-2/3 mx-16 text-base'>
                            Gói hoa miễn phí khi mua hoa tại cửa hàng nhanh nhất
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
