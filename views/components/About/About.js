import React from 'react';
import Image from 'components/Image/Image';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import IconList from 'components/IconList/IconList';

const About = () => (
  <div>
    <Image />
    <div>
      <Heading level={1} content="Hi Its Viki" />
      <p><Text content="Lorem Ipsum" /></p>
      <IconList size={20} />
    </div>
  </div>
);

export default About;
