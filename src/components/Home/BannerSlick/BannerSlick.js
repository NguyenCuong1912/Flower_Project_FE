import React from 'react'
import Slider from "react-slick";

export default function BannerSlick() {

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img src='img/banner/banner1.jpg' alt='' />
                </div>
                <div>
                    <img style={{ height: '723px' }} src='img/banner/banner2.jpg' alt='' />
                </div>
                <div>
                    <img style={{ height: '723px' }} src='img/banner/banner3.jpg' alt='' />
                </div>
                <div>
                    <img style={{ height: '723px' }} src='img/banner/banner4.jpg' alt='' />
                </div>
                <div>
                    <img style={{ height: '723px' }} src='img/banner/banner5.jpg' alt='' />
                </div>
            </Slider>
        </div>
    )
}
