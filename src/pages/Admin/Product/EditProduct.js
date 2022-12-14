import React, { Fragment, useEffect, useState } from 'react'
import { Select, Input } from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { GetDetailProductAction, UpdateProductAction } from './../../../redux/Actions/ManageProductAction';
import { GetAllAction } from '../../../redux/Actions/ManageGroupAction';
import { DOMAIN } from '../../../utils/Settings/config';
import { history } from '../../../App';
import { _admin, _product } from '../../../utils/util/ConfigPath';
import { AiOutlineRollback } from 'react-icons/ai';

export default function EditProduct(props) {
    const { TextArea } = Input;
    let { id } = props.match.params;

    const dispatch = useDispatch();

    const { lstGroup } = useSelector(state => state.ManageGroupReducer);

    const { detailProduct } = useSelector(state => state.ManageProductReducer);

    useEffect(() => {
        dispatch(GetDetailProductAction(id))
        dispatch(GetAllAction())
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            GroupFlower_ID: detailProduct.GroupFlower_ID,
            ProductName: detailProduct.ProductName,
            Price: detailProduct.Price,
            Discount: detailProduct.Discount,
            Description: detailProduct.Description,
            products: null,
        },
        onSubmit: values => {
            values.Discount *= 1;

            let dataFlower = new FormData();
            for (let key in values) {
                if (key !== 'products') {
                    dataFlower.append(key, values[key]);
                }
                else {
                    dataFlower.append('products', values.products, values.products.name);
                }
            }

            dispatch(UpdateProductAction(id, dataFlower));

        }
    })
    function changeSelect(value) {
        formik.setFieldValue('GroupFlower_ID', value)
    }
    const [img, setImg] = useState('');
    const handleChangeFile = async (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            await formik.setFieldValue('products', file)
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImg(e.target.result) //Hinh base 64
            }
        }

    }

    return (
        <Fragment>
            <div>
                <div>
                    <button type='button' title='Tr??? v??? trang s???n ph???m' className='text-2xl py-2 px-5 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white' onClick={() => {
                        history.push(`${_admin}${_product}`)
                    }}>
                        <AiOutlineRollback />
                    </button>
                </div>
                <h1 className='text-center text-4xl font-bold text-red-500'>C???p nh???t hoa</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Lo???i hoa:</div>
                                <Select className='w-2/3' placeholder='Ch???n lo???i hoa' name='GroupFlower_ID' onChange={changeSelect} value={formik.values.GroupFlower_ID}>
                                    {lstGroup.map((item, index) => {
                                        return <Select.Option key={index} value={item.id}>{item.GroupName}</Select.Option>
                                    })}
                                </Select>

                            </div>
                            <div className='my-4'>
                                <div>T??n hoa:</div>
                                <input type='text' name='ProductName'
                                    onChange={formik.handleChange} value={formik.values.ProductName} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='T??n hoa...' />
                            </div>
                            <div className='my-4'>
                                <div>Gi?? ti???n:</div>
                                <input type='text' name='Price' onChange={formik.handleChange} value={formik.values.Price} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Gi?? ti???n...' />
                            </div>
                            <div className='my-4'>
                                <div>??u ????i:</div>
                                <input type='text' name='Discount' onChange={formik.handleChange} value={formik.values.Discount} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='??u ????i...' />
                            </div>
                            <div className='my-4'>
                                <span className='mr-2'>H??nh ???nh:</span>
                                <input type='file' onChange={handleChangeFile} accept='image/jpeg, image/jpg, image/png' />
                            </div>
                            <div className='my-4'>
                                <img className='w-36 h-36 rounded-md' src={img === '' ? `${DOMAIN}/${detailProduct?.ProductImage}` : img} alt='...' />
                            </div>
                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>M?? t???:</div>
                                <TextArea name='Description' onChange={formik.handleChange} value={formik.values.Description} rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='text-center p-3 border border-red-600 w-36 text-xl font-bold rounded text-red-600 hover:bg-red-600 hover:text-white'>C???p nh???t</button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
