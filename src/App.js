import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index'
import Cart from './components/Food/Cart'
import Checkout from './components/Food/Checkout'

import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/cart/checkout" component={Checkout}/>
          </Switch>
        </div>
      </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
