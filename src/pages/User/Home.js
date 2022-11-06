import React, { Fragment } from 'react'
import BannerSlick from '../../components/Home/BannerSlick/BannerSlick'
import Contact from '../../components/Home/Footer/Contact'
import NavbarIcon from '../../components/Home/Navbar/NavbarIcon'
import Content1 from '../../components/Home/Product/Content1'
import Content2 from '../../components/Home/Product/Content2'
import Content3 from '../../components/Home/Product/Content3'

export default function Home() {
    return (
        <Fragment>
            <BannerSlick />
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <NavbarIcon />
                    <Content1 />
                    <Content2 />
                    <Content3 />
                    <Contact />
                </div>
            </div>
        </Fragment>
    )
}
