import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = ({ match }) => (
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
            components: [{ component: 'page', slug: match.params.slug }],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default PostsView;
