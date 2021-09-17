import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  isTotalNull() {
    if (!this.state.attributes.total) {
      return 0;
    }
    return this.state.attributes.total;
  }

  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <h2 className="output">{this.isTotalNull()}</h2>
        </div>
        <div className="button-row">
          <Button iText="AC" class="grey" id="AC" parentAttr={this.state.attributes} />
          <Button iText="+/-" class="grey" id="+/-" parentAttr={this.state.attributes} />
          <Button iText="%" class="grey" id="%" parentAttr={this.state.attributes} />
          <Button iText="÷" class="orange" id="÷" parentAttr={this.state.attributes} />
        </div>
        <div className="button-row">
          <Button iText="7" class="grey" id="7" parentAttr={this.state.attributes} />
          <Button iText="8" class="grey" id="8" parentAttr={this.state.attributes} />
          <Button iText="9" class="grey" id="9" parentAttr={this.state.attributes} />
          <Button iText="×" class="orange" id="x" parentAttr={this.state.attributes} />
        </div>
        <div className="button-row">
          <Button iText="4" class="grey" id="4" parentAttr={this.state.attributes} />
          <Button iText="5" class="grey" id="5" parentAttr={this.state.attributes} />
          <Button iText="6" class="grey" id="6" parentAttr={this.state.attributes} />
          <Button iText="-" class="orange" id="-" parentAttr={this.state.attributes} />
        </div>
        <div className="button-row">
          <Button iText="1" class="grey" id="1" parentAttr={this.state.attributes} />
          <Button iText="2" class="grey" id="2" parentAttr={this.state.attributes} />
          <Button iText="3" class="grey" id="3" parentAttr={this.state.attributes} />
          <Button iText="+" class="orange" id="+" parentAttr={this.state.attributes} />
        </div>
        <div className="button-row">
          <Button iText="0" class="grey-large" id="0" parentAttr={this.state.attributes} />
          <Button iText="." class="grey" id="." parentAttr={this.state.attributes} />
          <Button iText="=" class="orange" id="=" parentAttr={this.state.attributes} />
        </div>
      </div>
    );
  }
}

export default Calculator;
