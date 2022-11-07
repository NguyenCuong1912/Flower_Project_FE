import React, { Fragment } from 'react'
import ImageLensZoom from 'react-lens-zoom';
import { Rate, Tabs } from 'antd';
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiFillLike,
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineShareAlt,
    AiFillWechat,
    AiFillEdit
} from 'react-icons/ai';



export default function ProductDetail(props) {
    return (
        <Fragment>
            <div className='my-20 grid grid-cols-10'>
                <div className='col-start-3 col-span-6 flex'>
                    <div className='grid grid-cols-12 z-50'>
                        <div className='col-span-9'>
                            <ImageLensZoom
                                source='img/product/giamgia/cozy.png'
                                sourceHeight='365'
                                sourceWidth='365'
                                destWidth='400'
                                destHeight='400'
                            />
                        </div>
                        <div className='col-span-2 z-0' style={{ width: '760px', marginLeft: '-450px' }}>
                            <div className='border-b-2 grid grid-rows'>
                                <span className='text-3xl font-medium'>
                                    Cozy
                                </span>
                                <div className='mb-3 flex justify-between'>
                                    <div>
                                        <span>
                                            <Rate />
                                        </span>
                                        <span className='border-r-2 px-2'>0 đánh giá</span>
                                        <span className='px-2'>Đã bán: 12</span>
                                    </div>
                                    <AiOutlineHeart className='text-2xl hover:text-red-500 cursor-pointer' />
                                </div>
                            </div>
                            <div className='py-4 border-b-2 flex'>
                                <span className='text-3xl font-medium text-red-600'>135.000 <span className='underline'>đ</span></span>
                                <span className='text-xl font-medium text-gray-600 line-through py-2 px-4'>150.000 <span className='underline'>đ</span></span>
                                <span className='py-3'>{'('}Bạn đã tiết kiệm được 15.000 <span className='underline'>đ</span>{')'}</span>
                            </div>


                            <div>
                                <span className='font-bold'>Số lượng</span>
                                <div className='flex h-10 mt-2'>
                                    <button type='button' className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                                    <input type="text" name="number" class=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-1/4 sm:text-sm focus:ring-1" />
                                    <button type='button' className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                                </div>
                                <div className='my-4'>
                                    <button type='button' className='flex border-2 p-2 text-white bg-red-500 rounded-md text-xl hover:bg-red-700'>Thêm vào giỏ hàng <AiOutlineShoppingCart className='mt-2 mx-2 mb-1' /></button>
                                </div>
                                <div>
                                    <button type='button' className='flex border-2 p-2 text-white bg-red-500 rounded-md text-xl hover:bg-red-700'>Mua ngay</button>
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
                            Cozy là bó hoa mang sắc màu ngọt ngào, kết hợp giữa hoa hướng dương và cẩm chướng, mang đến nhiều niềm vui, lạc quan, yêu đời và lời nhắn nhủ "Hãy luôn tin vào một ngày mai tươi sáng"
                        </span>
                        <div className='my-4'>
                            <h3>Bó hoa Cozy bao gồm</h3>
                            <ul className='list-disc text-base ml-8'>
                                <li>3 cành hướng dương</li>
                                <li>Hoa cẩm chướng</li>
                                <li>Lá phụ trang trí</li>
                            </ul>
                        </div>
                        <div className='flex justify-center my-8'>
                            <img className='w-2/3' src='https://www.flowercorner.vn/image/catalog/New%20Sep/ban-mai.jpg' alt='' />

                        </div>
                    </div>

                    <div className='border-2'>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <h3 className='text-3xl'>Đánh giá sản phẩm</h3>
                                <div className='text-center'>
                                    <Rate style={{ fontSize: 14 }} />
                                    <div>
                                        Dựa trên 0 đánh giá
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-8'>
                                <button type='button' className='flex border-2 border-red-500 h-14 p-4 rounded text-red-500 text-base mr-2 hover:border-red-700'><AiFillWechat className='text-2xl mr-1' />Viết đánh giá</button>
                                <button type='button' className='flex border-2 border-red-500 h-14 p-4 rounded text-red-500 text-base hover:border-red-700'><AiFillEdit className='text-2xl mr-1' />Đặt câu trả lời</button>
                            </div>
                        </div>
                        <div className='mx-4'>
                            <Tabs defaultActiveKey="1" >
                                <Tabs.TabPane tab="Đánh giá" key="1">
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Câu hỏi & trả lời:" key="2">
                                </Tabs.TabPane>
                            </Tabs>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
