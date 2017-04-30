/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from 'components/PostsItem/PostsItem';

const Posts = ({ posts }: {
  posts: Array<{
    id: Number,
    title: String,
    date: {},
    image: String,
    category: String,
    imageAlt: String,
    slug: String,
  }>
}) => (
  <div>
    {
      posts.map(({ id, title, date, image, category, imageAlt, slug }: {
        id: Number,
        title: String,
        date: {},
        image: String,
        category: String,
        imageAlt: String,
        slug: String,
      }) => (
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
