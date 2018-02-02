import React from 'react';
import Link from 'components/Link/Link';
import Image from 'components/Image/Image';

const FeaturedImageLink = props => {
  const { url, file } = props;

  if (!file || !file.details || !file.details.image) {
    return null;
  }

  const sizes = file.details.image;

  return (
    <Link
      noStyle
      className="Post-headerLink"
      to={url}
      itemProp="image"
      itemScope=""
      itemType="https://schema.org/ImageObject"
    >
      <Image className="Post-featuredImage" {...props} />
      <meta
        className="Post-featuredImageUrl"
        itemProp="url"
        content={file.url}
      />
      <meta
        className="Post-featuredImageWidth"
        itemProp="width"
        content={sizes.width}
      />
      <meta
        className="Post-featuredImageHeight"
        itemProp="height"
        content={sizes.height}
      />
    </Link>
  );
};

export default FeaturedImageLink;
