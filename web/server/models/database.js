/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class Post {}

const posts = ['What\'s-it', 'Who\'s-it', 'How\'s-it'].map((title, i) => {
  const post = new Post();
  post.title = title;
  post.id = `${i}`;
  post.postId = `${i}`;
  post.excerpt = 'I am an excerpt';
  return post;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getPost: id => posts.find(w => w.id === id),
  getPosts: () => posts,
  Post,
};
