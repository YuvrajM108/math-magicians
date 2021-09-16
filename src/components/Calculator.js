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
          <Button iText="AC" class="grey" />
          <Button iText="+/-" class="grey" />
          <Button iText="%" class="grey" />
          <Button iText="÷" class="orange" />
        </div>
        <div className="button-row">
          <Button iText="7" class="grey" />
          <Button iText="8" class="grey" />
          <Button iText="9" class="grey" />
          <Button iText="X" class="orange" />
        </div>
        <div className="button-row">
          <Button iText="4" class="grey" />
          <Button iText="5" class="grey" />
          <Button iText="6" class="grey" />
          <Button iText="-" class="orange" />
        </div>
        <div className="button-row">
          <Button iText="1" class="grey" />
          <Button iText="2" class="grey" />
          <Button iText="3" class="grey" />
          <Button iText="+" class="orange" />
        </div>
        <div className="button-row">
          <Button iText="0" class="grey-large" />
          <Button iText="." class="grey" />
          <Button iText="=" class="orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
