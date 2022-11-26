import moment from 'moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCheckoutHistory } from '../../../redux/Actions/CheckoutAction';
import { DOMAIN } from '../../../utils/Settings/config';

export default function OrderHistory() {
    const dispatch = useDispatch();

    const { cartHistory } = useSelector(state => state.ManageCartReducer);
    useEffect(() => {
        dispatch(GetCheckoutHistory())
    }, [])

    const renderTable = () => {
        return cartHistory.map((item, index) => {
            return <div className='border-4 rounded border-blue-300 px-2 m-2' key={ index }>
                <span className='text-lg my-2'>Hóa đơn { item.Bill.id } - Ngày thanh toán : { moment(item.Bill.createdAt).format('DD/MM/YYYY') }</span>
                { item.Detail.map((detail, indexD) => {
                    return <div key={ indexD } className='flex justify-between border-b-2 p-3 items-center my-2'>
                        <div className='w-36'>
                            <img src={ `${DOMAIN}/${detail.Product.ProductImage}` } alt='123' />
                        </div>
                        <p>{ detail.Product.ProductName }</p>
                        <p>{ detail.Product.GroupFlower.GroupName }</p>
                        <div className='flex'>
                            <p>{ (detail.Price * 1).toLocaleString() } <span className='underline mr-4'>đ</span></p>
                            <span>x{ detail.Quantity }</span>
                        </div>
                        <p>{ detail.Product.Discount }%</p>
                        <p className='text-base font-medium text-red-500'>{ ((detail.Price - detail.Price * detail.Product.Discount / 100) * detail.Quantity).toLocaleString() } <span className='underline mr-4'>đ</span></p>

                    </div>
                }) }
                <div className='flex justify-end text-right py-2'>
                    <div >
                        <span className='text-2xl'>Tổng tiền: { (1 * item.Bill.TotalMoney).toLocaleString() }đ</span>

                    </div>
                </div>
            </div>
        })
    }

    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3 mt-4'>
                    <h2 className='text-4xl font-bold text-center text-red-500'>Lịch sử đặt hàng</h2>
                    <div className='border p-3'>
                        { renderTable() }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
