/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

const PostsItem = ({ title, excerpt }: { title: String, excerpt: String }) => (
  <article>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <a href="">View Post</a>
  </article>
);

PostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default PostsItem;
