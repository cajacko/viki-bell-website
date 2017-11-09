import React, { PureComponent } from 'react';
import style from 'components/Button/Button.style';

class Button extends PureComponent {
  render() {
    const styleFunc = style.default;

    const Element = styleFunc('button');

    return (
      <Element onClick={this.props.onClick}>{this.props.children}</Element>
    );
  }
}

export default Button;
