import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';

const SiteHeader = ({ image, siteTitle, description }) => (
  <header className="SiteHeader">
    <Link className="SiteHeader-imageLink" to="/">
      <Item
        itemId={image}
        element={Image}
        className="SiteHeader-image"
        width={70}
        height={70}
      />
    </Link>
    <div className="SiteHeader-text">
      <Link className="SiteHeader-titleLink" to="/">
        <h1 className="SiteHeader-title">{siteTitle}</h1>
      </Link>
      <p className="SiteHeader-description">{description}</p>
    </div>
  </header>
);

SiteHeader.propTypes = {
  image: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SiteHeader;
