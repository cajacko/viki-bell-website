import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostLoopItem/PostLoopItem';
import Button from 'components/Button/Button';

const Posts = ({ posts }) => (
  <div>
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

    <Button>Show More Posts</Button>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
