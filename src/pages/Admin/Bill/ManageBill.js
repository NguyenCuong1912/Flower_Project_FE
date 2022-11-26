
import React, { Fragment, useEffect } from 'react';
import { Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetListCheckout } from '../../../redux/Actions/CheckoutAction';
import moment from 'moment';
import { AiFillHeart, AiOutlineMore } from 'react-icons/ai';
import { history } from '../../../App';
import { _admin, _bill, _detail } from './../../../utils/util/ConfigPath';


const { Search } = Input;
const ManageBill = (props) => {
    const dispatch = useDispatch();

    const { lstCart } = useSelector(state => state.ManageCartReducer);
    console.log('a', lstCart)
    useEffect(() => {
        dispatch(GetListCheckout())
    }, [])
    const onSearch = (value) => {
        console.log(value)
    };

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
                    {cart.Account.PhoneNumber === null ? <marquee>
                        <div className='flex text-base'>
                            <span className='text-green-500'>GiftLove</span>
                            <span className='text-2xl pl-2 text-red-500'><AiFillHeart /></span>
                        </div>
                    </marquee> : <span>{cart.Account.PhoneNumber}</span>}
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

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Xem chi tiết hóa đơn' onClick={() => {
                        history.push(`${_admin}${_bill}${_detail}/${item.id}`)
                    }}>
                        <AiOutlineMore style={{ fontSize: 30 }} />
                    </button>
                </div>
            },
            width: '10%'

        },
    ]

    return (
        <Fragment>
            <div className='container mt-4'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý hóa đơn</h2>
                <div className='my-10 flex justify-end'>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstCart} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    );
}

export default ManageBill;
