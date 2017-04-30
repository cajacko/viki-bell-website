/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

const PostsItem = ({ title, date, image, category }: {
  title: String,
  date: Date,
  image: String,
  category: String,
}) => (
  <article>
    <img alt="" src={image} />
    <p>{date}</p>
    <h2>{title}</h2>
    <p>{category}</p>
  </article>
);

PostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostsItem;
