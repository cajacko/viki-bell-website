import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import style from 'components/Link/Link.style';

const Link = (props) => {
  const to = props.to;

  const componentProps = Object.assign({}, props);
  delete componentProps.to;

  // Do a switch here with passed theme if want to change
  const styleFunc = style.default;

  if (to.includes('http')) {
    const Element = styleFunc('a');

    return (
      <Element
        target="_blank"
        rel="noopener noreferrer"
        href={to}
        {...componentProps}
      >
        {props.children}
      </Element>
    );
  }

  const Element = styleFunc(RouterLink);

  return (
    <Element to={to} {...componentProps}>
      {props.children}
    </Element>
  );
};

export default Link;
