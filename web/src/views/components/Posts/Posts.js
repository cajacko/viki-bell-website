/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostsItem/PostsItem';

const Posts = ({ posts }: {
  posts: Array<{
    id: Number,
    title: String,
    date: Date,
    image: String,
    category: String
  }>
}) => (
  <div>
    {
      posts.map(({ id, title, date, image, category }: {
        id: Number,
        title: String,
        date: Date,
        image: String,
        category: String,
      }) => (
        <PostsItem
          key={id}
          title={title}
          date={date}
          image={image}
          category={category}
        />
      ))
    }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
