import React, { PureComponent } from 'react';
import Template from 'components/Template/Template.component';

class HomeView extends PureComponent {
  render() {
    return (
      <Template
        components={[
          { component: 'siteNav' },
          { component: 'bannerType' },
          { component: 'newPostLoop', taxonomy: null, value: null },
          { component: 'footer' },
        ]}
      />
    );
  }
}

export default HomeView;
