import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PostsItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';
import style from 'components/PostLoop/PostLoop.style';

const PostLoop = ({ posts }) => (
  <div style={style.container}>
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
          />
        ))
      }
    </div>

    <Button>Show More Posts</Button>
  </div>
);

PostLoop.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Radium(PostLoop);
