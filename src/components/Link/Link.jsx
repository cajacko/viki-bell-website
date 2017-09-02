import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => {
  const to = props.to;

  const componentProps = Object.assign({}, props);
  delete componentProps.to;

  if (to.includes('http')) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={to} {...componentProps}>
        {props.children}
      </a>
    );
  }

  return (
    <RouterLink to={to} {...componentProps}>
      {props.children}
    </RouterLink>
  );
};

export default Link;
