import React from 'react';
import Template from 'components/Template/Template.component.jsx';

const CategoryView = () => (
  <Template
    components={[
      { component: 'banner' },
      { component: 'siteNav' },
      { component: 'bunting' },
      {
        component: 'contentWrap',
        components: [
          {
            component: 'mainWrap',
            components: [
              { component: 'taxonomyTitle' },
              { component: 'breadcrumbs' },
              { component: 'postLoop' },
            ],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default CategoryView;
