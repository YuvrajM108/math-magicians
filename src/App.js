import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

// const initAttrObj = {
//   total: null,
//   next: null,
//   operation: null,
// };

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h1 className="website-title">Math Magicians</h1>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/quote">Quote</Link>
            <Link to="/calculator">Calculator</Link>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/quote" component={Quote} />
              <Route path="/calculator" component={Calculator} />
            </Routes>
          </nav>
        </Router>
      </div>
    </div>
  );
}

export default App;
