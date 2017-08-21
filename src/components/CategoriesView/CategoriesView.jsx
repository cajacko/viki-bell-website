import React from 'react';
import Template from 'components/Template/Template.component.jsx';

const CategoriesView = () => (
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
              { component: 'categoryLoop' },
            ],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default CategoriesView;
