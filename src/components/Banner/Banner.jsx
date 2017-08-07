import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image/Image';

const Banner = () => (
  <Link className="Banner" to="/">
    <Image
      file={{
        url: 'https://admin.vikibell.com/wp-content/uploads/2016/05/banner.jpg',
        details: {
          image: {
            height: 400,
            width: 2500,
          },
        },
      }}
      className="Banner-image u-fitToParent u-fittedToParent"
      width={2500}
      height={400}
    />
  </Link>
);

export default Banner;
