import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx'


import './App.css';


const HomePage = () =>(
  <div>
    Homepage
  </div>
)


class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
     )
  }
}


export default App;
