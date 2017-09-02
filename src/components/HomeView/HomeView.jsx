import React from 'react';
import Template from 'components/Template/Template.component';

const HomeView = () => (
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
            components: [{ component: 'postLoop', taxonomy: null, value: null }],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default HomeView;
