import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = (props) => (
  <button className={props.class} onClick={() => props.calcFunc(props.id)} type="button">{props.iText}</button>
);

Button.propTypes = {
  iText: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  calcFunc: PropTypes.func.isRequired,
};

export default Button;
