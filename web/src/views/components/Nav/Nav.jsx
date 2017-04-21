/* @flow */

import React from 'react';

const Nav = () => {
  const navItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Item 1',
      url: '/post/1',
    },
    {
      title: 'Item 2',
      url: '/post/2',
    },
    {
      title: 'Item 3',
      url: '/post/3',
    },
    {
      title: 'Item 4',
      url: '/post/4',
    },
  ];

  return (
    <ul>
      {
        navItems.map(({ url, title }) => (
          <li key={url}><a href={url}>{title}</a></li>
        ))
      }
    </ul>
  );
};

export default Nav;
