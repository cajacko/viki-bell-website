import React from 'react';
import TextLink from 'components/TextLink/TextLink';
import IconLink from 'components/IconLink/IconLink';
import IconButton from 'components/IconButton/IconButton';

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

    <ul>
      <li><IconLink href="" colour="white" title="Twitter" /></li>
      <li><IconLink href="" colour="white" title="Instagram" /></li>
      <li><IconLink href="" colour="white" title="Facebook" /></li>
    </ul>

    <IconButton icon="more" />
  </nav>
);

export default SiteNav;
