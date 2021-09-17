import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.iText = props.iText;
    this.class = props.class;
    this.id = props.id;
    this.parentAttr = props.parentAttr;
  }

  render() {
    return (
      <button className={this.class} onClick={calculate(this.parentAttr, this.id)} type="button">{this.iText}</button>
    );
  }
}

Button.propTypes = {
  iText: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parentAttr: PropTypes.elementType.isRequired,
};

export default Button;
