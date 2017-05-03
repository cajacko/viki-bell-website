/* @flow */

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import moment from 'moment';

// Model types
class Post {}

const posts = ['Wuzzup', 'Yeah yeah yeah', 'How\'s-it', 'Woo yeah'].map((title, i) => {
  const post = new Post();
  post.title = title;
  post.id = `${i}`;
  post.postId = `${i}`;
  post.excerpt = 'I am an excerpt';
  post.date = moment('2017-09-09 12:12:12').unix();
  post.image = 'https://unsplash.it/400/300';
  post.category = 'Life';
  post.imageAlt = 'Image alt tag';
  post.postSlug = title;
  post.categorySlug = 'life';
  return post;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getPost: id => posts.find(w => w.id === id),
  getPosts: () => posts,
  Post,
};
