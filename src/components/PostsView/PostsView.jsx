import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = () => (
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

export default PostsView;
