import React from 'react';
import Link from 'components/Link/Link';

const Breadcrumbs = ({ contentType, title, slug }) => {
  const breadcrumbs = [];

  if (contentType && title) {
    switch (contentType) {
      case 'category':
        breadcrumbs.push({ text: 'Categories', link: '/categories' });
        breadcrumbs.push({ text: title, link: `/categories/${slug}` });
        break;
      default:
        break;
    }
  }

  if (breadcrumbs.length === 0) {
    return null;
  }

  breadcrumbs.unshift({ text: 'Home', link: '/' });

  return (
    <nav>
      <ul className="Breadcrumbs u-clearFix">
        {breadcrumbs.map(({ text, link }) => (
          <li
            className="Breadcrumbs-item"
            itemScope=""
            itemType="http://data-vocabulary.org/Breadcrumb"
            key={link}
          >
            <Link noStyle className="Breadcrumbs-link" to={link} itemProp="url">
              <span className="Breadcrumbs-title" itemProp="title">
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
