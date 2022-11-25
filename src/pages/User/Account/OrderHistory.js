import { Table } from 'antd'
import moment from 'moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { GetListCheckout } from '../../../redux/Actions/CheckoutAction';
import { _admin, _bill, _detail } from '../../../utils/util/ConfigPath';

export default function OrderHistory() {
    const dispatch = useDispatch();

    const { lstCart } = useSelector(state => state.ManageCartReducer);

    useEffect(() => {
        dispatch(GetListCheckout())
    }, [])


    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'Username',
            render: (text, cart) => {
                return <span title='Chi tiết hóa đơn' onClick={() => {
                    history.push(`${_admin}${_bill}${_detail}/${cart.id}`)
                }} className='text-base hover:underline cursor-pointer hover:text-green-500'>
                    {cart.Account.Username}
                </span>
            }
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'PhoneNumber',
            render: (text, cart) => {
                return <span className='text-base'>
                    {cart.Account.PhoneNumber}
                </span>
            }

        },
        {
            title: 'Tổng tiền',
            dataIndex: 'TotalMoney',
            render: (text, cart) => {
                return <span className='text-base font-medium text-red-500'>
                    {(cart.TotalMoney * 1).toLocaleString()} <span className='underline'>đ</span>
                </span>
            }
        },
        {
            title: 'Ngày thanh toán',
            dataIndex: 'createdAt',
            render: (text, cart) => {
                return <span className='text-base'>
                    {moment(cart.createdAt).format('DD/MM/YYYY')}
                </span>
            }

        },
    ]
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3 mt-4'>
                    <h2 className='text-4xl font-bold text-center text-red-500'>Lịch sử đặt hàng</h2>
                    <Table dataSource={lstCart} columns={columns} rowKey='id' />;
                </div>
            </div>
        </Fragment>
    )
}
