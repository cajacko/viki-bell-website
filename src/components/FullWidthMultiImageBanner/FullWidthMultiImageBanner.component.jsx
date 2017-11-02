import React from 'react';
import FullWidthMultiImageBannerRender from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.render';
import Item from 'components/Item/Item';

const FullWidthMultiImageBanner = ({ itemId }) => (
  <Item element={FullWidthMultiImageBannerRender} itemId={itemId} />
);

export default FullWidthMultiImageBanner;
