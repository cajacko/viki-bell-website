import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import buttonStyles from 'components/Button/Button.style';
import LoadingBar from 'components/LoadingBar/LoadingBar';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      active: false,
      focus: false,
    };
  }

  render() {
    const buttonStyle = {
      ...buttonStyles.default,
      ...buttonStyles.defaultColor,
      ...this.props.style,
    };

    return (
      <button onClick={this.props.action} style={buttonStyle}>
        {this.props.children}
      </button>
    );
  }
}

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
  theme: null,
};

export default Radium(Button);
