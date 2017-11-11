import React, { PureComponent } from 'react';
import style from 'components/Button/Button.style';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.disabled) this.props.onClick();
  }

  render() {
    const styleFunc = this.props.disabled ? style.disabled : style.default;

    const Element = styleFunc('button');

    return (
      <Element onClick={this.onClick} disabled={this.props.disabled}>
        {this.props.children}
      </Element>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

export default Button;
