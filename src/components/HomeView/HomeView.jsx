import React from 'react';
import Template from 'components/Template/Template';

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
            components: [{ component: 'postLoop' }],
          },
          { component: 'sideBar' },
        ],
      },
    ]}
  />
);

export default HomeView;
