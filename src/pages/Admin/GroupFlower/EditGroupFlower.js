import { useFormik } from 'formik';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { _admin, _group } from '../../../utils/util/ConfigPath';
import { GetDetailGroupAction, UpdateGroupAction } from './../../../redux/Actions/ManageGroupAction';
import { AiOutlineRollback } from 'react-icons/ai';

export default function EditGroupFlower(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch();

    const { detailGroup } = useSelector(state => state.ManageGroupReducer);

    useEffect(() => {
        dispatch(GetDetailGroupAction(id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            GroupName: detailGroup.GroupName,
        },

        onSubmit: values => {
            dispatch(UpdateGroupAction(id, values))
        },
    });
    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div>
                    <button type='button' title='Trở về trang loại hoa' className='text-2xl py-2 px-5 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white' onClick={() => {
                        history.push(`${_admin}${_group}`)
                    }}>
                        <AiOutlineRollback />
                    </button>
                </div>
                <div className='col-span-3 col-start-3 mt-32 h-72 rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='text-center text-4xl font-bold text-red-500'>Cập nhật loại hoa</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type="text" name='GroupName' onChange={formik.handleChange} value={formik.values.GroupName} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Tên loại hoa..." />
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-blue-900 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-900' >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
