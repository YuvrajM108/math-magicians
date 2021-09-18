import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = (props) => (
  // constructor(props) {
  //   super(props);
  //   this.iText = props.iText;
  //   this.class = props.class;
  //   this.id = props.id;
  //   this.calcFunc = props.calcFunc;
  // }
  <button className={props.class} onClick={() => props.calcFunc(props.id)} type="button">{props.iText}</button>
);

Button.propTypes = {
  iText: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  calcFunc: PropTypes.func.isRequired,
};

export default Button;
