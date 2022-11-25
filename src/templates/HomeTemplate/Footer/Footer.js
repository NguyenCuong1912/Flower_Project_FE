import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import {
    AiOutlineMail,
    AiOutlineRight

} from 'react-icons/ai';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookF,
    FaFacebookMessenger
} from "react-icons/fa";
import Contact from './Contact';
import { _footer } from '../../../utils/util/ConfigPath';

export default function Footer(props) {
    return (
        <Fragment>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <Contact />
                </div>
            </div>
            <footer className="text-gray-600 body-font border-t-2 bg-gray-900">
                <div className="container px-1/2 py-14 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <NavLink to='' className="flex title-font font-medium items-center md:justify-start justify-center">
                                <img src='../img/logo_footer.png' alt='GiftLove' />
                            </NavLink>
                            <nav className="list-none mt-4">
                                <div>Được thành lập vào ngày 06/11/2022
                                    với niềm đam mê và khát vọng thành công trong lĩnh vực TMĐT</div>
                                <div className='flex'><FaMapMarkerAlt className='mt-1 mr-1' /> Địa chỉ: Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội</div>
                                <div className='flex'><FaPhoneAlt className='mt-1 mr-1' /> Số điện thoại: 1900 1508</div>
                                <div>
                                    <span className='flex'><AiOutlineMail className='mt-1 mr-1' />Email:</span>
                                    <NavLink to='' className='text-red-500 hover:text-red-900'>cskh_online@giftlove.com</NavLink>
                                </div>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium font-serif text-white tracking-widest text-2xl mb-3 ">Chính sách</h2>
                            <nav className="list-none">
                                <li>
                                    <NavLink to='' className="text-gray-600 flex hover:text-red-500 hover:ml-4"><AiOutlineRight className='mt-1 mr-1' />Sản phẩm</NavLink>
                                </li>
                                <li>
                                    <NavLink to='' className="text-gray-600 flex my-2 hover:text-red-500 hover:ml-4"><AiOutlineRight className='mt-1 mr-1' />Hoa tươi</NavLink>
                                </li>
                                <li>
                                    <NavLink to='' className="text-gray-600 flex my-2 hover:text-red-500 hover:ml-4"><AiOutlineRight className='mt-1 mr-1' />Hoa đặc biệt</NavLink>
                                </li>
                                <li>
                                    <NavLink to='' className="text-gray-600 flex my-2 hover:text-red-500 hover:ml-4"><AiOutlineRight className='mt-1 mr-1' />Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to='' className="text-gray-600 flex my-2 hover:text-red-500 hover:ml-4"><AiOutlineRight className='mt-1 mr-1' />Liên hệ</NavLink>
                                </li>

                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ĐĂNG KÝ NHẬN TIN</h2>
                            <div className='my-3'>
                                <span>
                                    Hãy nhập địa chỉ email của bạn vào ô dưới đây để có thể nhận được tất cả các tin tức mới nhất của GiftLove về các sản phẩm mới, các chương trình khuyến mãi mới. GiftLove xin đảm bảo sẽ không gửi mail rác, mail spam tới bạn.
                                </span>
                            </div>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-red-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Nhập email của bạn...' />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <NavLink to='' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={`${_footer}`} alt='GiftLove' />
                        </NavLink>
                        <div className='-mt-20'>
                            <img src='img/people_footer.png' alt='people' />
                        </div>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <NavLink to='' title='Theo dõi Facebook của GiftLove' className='h-11 w-11 bg-blue-900 border rounded-full text-white grid place-items-center hover:border-blue-900 hover:bg-white hover:text-blue-900'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink to='' title='Liên hệ GiftLove qua Zalo' className='mx-2 h-11 w-11 bg-cyan-400 border rounded-full text-white grid place-items-center hover:border-cyan-400 hover:bg-white hover:text-cyan-400'>
                                <FaFacebookMessenger />
                            </NavLink>
                            <NavLink to='' title='Liên hệ GiftLove qua điện thoại: 19001508' className='h-11 w-11 bg-red-500 border rounded-full text-white grid place-items-center hover:border-red-500 hover:bg-white hover:text-red-500'>
                                <FaPhoneAlt />
                            </NavLink>
                        </span>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
