import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';

const ContentImage = ({ image }) => (
  <Item element={Image} itemId={image} />
);

ContentImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ContentImage;
