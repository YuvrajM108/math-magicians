import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const initAttrObj = {
  total: null,
  next: null,
  operation: null,
};

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="App">
    <h1>Math Magicians</h1>
    <Calculator initialAttributes={initAttrObj} />
  </div>
);

export default App;
