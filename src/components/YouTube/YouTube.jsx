import React from 'react';
import PropTypes from 'prop-types';
import getYouTubeID from 'get-youtube-id';

const YouTube = ({
  width,
  height,
  url,
}) => {
  const id = getYouTubeID(url);
  const src = `https://youtube.com/embed/${id}?feature=oembed`;

  return (
    <iframe
      width={width}
      height={height}
      allowFullScreen
      frameBorder="0"
      src={src}
    />
  );
};

YouTube.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string.isRequired,
};

YouTube.defaultProps = {
  width: 500,
  height: 375,
};

export default YouTube;
