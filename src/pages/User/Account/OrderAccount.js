import React, { Fragment } from 'react'
import { Table } from 'antd';


export default function OrderAccount(props) {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Đơn hàng',
            dataIndex: 'name',
        },
        {
            title: 'Ngày',
            dataIndex: 'age',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
            title: 'Giá trị đơn hàng',
            dataIndex: 'address',
        },
        {
            title: 'TT Thanh toán',
            dataIndex: 'address',
        },
    ];
    return (
        <Fragment>
            <div className='grid grid-rows'>
                <span className='uppercase mb-8 text-2xl text-red-500 font-medium font-serif'>Đơn hàng của bạn</span>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        </Fragment>
    )
}
