import React from 'react';
import PropTypes from 'prop-types';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';

const PostLoopItemContainer = ({ theme, inverseColours }) => {
  const date = 1496304495;

  return (
    <PostLoopItem
      theme={theme}
      inverseColours={inverseColours}
      title="Hello title"
      postSlug="hello-title"
      date={date}
      image={{
        originalHeight: 500,
        originalWidth: 500,
        src: 'https://unsplash.it/500/200',
        alt: 'Image',
      }}
      category="Life"
      categorySlug="life"
    />
  );
};

PostLoopItemContainer.propTypes = {
  theme: PropTypes.string,
  inverseColours: PropTypes.bool.isRequired,
};

PostLoopItemContainer.defaultProps = {
  theme: null,
};

export default PostLoopItemContainer;
