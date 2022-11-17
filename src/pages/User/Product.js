import React, { Fragment } from 'react'
import { Select } from 'antd';
import ProductOne from '../../components/Home/Product/ProductOne';



const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export default function Product(props) {
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>

                    <div className='my-12 text-center'>
                        <div className='flex justify-center'>
                            <img src='img/background_title.png' alt='' />
                        </div>
                        <div className='text-3xl text-red-500 font-serif'><span className='border-b-2 border-red-500'>Hoa tình yêu</span></div>
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
                        <ProductOne />
                    </div>


                </div>
            </div>
        </Fragment>
    )
}
