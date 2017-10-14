import React from 'react';
import Template from 'components/Template/Template.component';

const CategoriesView = () => (
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
