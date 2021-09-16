import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.iText = props.iText;
    this.class = props.class;
  }

  render() {
    return (
      <button className={this.class} type="button">{this.iText}</button>
    );
  }
}

Button.propTypes = { iText: PropTypes.string.isRequired, class: PropTypes.string.isRequired };

export default Button;
