import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = ({ match }) => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
      { component: 'single', slug: match.params.slug, type: 'POST' },
    ]}
  />
);

export default PostsView;
