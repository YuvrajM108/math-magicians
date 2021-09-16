import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <h1>0</h1>
        </div>
        <div className="button-row">
          <Button iText="AC" type="grey" />
          <Button iText="+/-" type="grey" />
          <Button iText="%" type="grey" />
          <Button iText="/" type="orange" />
        </div>
        <div className="button-row">
          <Button iText="7" type="grey" />
          <Button iText="8" type="grey" />
          <Button iText="9" type="grey" />
          <Button iText="X" type="orange" />
        </div>
        <div className="button-row">
          <Button iText="4" type="grey" />
          <Button iText="5" type="grey" />
          <Button iText="6" type="grey" />
          <Button iText="-" type="orange" />
        </div>
        <div className="button-row">
          <Button iText="1" type="grey" />
          <Button iText="2" type="grey" />
          <Button iText="3" type="grey" />
          <Button iText="+" type="orange" />
        </div>
        <div className="button-row">
          <Button iText="0" type="grey-large" />
          <Button iText="." type="grey" />
          <Button iText="=" type="orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
