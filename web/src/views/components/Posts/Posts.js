/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostsItem/PostsItem';

const Posts = ({ posts }) => (
  <div>
    {
      posts.map(({ id, title, date, image, category, imageAlt, slug }) => (
        <PostsItem
          key={id}
          title={title}
          date={date}
          image={image}
          category={category}
          imageAlt={imageAlt}
          slug={slug}
        />
      ))
    }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
