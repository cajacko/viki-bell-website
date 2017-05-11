import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import buttonStyles from 'components/Button/Button.style';

const Button = ({ action, children, style }) => {
  const buttonStyle = { ...buttonStyles.default, ...style };
  return (
    <button onClick={action} style={buttonStyle}>
      {children}
    </button>
  );
};

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
