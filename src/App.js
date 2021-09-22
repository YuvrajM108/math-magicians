import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

const initAttrObj = {
  total: null,
  next: null,
  operation: null,
};

const App = () => (
  <Router>
    <Switch>
      <div className="App">
        <div className="topbar">
          <h1 className="website-title">Math Magicians</h1>
          <nav>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator initialAttributes={initAttrObj} />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </nav>
        </div>
      </div>
    </Switch>
  </Router>
);

export default App;
