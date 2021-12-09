import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx'


import './App.css';


const basename = process.env.REACT_APP_BASENAME;

class App extends React.Component {
  render(){

    
    console.log(basename)

    return(
      <div>
        <Header />
          <Switch>
            <Route path='/' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
      </div>
     )
  }
}


export default App;
