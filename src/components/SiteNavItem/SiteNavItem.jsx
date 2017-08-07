import React from 'react';
import Icon from 'components/Icon/Icon';

const SiteNavItem = ({ icon, url, title, to, mobile, hidden }) => {
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
      <a className={linkClasses} href={url}>
        <Icon icon={icon} className="SiteNav-icon" />
        <span className={spanClasses}>{title}</span>
      </a>
    </li>
  );
};

export default SiteNavItem;
