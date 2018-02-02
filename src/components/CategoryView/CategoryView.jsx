import React from 'react';
import Template from 'components/Template/Template.component';

const CategoryView = ({ match }) => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
      { component: 'title', value: match.params.slug, type: 'CATEGORY' },
      {
        component: 'newPostLoop',
        taxonomy: 'category',
        value: match.params.slug,
      },
      { component: 'footer' },
    ]}
  />
);

export default CategoryView;
