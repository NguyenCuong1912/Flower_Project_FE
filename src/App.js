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
  _order,
  _group,
  _bill
} from './utils/util/ConfigPath';
import EditAccount from './pages/Admin/Account/EditAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import DetailAccount from './pages/User/Account/DetailAccount';
import UpdateAccount from './pages/User/Account/UpdateAccount';
import ManageGroup from './pages/Admin/GroupFlower/ManageGroup';
import AddGroupFlower from './pages/Admin/GroupFlower/AddGroupFlower';
import EditGroupFlower from './pages/Admin/GroupFlower/EditGroupFlower';
import ManageProduct from './pages/Admin/Product/ManageProduct';
import AddProduct from './pages/Admin/Product/AddProduct';
import EditProduct from './pages/Admin/Product/EditProduct';
import ManageBill from './pages/Admin/Bill/ManageBill';
import DetailBill from './pages/Admin/Bill/DetailBill';
import OrderHistory from './pages/User/Account/OrderHistory';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={`${_product}/:id`} exact Component={Product} />
        <HomeTemplate path={`${_detail}/:id`} exact Component={ProductDetail} />
        <HomeTemplate path={_cart} exact Component={ShoppingCart} />
        <HomeTemplate path={`${_order}/:id`} exact Component={OrderHistory} />

        <AccountTemplate path={_account} exact Component={DetailAccount} />
        <AccountTemplate path={`${_account}${_edit}`} exact Component={UpdateAccount} />





        <UserTemplate path={_login} exact Component={Login} />
        <UserTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={ManageAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={EditAccount} />

        <AdminTemplate path={`${_admin}${_group}`} exact Component={ManageGroup} />
        <AdminTemplate path={`${_admin}${_group}${_add}`} exact Component={AddGroupFlower} />
        <AdminTemplate path={`${_admin}${_group}${_edit}/:id`} exact Component={EditGroupFlower} />

        <AdminTemplate path={`${_admin}${_product}`} exact Component={ManageProduct} />
        <AdminTemplate path={`${_admin}${_product}${_add}`} exact Component={AddProduct} />
        <AdminTemplate path={`${_admin}${_product}${_edit}/:id`} exact Component={EditProduct} />

        <AdminTemplate path={`${_admin}${_bill}`} exact Component={ManageBill} />
        <AdminTemplate path={`${_admin}${_bill}${_detail}/:id`} exact Component={DetailBill} />





      </Switch>
    </Router>
  )
}
