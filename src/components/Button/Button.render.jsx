import React, { PureComponent } from 'react';
import style from 'components/Button/Button.style';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { hover: false };

    this.onClick = this.onClick.bind(this);
    this.hover = this.hover.bind(this);
    this.attachHover = this.attachHover.bind(this);

    if (props.setHover) {
      props.setHover((hover) => {
        this.hover(hover);
      });
    }
  }

  onClick() {
    if (!this.props.disabled) this.props.onClick();
  }

  hover(hover) {
    if (this.state.hover !== hover) {
      this.setState({ hover });
    }
  }

  attachHover(hover) {
    return () => this.hover(hover);
  }

  render() {
    const styleFunc = this.props.disabled ? style.disabled : style.default;

    const Element = this.props.disabled
      ? styleFunc('div')
      : styleFunc('button');

    return (
      <Element
        innerRef={this.props.getRef}
        onClick={this.onClick}
        disabled={this.props.disabled}
        onMouseEnter={this.attachHover(true)}
        onMouseLeave={this.attachHover(false)}
        hover={this.state.hover}
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
