import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = ({ match }) => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
      { component: 'title', value: match.params.slug, type: 'POST' },
      {
        component: 'contentWrap',
        components: [
          {
            component: 'mainWrap',
            components: [{ component: 'singlePost', slug: match.params.slug }],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default PostsView;
