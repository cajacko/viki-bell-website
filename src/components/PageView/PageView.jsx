import React from 'react';
import Template from 'components/Template/Template.component.jsx';

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
            components: [{ component: 'singlePost' }],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default PostsView;
