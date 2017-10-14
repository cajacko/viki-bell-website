import React from 'react';
import Template from 'components/Template/Template.component';

const CategoriesView = () => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'banner' },
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
