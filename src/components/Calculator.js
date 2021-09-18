import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(name) {
    const result = calculate(this.state, name);
    this.setState(result);
  }

  isTotalNull() {
    if (!this.state.total) {
      return 0;
    }
    return this.state.total;
  }

  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <h2 className="output">{this.isTotalNull()}</h2>
        </div>
        <div className="button-row">
          <Button iText="AC" class="grey" id="AC" calcFunc={this.handleClick} />
          <Button iText="+/-" class="grey" id="+/-" calcFunc={this.handleClick} />
          <Button iText="%" class="grey" id="%" calcFunc={this.handleClick} />
          <Button iText="÷" class="orange" id="÷" calcFunc={this.handleClick} />
        </div>
        <div className="button-row">
          <Button iText="7" class="grey" id="7" calcFunc={this.handleClick} />
          <Button iText="8" class="grey" id="8" calcFunc={this.handleClick} />
          <Button iText="9" class="grey" id="9" calcFunc={this.handleClick} />
          <Button iText="×" class="orange" id="x" calcFunc={this.handleClick} />
        </div>
        <div className="button-row">
          <Button iText="4" class="grey" id="4" calcFunc={this.handleClick} />
          <Button iText="5" class="grey" id="5" calcFunc={this.handleClick} />
          <Button iText="6" class="grey" id="6" calcFunc={this.handleClick} />
          <Button iText="-" class="orange" id="-" calcFunc={this.handleClick} />
        </div>
        <div className="button-row">
          <Button iText="1" class="grey" id="1" calcFunc={this.handleClick} />
          <Button iText="2" class="grey" id="2" calcFunc={this.handleClick} />
          <Button iText="3" class="grey" id="3" calcFunc={this.handleClick} />
          <Button iText="+" class="orange" id="+" calcFunc={this.handleClick} />
        </div>
        <div className="button-row">
          <Button iText="0" class="grey-large" id="0" calcFunc={this.handleClick} />
          <Button iText="." class="grey" id="." calcFunc={this.handleClick} />
          <Button iText="=" class="orange" id="=" calcFunc={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
