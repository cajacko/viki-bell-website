/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostsItem/PostsItem';

const Posts = ({ posts }: {
  posts: Array<{ id: Number, title: String, excerpt: String }>
}) => (
  <div>
    {
      posts.map(({ id, title, excerpt }: {
        id: Number,
        title: String,
        excerpt: String
      }) => (
        <PostsItem
          key={id}
          title={title}
          excerpt={excerpt}
        />
      ))
    }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
