import React from 'react';
import Image from 'components/Image/Image';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';

const SiteHeader = () => (
  <div>
    <Image />
    <div>
      <div>
        <Image />
        <Heading level={1} content="" />
      </div>
      <Text content="London Lifestyle Blogger" />
    </div>
    <Image />
  </div>
);

export default SiteHeader;
