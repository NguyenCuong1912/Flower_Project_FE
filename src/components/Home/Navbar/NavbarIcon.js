import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { _product } from '../../../utils/util/ConfigPath';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllAction } from '../../../redux/Actions/ManageGroupAction';

export default function NavbarIcon(props) {

    const dispatch = useDispatch();
    const { lstGroup } = useSelector(state => state.ManageGroupReducer);

    useEffect(() => {
        dispatch(GetAllAction())
    }, [])



    return (
        <Fragment>
            <div className='grid grid-cols-6 my-12'>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-tinh-yeu.png' alt='Hoa tinh yeu' />
                    <div title='Hoa tình yêu' className='mt-4 uppercase text-black font-medium text-base '>hoa tình yêu</div>
                </NavLink>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-sinh-nhat.png' alt='Hoa sinh nhat' />
                    <div title='Hoa sinh nhật' className='mt-4 uppercase text-black font-medium text-base '>hoa sinh nhật</div>
                </NavLink>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-cam-tay-co-dau.png' alt='Hoa cuoi' />
                    <div title='Hoa cưới' className='mt-4 uppercase text-black font-medium text-base '>hoa cưới</div>
                </NavLink>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-lan-ho-diep.png' alt='Hoa lan' />
                    <div title='Hoa lan' className='mt-4 uppercase text-black font-medium text-base '>hoa lan</div>
                </NavLink>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-khai-truong.png' alt='Hoa khai truong' />
                    <div title='Hoa khai trương' className='mt-4 uppercase text-black font-medium text-base '>Hoa khai trương</div>
                </NavLink>
                <NavLink to={_product} className='text-center'>
                    <img className='w-5/6 mx-4 rounded-full drop-shadow-2xl shadow-2xl hover:scale-105' src='img/navbaricon/hoa-tang-le.png' alt='Hoa tang le' />
                    <div title='Hoa chia buồn' className='mt-4 uppercase text-black font-medium text-base '>hoa chia buồn</div>
                </NavLink>
            </div>
        </Fragment>
    )
}
