import React from 'react';
import Icon from 'components/Icon/Icon';
import SiteNavSubItem from 'components/SiteNavSubItem/SiteNavSubItem';
import Link from 'components/Link/Link';

const SiteNavSubNav = ({ mainTitle, mainIcon, mainTo, subItems }) => (
  <li className="SiteNav-item SiteNavMain-item u-hasDropDown">
    <Link
      className="SiteNavMain-link SiteNav-link u-controlsDropdown u-clearFix"
      to={mainTo}
      aria-controls="SiteNav-subNav--2"
      aria-expanded="false"
    >
      <Icon icon={mainIcon} className="SiteNav-icon" />
      <span className="SiteNav-title">{mainTitle}</span>
    </Link>
    <ul
      id="SiteNav-subNav--2"
      className="SiteNav-subNav SiteNav-list"
      aria-hidden="true"
      aria-expanded="false"
      style={{ display: 'none' }}
    >
      {subItems &&
        subItems.map(({ to, title }) => (
          <SiteNavSubItem title={title} to={to} />
        ))}
    </ul>
  </li>
);

export default SiteNavSubNav;
