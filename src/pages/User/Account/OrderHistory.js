import { Table } from 'antd'
import moment from 'moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { GetListCheckout } from '../../../redux/Actions/CheckoutAction';
import { DOMAIN } from '../../../utils/Settings/config';
import { _admin, _bill, _detail } from '../../../utils/util/ConfigPath';

export default function OrderHistory() {
    const dispatch = useDispatch();

    const { cartHistory } = useSelector(state => state.ManageCartReducer);
    console.log(cartHistory)
    useEffect(() => {
        dispatch(GetListCheckout())
    }, [])

    const renderTable = () => {
        return cartHistory.map((item, index) => {
            return <div className='border px-2'>
                <span>Hóa đơn { item.Bill.id }</span> - <span>Ngày thanh toán : { moment(item.Bill.createdAt).format('DD/MM/YYYY') }</span>
                { item.Detail.map((detail, indexD) => {
                    return <div className='flex justify-between border p-3 items-center my-2'>
                        <div className='w-36'>
                            <img src={ `${DOMAIN}/${detail.Product.ProductImage}` } alt='123' />
                        </div>
                        <p>{ detail.Product.ProductName }</p>
                        <p>{ detail.Product.GroupFlower.GroupName }</p>
                        <div>
                            <p>{ detail.Price }</p>
                            <span>x{ detail.Quantity }</span>
                        </div>
                        <p>{ detail.Product.Discount }%</p>
                        <p>{ detail.Price * detail.Quantity }</p>

                    </div>
                }) }
                <div className='flex justify-end text-right'>
                    <div>
                        <span>Tổng tiền: </span> <span>150000đ</span>
                        <div>
                            <span>Ngày thanh toán : </span> <span>20/11</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    // const columns = [
    //     {
    //         title: 'Sản phẩm',
    //         dataIndex: 'Detail',
    //         render: (text, cart) => {
    //             return <span title='Chi tiết hóa đơn' onClick={ () => {
    //                 // history.push(`${_admin}${_bill}${_detail}/${cart.id}`)
    //             } } className='text-base hover:underline cursor-pointer hover:text-green-500'>
    //                 {/* { cart.Account.Username } */ }
    //             </span>
    //         }
    //     },
    //     // {
    //     //     title: 'Số điện thoại',
    //     //     dataIndex: 'PhoneNumber',
    //     //     render: (text, cart) => {
    //     //         return <span className='text-base'>
    //     //             { cart.Account.PhoneNumber }
    //     //         </span>
    //     //     }

    //     // },
    //     // {
    //     //     title: 'Tổng tiền',
    //     //     dataIndex: 'TotalMoney',
    //     //     render: (text, cart) => {
    //     //         return <span className='text-base font-medium text-red-500'>
    //     //             { (cart.TotalMoney * 1).toLocaleString() } <span className='underline'>đ</span>
    //     //         </span>
    //     //     }
    //     // },
    //     // {
    //     //     title: 'Ngày thanh toán',
    //     //     dataIndex: 'createdAt',
    //     //     render: (text, cart) => {
    //     //         return <span className='text-base'>
    //     //             { moment(cart.createdAt).format('DD/MM/YYYY') }
    //     //         </span>
    //     //     }

    //     // },
    // ]
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3 mt-4'>
                    <h2 className='text-4xl font-bold text-center text-red-500'>Lịch sử đặt hàng</h2>
                    {/* <Table dataSource={ cartHistory } columns={ columns } rowKey='id' /> */ }
                    <div className='border p-3'>
                        { renderTable() }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
