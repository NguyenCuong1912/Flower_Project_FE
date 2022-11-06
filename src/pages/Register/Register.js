import React, { Fragment } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { RegisterAction } from './../../redux/Actions/ManageUserAction';
export default function Register(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
            Role: "CLIENT"
        },

        onSubmit: values => {
            dispatch(RegisterAction(values))
        },
    });

    return (
        <Fragment>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 flex justify-center shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img src="https://www.flowercorner.vn/image/catalog/New%20Sep/red-wine.jpg" className="w-5/6 rounded shadow-2xl drop-shadow-2xl mb-8" alt='' />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-6">
                                    <span className='text-xl'>Tài khoản:</span>
                                    <input type="text" name='Username' onChange={formik.handleChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nhập tài khoản..." />
                                </div>
                                <div className="mb-6">
                                    <span className='text-xl'>Mật khẩu:</span>
                                    <input type="password" name='Password' onChange={formik.handleChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nhập mật khẩu..." />
                                </div>

                                <div className="text-center lg:text-left">
                                    <button type="submit" className="inline-block px-7 py-3 bg-red-500 border border-red-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-red-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                        Đăng ký
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
