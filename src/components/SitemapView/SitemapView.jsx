import React from 'react';
import Template from 'components/Template/Template.component';

const SitemapView = () => (
  <Template
    components={[
      { component: 'banner' },
      { component: 'siteNav' },
      {
        component: 'contentWrap',
        components: [
          {
            component: 'mainWrap',
            components: [
              { component: 'taxonomyTitle' },
              { component: 'breadcrumbs' },
              { component: 'sitemap' },
            ],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default SitemapView;
