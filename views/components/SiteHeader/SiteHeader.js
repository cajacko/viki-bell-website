import React from 'react';
import Image from 'components/Image/Image';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import style from 'components/SiteHeader/SiteHeader.style';

const SiteHeader = () => (
  <div style={style.container}>
    <div style={style.backgroundImageContainer}>
      <div style={{ ...style.backgroundImage, ...style.backgroundImageLeft }}>
        <Image />
      </div>
    </div>

    <div style={style.wrapper}>
      <div>
        <div style={style.logo}>
          <Image />
        </div>
        <Heading level={1} content="" />
      </div>

      <Text content="London Lifestyle Blogger" />
    </div>

    <div style={style.backgroundImageContainer}>
      <div style={{ ...style.backgroundImage, ...style.backgroundImageRight }}>
        <Image />
      </div>
    </div>
  </div>
);

export default SiteHeader;
