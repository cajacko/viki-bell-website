import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  file,
  title,
  className,
  width,
  height,
  fill,
}) => {
  let imageHeight = file.details.image.height;
  let imageWidth = file.details.image.width;

  let fillText = '';

  if (fill) {
    fillText = '&fit=fill';
  }

  const ratio = imageHeight / imageWidth;
  let changeSize = true;

  if (height && width) {
    imageHeight = height;
    imageWidth = width;
  } else if (height && !width) {
    imageHeight = height;
    imageWidth = Math.floor(imageHeight / ratio);
    fillText = '&fit=fill';
  } else if (!height && width) {
    imageWidth = width;
    imageHeight = Math.floor(ratio * imageWidth);
    fillText = 'fit=fill';
  } else {
    changeSize = false;
  }

  const jpg = 'fm=jpg&fl=progressive';
  let url;

  if (changeSize) {
    url = `${file.url}?w=${imageWidth}&h=${imageHeight}&${fillText}&${jpg}`;
  } else {
    url = `${file.url}?${jpg}`;
  }

  return (
    <img
      width={imageWidth}
      height={imageHeight}
      src={url}
      className={className}
      alt={title}
    />
  );
};

Image.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }).isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.bool,
  title: PropTypes.string,
  stretchWidth: PropTypes.number,
};

Image.defaultProps = {
  className: null,
  width: null,
  height: null,
  fill: true,
  title: 'Content editor has not supplied alt text',
  stretchWidth: null,
};

export default Image;
