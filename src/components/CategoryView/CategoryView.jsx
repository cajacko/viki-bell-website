import React from 'react';
import Template from 'components/Template/Template.component';

const CategoryView = ({ match }) => (
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
              {
                component: 'postLoop',
                taxonomy: 'category',
                value: match.params.slug,
              },
            ],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default CategoryView;
