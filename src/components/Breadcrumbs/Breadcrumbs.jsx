import React from 'react';

const Breadcrumbs = () => (
  <nav>
    <ul className="Breadcrumbs u-clearFix">
      <li className="Breadcrumbs-item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
        <a className="Breadcrumbs-link" href="/" itemProp="url"><span className="Breadcrumbs-title" itemProp="title">Home</span></a>
      </li>
      <li className="Breadcrumbs-item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
        <a className="Breadcrumbs-link" href="/posts/" itemProp="url"><span className="Breadcrumbs-title" itemProp="title">Posts</span></a>
      </li>
      <li className="Breadcrumbs-item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
        <a className="Breadcrumbs-link" href="/posts/my-july-highlights" itemProp="url"><span className="Breadcrumbs-title" itemProp="title">My July Highlights</span></a>
      </li>
    </ul>
  </nav>
);

export default Breadcrumbs;
