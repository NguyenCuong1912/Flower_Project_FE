import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/User/Home';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  )
}