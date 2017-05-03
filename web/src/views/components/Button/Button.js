import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ action, children }) => (
  <button onClick={action}>
    {children}
  </button>
);

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Button.defaultProps = {
  action: null,
  children: null,
};

export default Button;
