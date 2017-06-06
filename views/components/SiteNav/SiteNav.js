import React from 'react';
import TextLink from 'components/TextLink/TextLink';
import IconButton from 'components/IconButton/IconButton';
import IconList from 'components/IconList/IconList';

const SiteNav = () => (
  <nav>
    <IconButton icon="burgerMenu" />

    <ul>
      <li><TextLink href="" colour="white">Posts</TextLink></li>
      <li><TextLink href="" colour="white">About</TextLink></li>
      <li><TextLink href="" colour="white">Life</TextLink></li>
      <li><TextLink href="" colour="white">Food</TextLink></li>
      <li><TextLink href="" colour="white">Travel</TextLink></li>
    </ul>

    <IconList />
    <IconButton icon="more" />
  </nav>
);

export default SiteNav;
