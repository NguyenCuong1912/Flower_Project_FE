import React, { Fragment, useEffect } from 'react'
import { Input } from 'antd';
import {
    AiOutlineMinus,
    AiOutlinePlus,
} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { DOMAIN } from '../../utils/Settings/config';

const { TextArea } = Input;

export default function ShoppingCart(props) {
    const dispatch = useDispatch();

    const { lstCart } = useSelector(state => state.ManageProductReducer);
    console.log({ lstCart })
    //     useEffect(()=>{
    // dispatch(GetDetailProductAction)
    //     },[])


    const renderCart = () => {
        return lstCart.map((item, index) => {
            return <tr key={index}>
                <th className='grid grid-cols-4 mt-6'>
                    <img src={`${DOMAIN}/${item.ProductImage}`} alt='' />
                    <div className='col-span-3 pl-4 text-start'>
                        <div className='text-xl text-red-600'>Cozy</div>
                        <div className='font-normal my-2'>Cozy là bó hoa mang sắc màu ngọt ngào, kết hợp giữa hoa hướng dương và cẩm chướng, mang đến nhiều niềm vui, lạc quan, yêu đời và lời nhắn nhủ "Hãy luôn tin vào một ngày mai tươi sáng"</div>
                        <button type='button' className='text-red-600 hover:text-red-700'>Xóa</button>
                    </div>
                </th>
                <th className='text-xl'>
                    225.000 đ
                </th>
                <th style={{ width: 150 }}>
                    <div className='h-10 flex'>
                        <button id='btn1' type='button' onClick={(e) => {
                            let a = document.getElementById('soluong').value - 1;
                            document.getElementById('soluong').value = a;
                            if (a < 1) {
                                alert('Số lượng không được nhỏ hơn 1')
                                document.getElementById('soluong').value = 1;
                            }
                            console.log('a', a)
                        }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                        <input type="text" defaultValue={1} id='soluong' name="number" className="text-center w-1/2 p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block sm:text-sm focus:ring-1" />
                        <button type='button' className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                    </div>
                </th>
                <th className='text-xl'>
                    225.000 đ
                </th>
            </tr>
        })
    }

    return (
        <Fragment>
            <div className='grid grid-cols-5 my-16'>
                <div className='col-start-2 col-span-3'>
                    <div className='border-b-2 uppercase text-xl py-4'>Giỏ hàng</div>

                    <div className='mt-4'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-y-2'>
                                    <th className='w-3/5 py-6'>Sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {renderCart()} */}

                            </tbody>
                        </table>
                    </div>


                    <div className='border-t-2 mt-16'>
                        <div className='grid grid-cols-12 pt-6'>
                            <div className='col-span-8'>
                                <span>Ghi chú</span>
                                <TextArea rows={4} />
                            </div>
                            <div className='col-span-4 text-end'>
                                <div>Tạm tính <span className='text-2xl font-medium text-red-600 mx-2'>225.000 đ</span></div>
                                <div>
                                    <button type='button' className='border bg-red-500 text-white py-2 px-4 font-medium rounded hover:bg-red-700'>Cập nhật</button>
                                    <button type='button' className='border bg-red-500 text-white py-2 px-4 font-medium rounded hover:bg-red-700'>Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
