import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = ({ match }) => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
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
