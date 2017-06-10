import React from 'react';
import Image from 'components/Image/Image';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import style from 'components/SiteHeader/SiteHeader.style';

const SiteHeader = () => (
  <div style={style.container}>
    <div style={style.backgroundImageContainer}>
      <div style={{ ...style.backgroundImage, ...style.backgroundImageLeft }}>
        <Image
          originalWidth={930}
          originalHeight={700}
          src="https://vignette2.wikia.nocookie.net/howtotrainyourdragon/images/e/e8/Dragons_bod_nightmare_background_sketch-1-.png/revision/latest?cb=20121006135612"
        />
      </div>
    </div>

    <div style={style.wrapper}>
      <div>
        <div style={style.logo}>
          <Image
            originalWidth={930}
            originalHeight={700}
            src="https://vignette2.wikia.nocookie.net/howtotrainyourdragon/images/e/e8/Dragons_bod_nightmare_background_sketch-1-.png/revision/latest?cb=20121006135612"
          />
        </div>
        <Heading level={1} content="" />
      </div>

      <Text content="London Lifestyle Blogger" />
    </div>

    <div style={style.backgroundImageContainer}>
      <div style={{ ...style.backgroundImage, ...style.backgroundImageRight }}>
        <Image
          originalWidth={930}
          originalHeight={700}
          src="https://vignette2.wikia.nocookie.net/howtotrainyourdragon/images/e/e8/Dragons_bod_nightmare_background_sketch-1-.png/revision/latest?cb=20121006135612"
        />
      </div>
    </div>
  </div>
);

export default SiteHeader;
