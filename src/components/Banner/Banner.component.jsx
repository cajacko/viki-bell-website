import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image/Image';
import Item from 'components/Item/Item';

const Banner = ({ image }) => (
  <Link className="Banner" to="/">
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
