import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import style from 'components/Link/Link.style';

const Link = (props) => {
  const componentProps = Object.assign({}, props);
  delete componentProps.to;
  if (componentProps.theme !== undefined) delete componentProps.theme;
  if (componentProps.noStyle !== undefined) delete componentProps.noStyle;

  let styleFunc;

  if (props.noStyle) {
    styleFunc = Element => Element;
  } else if (style[props.theme]) {
    styleFunc = style[props.theme];
  } else {
    styleFunc = style.default;
  }

  if (props.to.includes('http')) {
    const Element = styleFunc('a');

    return (
      <Element
        target="_blank"
        rel="noopener noreferrer"
        href={props.to}
        {...componentProps}
      >
        {props.children}
      </Element>
    );
  }

  const Element = styleFunc(RouterLink);

  return (
    <Element to={props.to} {...componentProps}>
      {props.children}
    </Element>
  );
};

export default Link;
