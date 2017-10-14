import React from 'react';
import Template from 'components/Template/Template.component';

const FourOhFourView = () => (
  <Template
    components={[
      { component: 'banner' },
      { component: 'siteNav' },
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

export default FourOhFourView;
