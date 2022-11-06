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



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/product" exact Component={Product} />
        <HomeTemplate path="/detail" exact Component={ProductDetail} />
        <HomeTemplate path="/cart" exact Component={ShoppingCart} />

        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />


      </Switch>
    </Router>
  )
}
