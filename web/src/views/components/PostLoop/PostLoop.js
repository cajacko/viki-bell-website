import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostsItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';

const PostLoop = ({ posts, inverseColours, recommendedPosts }) => {
  let containerStyles;
  let containerPadding;
  let recommendedText = false;

  if (recommendedPosts) {
    containerPadding = { ...style.container, ...style.containerRecommended };

    recommendedText = (
      <p style={style.recommendedText}>More posts you may like</p>
    );
  } else {
    containerPadding = style.container;
  }

  if (inverseColours) {
    containerStyles = { ...containerPadding, ...style.containerInverse };
  } else {
    containerStyles = { ...containerPadding, ...style.containerDefault };
  }

  return (
    <div style={containerStyles}>
      {recommendedText}
      <div style={style.posts}>
        {
          posts.map(({
            id,
            title,
            date,
            image,
            category,
            imageAlt,
            postSlug,
            categorySlug,
          }) => (
            <PostsItem
              key={id}
              title={title}
              date={date}
              image={image}
              category={category}
              imageAlt={imageAlt}
              postSlug={postSlug}
              categorySlug={categorySlug}
              inverseColours={inverseColours}
            />
          ))
        }
      </div>

      <Button>Show More Posts</Button>
    </div>
  );
};

PostLoop.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  inverseColours: PropTypes.bool.isRequired,
  recommendedPosts: PropTypes.bool.isRequired,
};

export default Radium(PostLoop);
