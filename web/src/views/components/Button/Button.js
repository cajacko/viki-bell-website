import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import buttonStyles from 'components/Button/Button.style';

const Button = ({ action, children, style, theme }) => {
  let buttonStyle;

  switch (theme) {
    case 'loading':
      buttonStyle = buttonStyles.loading;
      break;

    default:
      buttonStyle = buttonStyles.defaultColor;
  }

  buttonStyle = { ...buttonStyles.default, ...buttonStyle, ...style };

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
  theme: PropTypes.string,
};

Button.defaultProps = {
  action: null,
  children: null,
  style: {},
  theme: null,
};

export default Radium(Button);
