import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.iText = props.iText;
    this.class = props.class;
    this.id = props.id;
    this.calcFunc = props.calcFunc;
  }

  render() {
    return (
      <button className={this.class} onClick={() => this.calcFunc(this.id)} type="button">{this.iText}</button>
    );
  }
}

Button.propTypes = {
  iText: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  calcFunc: PropTypes.func.isRequired,
};

export default Button;
