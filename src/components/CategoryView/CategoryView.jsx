import React from 'react';
import Template from 'components/Template/Template.component';

const CategoryView = ({ match }) => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
      {
        component: 'contentWrap',
        components: [
          {
            component: 'mainWrap',
            components: [
              {
                component: 'posts',
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
