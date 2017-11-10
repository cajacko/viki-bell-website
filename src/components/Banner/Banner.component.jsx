import React from 'react';
import Link from 'components/Link/Link';
import Image from 'components/Image/Image';
import Item from 'components/Item/Item';

const Banner = ({ image }) => (
  <Link className="Banner" to="/" noStyle>
    <Item
      element={Image}
      itemId={image}
      fill
      fillContainer
      className="Banner-image u-fitToParent u-fittedToParent"
    />
  </Link>
);

export default props => <Item element={Banner} {...props} />;
