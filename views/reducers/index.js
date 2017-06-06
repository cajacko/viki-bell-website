/* @flow */

import { combineReducers } from 'redux';
import queries from 'reducers/queries';

export default combineReducers({
  queries,
});

const test = {
  items: {
    1: {
      type: 'post',
      properties: {
        title: 'My New Post',
        mainCategory: [67],
        featuredImage: [27],
        slug: 'my-new-post',
        date: 39864039745,
      },
    },
    27: {
      type: 'category',
      properties: {
        title: 'Life',
        slug: 'life',
      },
    },
    100: {
      type: 'template',
      properties: {
        name: 'category',
        elements: [200, 201, 202, 203, 204],
      },
    },
  },
  queries: {
    'posts/categories/life': {
      items: [7, 4, 1],
      hasMore: true,
      loading: false, // Loading here as multiple things may need to subscribe to this
    },
    posts: {
      items: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      hasMore: false,
      loading: true,
    },
  },
  redirects: {
    '/posts/my-new-post-2': '/posts/my-new-post',
  },
  urls: {
    '/posts/my-new-post': {
      template: 100,
      item: 1,
    },
    '/': {
      template: 101,
      item: null, // Just render template
    },
  },
};
