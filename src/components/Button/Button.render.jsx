import React, { PureComponent } from 'react';
import style from 'components/Button/Button.style';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { clickDivHack: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.disabled) this.props.onClick();

    // This clickDivHack gets rid of the sticky hover bug on mobile devices.
    // Managing the hover state in the js didn't perform well in some browsers.
    // So this hack is ok for now
    this.setState({ clickDivHack: true });

    setTimeout(() => {
      this.setState({ clickDivHack: false });
    }, 10);
  }

  render() {
    const styleFunc = this.props.disabled ? style.disabled : style.default;
    let Element;

    if (this.state.clickDivHack || this.props.disabled) {
      Element = styleFunc('div');
    } else {
      Element = styleFunc('button');
    }

    return (
      <Element
        innerRef={this.props.getRef}
        onClick={this.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </Element>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

export default Button;
