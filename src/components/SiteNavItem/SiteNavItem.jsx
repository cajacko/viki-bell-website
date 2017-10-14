import React from 'react';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';

const SiteNavItem = ({ icon, url, title, to, mobile, hidden, mobileShow }) => {
  let listClasses = '';
  let linkClasses = '';
  let spanClasses = '';

  if (hidden) {
    listClasses = 'u-hide';
  } else if (mobile) {
    listClasses = 'SiteNav-item SiteNav-item--mobile';
    linkClasses = 'SiteNav-link';
    spanClasses = 'u-hide';
  } else {
    listClasses = 'SiteNav-item SiteNavMain-item';
    linkClasses = 'SiteNavMain-link SiteNav-link  u-clearFix';
    spanClasses = 'SiteNav-title';
  }

  return (
    <li className={listClasses}>
      <Link to={to} className={linkClasses}>
        <div style={{ display: mobileShow && 'inline-block' }}>
          <Icon icon={icon} className="SiteNav-icon" />
        </div>
        <span className={spanClasses}>{title}</span>
      </Link>
    </li>
  );
};

export default SiteNavItem;
