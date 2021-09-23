import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="topbar">
          <h1 className="website-title">Math Magicians</h1>
          <nav className="navbar">
            <Link to="/" className="navlink">Home</Link>
            <p>|</p>
            <Link to="/calculator" className="navlink">Calculator</Link>
            <p>|</p>
            <Link to="/quote" className="navlink">Quote</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
