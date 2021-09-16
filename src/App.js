import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Math Magicians</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
