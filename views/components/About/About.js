import React from 'react';
import Image from 'components/Image/Image';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import IconList from 'components/IconList/IconList';
import Paragraph from 'components/Paragraph/Paragraph';
import style from 'components/About/About.style';

const About = () => (
  <div style={style.container}>
    <div style={style.wrapper}>
      <div style={style.image}>
        <Image />
      </div>

      <div style={style.textContainer}>
        <Heading level={1} noTopMargin noLineHeight content="Hi Its Viki!" size="large" />
        <Paragraph><Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." /></Paragraph>
        <IconList size={20} theme="turqoise" />
      </div>
    </div>
  </div>
);

export default About;
