import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = ({initialAttributes}) => {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     total: null,
  //     next: null,
  //     operation: null,
  //   };
  // }

  const [attributes, setAttributes] = useState(initialAttributes);

  const handleClick = (name) => {
    const result = calculate(attributes, name);
    setAttributes(result);
  };

  const isTotalNull = () => {
    if (!attributes.total) {
      return 0;
    }
    return attributes.total;
  }

    return (
      <div className="calculator">
        <div className="screen">
          <h2 className="output">{isTotalNull()}</h2>
        </div>
        <div className="button-row">
          <Button iText="AC" class="grey" id="AC" calcFunc={handleClick} />
          <Button iText="+/-" class="grey" id="+/-" calcFunc={handleClick} />
          <Button iText="%" class="grey" id="%" calcFunc={handleClick} />
          <Button iText="÷" class="orange" id="÷" calcFunc={handleClick} />
        </div>
        <div className="button-row">
          <Button iText="7" class="grey" id="7" calcFunc={handleClick} />
          <Button iText="8" class="grey" id="8" calcFunc={handleClick} />
          <Button iText="9" class="grey" id="9" calcFunc={handleClick} />
          <Button iText="×" class="orange" id="x" calcFunc={handleClick} />
        </div>
        <div className="button-row">
          <Button iText="4" class="grey" id="4" calcFunc={handleClick} />
          <Button iText="5" class="grey" id="5" calcFunc={handleClick} />
          <Button iText="6" class="grey" id="6" calcFunc={handleClick} />
          <Button iText="-" class="orange" id="-" calcFunc={handleClick} />
        </div>
        <div className="button-row">
          <Button iText="1" class="grey" id="1" calcFunc={handleClick} />
          <Button iText="2" class="grey" id="2" calcFunc={handleClick} />
          <Button iText="3" class="grey" id="3" calcFunc={handleClick} />
          <Button iText="+" class="orange" id="+" calcFunc={handleClick} />
        </div>
        <div className="button-row">
          <Button iText="0" class="grey-large" id="0" calcFunc={this.handleClick} />
          <Button iText="." class="grey" id="." calcFunc={this.handleClick} />
          <Button iText="=" class="orange" id="=" calcFunc={this.handleClick} />
        </div>
      </div>
    );
}

export default Calculator;
