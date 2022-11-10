import React, { Fragment, useState, useEffect } from 'react'
import {
    UserOutlined,
} from '@ant-design/icons';
import { BsFlower1 } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { Layout, Menu, message } from 'antd';
import { Route } from 'react-router';
import { NavLink, Redirect } from 'react-router-dom';
import {
    _account,
    _admin,
    _group,
    _home,
    _login
} from '../../utils/util/ConfigPath';
import { useSelector } from 'react-redux';
import _ from 'lodash'
import { history } from '../../App';
import { USER_LOGIN } from '../../redux/Types/ManageUserType';

const { Header, Content, Footer, Sider } = Layout;
export default function AdminTemplate(props) {
    const { Component, ...restRoute } = props;
    const [collapsed, setCollapsed] = useState(false);

    const { userLogin } = useSelector(state => state.ManageUserReducer);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    if (!sessionStorage.getItem(USER_LOGIN)) {
        message.error('Bạn chưa đăng nhập!')
        return <Redirect to={_login} />
    }
    if (userLogin.account.Role !== 'ADMIN') {
        message.error('Bạn không có quyền truy cập vào trang này!')
        return <Redirect to={_home} />
    }
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <div className='flex'>
            <NavLink to='/profile' className='flex'>
                <img className='w-14 h-14 rounded-full' src='https://media1.nguoiduatin.vn/media/ngac-kim-giang/2020/07/16/my-nu-4000-nam-bi-to-noi-doi4.jpg' alt={userLogin.username} />
                <span className='flex items-center border-r-2 border-green-900 text-lg font-bold mx-4 pr-4 cursor-pointer text-black'>{userLogin.account.Username}</span>
            </NavLink>
            <button onClick={() => {
                sessionStorage.removeItem(USER_LOGIN);
                history.push(`${_home}`);
                window.location.reload();
            }} className="self-center mr-8 px-4 py-3 border border-red-500 rounded-lg text-red-500 text-lg font-bold hover:text-red-700 hover:border-red-700">Đăng xuất</button>
        </div> : ''}
    </Fragment>
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: 'linear-gradient(180deg, white, #002140 80%)' }}>
                    <div className="m-4" style={{ backgroundColor: 'transparent' }}>
                        <img src='https://bizweb.dktcdn.net/100/232/638/themes/880685/assets/logo.png?1665539499572' alt='GiftLove' />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key='1' icon={<UserOutlined style={{ fontSize: 20 }} />}>
                            <NavLink to={`${_admin}${_account}`} >Accounts</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<BsFlower1 style={{ fontSize: 20 }} />}>
                            <NavLink to={`${_admin}${_group}`}>Group Flower</NavLink>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<IoBookSharp style={{ fontSize: 20 }} />}>
                            <NavLink to='/admin/product'>Flowers</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: 'linear-gradient(45deg, #002140 5%, transparent)' }}>
                        <div className='flex justify-end mt-1'>{operations}</div>
                    </Header>
                    <Content style={{ margin: '0 16px', }}>
                        <div style={{ padding: 24, minHeight: 360, }}>

                            <Component {...propsRoute} />

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}
