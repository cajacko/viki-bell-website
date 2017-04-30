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
class Post {
  title: string;
  id: string;
  postId: string;
  excerpt: string;
  date: Date;
  image: string;
  category: string;
}

const posts = ['Wuzzup', 'Yeah yeah yeah', 'How\'s-it', 'Woo yeah'].map((title, i) => {
  const post = new Post();
  post.title = title;
  post.id = `${i}`;
  post.postId = `${i}`;
  post.excerpt = 'I am an excerpt';
  post.date = moment().unix();
  post.image = 'https://unsplash.it/400/300';
  post.category = 'Life';
  return post;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getPost: (id: number) => posts.find(w => w.id === id),
  getPosts: () => posts,
  Post,
};
