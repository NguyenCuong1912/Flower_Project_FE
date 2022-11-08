import React, { Fragment, useState, useEffect } from 'react'
import {
    UserOutlined,
} from '@ant-design/icons';
import { FcFilingCabinet } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { Layout, Menu } from 'antd';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { _account, _admin } from '../../utils/util/ConfigPath';
import { useSelector } from 'react-redux';


const { Header, Content, Footer, Sider } = Layout;
export default function AdminTemplate(props) {
    const { Component, ...restRoute } = props;
    const [collapsed, setCollapsed] = useState(false);

    const { lstUser } = useSelector(state => state.ManageUserReducer);
    console.log('login', lstUser)
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    // const operations = <Fragment>
    //     {!_.isEmpty(userLogin) ? <div className='flex'>
    //         <NavLink to='/profile' className='flex'>
    //             <img className='w-14 h-14 rounded-full' src='https://c4.wallpaperflare.com/wallpaper/240/34/575/8k-vegetto-4k-super-saiyan-blue-wallpaper-preview.jpg' alt={userLogin.username} />
    //             <span className='flex items-center text-lg font-bold mx-2 cursor-pointer text-yellow-500'>{userLogin.username}</span>
    //         </NavLink>
    //         <button onClick={() => {
    //             // sessionStorage.removeItem(USER_LOGIN);
    //             // sessionStorage.removeItem(TOKEN);
    //             history.push('/home');
    //             window.location.reload();
    //         }} className="self-center border-l-2 border-green-900 px-8 py-3 text-yellow-500 text-lg font-bold hover:text-green-900">Đăng xuất</button>
    //     </div> : ''}
    // </Fragment>
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ background: 'linear-gradient(180deg, white, #002140 80%)' }}>
                    <div className="m-4" style={{ backgroundColor: 'transparent' }}>
                        <img src='https://bizweb.dktcdn.net/100/232/638/themes/880685/assets/logo.png?1665539499572' alt='GiftLove' />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key='1' icon={<UserOutlined style={{ fontSize: 20, color: 'gray' }} />}>
                            <NavLink to={`${_admin}${_account}`} >Accounts</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<FcFilingCabinet style={{ fontSize: 20 }} />}>
                            <NavLink to='/admin/category'>Categories</NavLink>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<IoBookSharp style={{ fontSize: 20, color: 'gray' }} />}>
                            <NavLink to='/admin/product'>Flowers</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: 'linear-gradient(45deg, #002140 5%, transparent)' }}>
                        {/* <div className='flex justify-end my-4'>{operations}</div> */}
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
