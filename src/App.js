import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/User/Home';
import Product from './pages/User/Product';
import ShoppingCart from './pages/User/ShoppingCart';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/product" exact Component={Product} />
        <HomeTemplate path="/cart" exact Component={ShoppingCart} />

      </Switch>
    </Router>
  )
}
