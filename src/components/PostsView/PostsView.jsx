import React from 'react';
import Template from 'components/Template/Template.component';

const PostsView = () => (
  <Template
    components={[
      { component: 'siteNav' },
      { component: 'bannerType' },
      { component: 'newPostLoop', taxonomy: null, value: null },
      { component: 'footer' },
    ]}
  />
);

export default PostsView;
