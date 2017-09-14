import React from 'react';
import Link from 'components/Link/Link';

const SiteNavSubItem = ({ title, to }) => (
  <li className="SiteNav-subItem">
    <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to={to}>
      {title}
    </Link>
  </li>
);

export default SiteNavSubItem;
