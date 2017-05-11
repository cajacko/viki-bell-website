import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const Button = ({ action, children, style }) => (
  <button onClick={action} style={style}>
    {children}
  </button>
);

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  // eslint-disable-next-line
  style: PropTypes.object,
};

Button.defaultProps = {
  action: null,
  children: null,
  style: {},
};

export default Radium(Button);
