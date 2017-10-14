import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image/Image';

const FullWidthMultiImageBanner = ({
  title,
  tagline,
  leftImage,
  rightImage,
  logo,
}) => (
  <section>
    <Image file={leftImage} />
    <div>
      <Link to="/">
        <Image file={logo} />
        <h1>{title}</h1>
      </Link>
      <h2>{tagline}</h2>
    </div>

    <Image file={rightImage} />
  </section>
);

export default FullWidthMultiImageBanner;
