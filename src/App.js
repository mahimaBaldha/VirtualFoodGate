import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index'

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
            {/* <Route exact path="/lyrics/track/:id" component={Lyrics}/> */}
          </Switch>
        </div>
      </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
