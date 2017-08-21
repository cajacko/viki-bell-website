import React from 'react';
import Template from 'components/Template/Template';

const PostsView = () => (
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
              { component: 'fourOhFour' },
            ],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default PostsView;
