import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import buttonStyles from 'components/Button/Button.style';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      active: false,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    // Radium hack as buttons think they are still hovered when clicked
    if (nextProps.theme === 'loading') {
      this.setState({
        _radiumStyleState: {
          main: {
            ':hover': false,
          },
        },
      });
    }
  }

  render() {
    let buttonStyle;

    switch (this.props.theme) {
      case 'loading':
        buttonStyle = buttonStyles.loading;
        break;

      default:
        buttonStyle = buttonStyles.defaultColor;
    }

    buttonStyle = {
      ...buttonStyles.default,
      ...buttonStyle,
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
  theme: PropTypes.string,
};

Button.defaultProps = {
  action: null,
  children: null,
  style: {},
  theme: null,
};

export default Radium(Button);
