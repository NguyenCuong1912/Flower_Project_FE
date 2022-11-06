import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import {
    FaFacebookF,
    FaFacebookMessenger,
    FaTwitter
} from "react-icons/fa";

export default function Login(props) {
    return (
        <Fragment>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 flex justify-center shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img src="https://www.flowercorner.vn/image/catalog/New%20Sep/ban-mai.jpg" className="w-full rounded shadow-2xl drop-shadow-2xl mb-8" alt='' />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form>
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="text-lg mb-0 mr-4">Đăng nhập với:</p>

                                    <NavLink to='' title='Facebook' className='h-11 w-11 bg-blue-900 border rounded-full text-white grid place-items-center hover:border-blue-900 hover:bg-white hover:text-blue-900'>
                                        <FaFacebookF />
                                    </NavLink>
                                    <NavLink to='' title='Zalo' className='mx-2 h-11 w-11 bg-cyan-400 border rounded-full text-white grid place-items-center hover:border-cyan-400 hover:bg-white hover:text-cyan-400'>
                                        <FaFacebookMessenger />
                                    </NavLink>
                                    <NavLink to='' title='Twitter' className='h-11 w-11 bg-red-500 border rounded-full text-white grid place-items-center hover:border-red-500 hover:bg-white hover:text-red-500'>
                                        <FaTwitter />
                                    </NavLink>
                                </div>
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>
                                <div className="mb-6">
                                    <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Nhập tài khoản..." />
                                </div>
                                <div className="mb-6">
                                    <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Nhập mật khẩu..." />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Nhớ tài khoản, mật khẩu</label>
                                    </div>
                                    <NavLink to='' className="text-gray-800 hover:text-red-500">Quên mật khẩu?</NavLink>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button type="button" className="inline-block px-7 py-3 bg-red-500 border border-red-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Đăng nhập
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Bạn chưa có tài khoản?
                                        <NavLink to="/register" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Đăng ký</NavLink>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
