import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/User/Home';
import Product from './pages/User/Product';
import ShoppingCart from './pages/User/ShoppingCart';
import ProductDetail from './pages/User/ProductDetail';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManageAccount from './pages/Admin/Account/ManageAccount';
import {
  _account,
  _admin,
  _home,
  _product,
  _detail,
  _cart,
  _login,
  _register,
  _edit,
  _add,
  _order
} from './utils/util/ConfigPath';
import EditAccount from './pages/Admin/Account/EditAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import DetailAccount from './pages/User/Account/DetailAccount';
import OrderAccount from './pages/User/Account/OrderAccount';
import UpdateAccount from './pages/User/Account/UpdateAccount';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={_product} exact Component={Product} />
        <HomeTemplate path={_detail} exact Component={ProductDetail} />
        <HomeTemplate path={_cart} exact Component={ShoppingCart} />
        <AccountTemplate path={_account} exact Component={DetailAccount} />
        <AccountTemplate path={`${_account}${_order}`} exact Component={OrderAccount} />
        <AccountTemplate path={`${_account}${_edit}`} exact Component={UpdateAccount} />




        <UserTemplate path={_login} exact Component={Login} />
        <UserTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={ManageAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={EditAccount} />



      </Switch>
    </Router>
  )
}
