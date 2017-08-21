import React from 'react';
import Template from 'components/Template/Template.component.jsx';

const FourOhFourView = () => (
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
