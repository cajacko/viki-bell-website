export const defaultPostLoop = {
  noMorePosts: false,
  posts: [],
  loading: true,
  error: null,
  init: true,
};

const defaultState = { home: defaultPostLoop };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS_INIT': {
      const newState = Object.assign({}, state);
      const postLoop = newState[payload.query]
        ? Object.assign({}, newState[payload.query])
        : Object.assign({}, defaultPostLoop);
      postLoop.loading = true;
      postLoop.error = false;
      postLoop.init = false;
      newState[payload.query] = postLoop;
      return newState;
    }

    case 'GET_POSTS_SUCCESS': {
      const newState = Object.assign({}, state);
      const postLoop = Object.assign({}, newState[payload.query]);
      postLoop.loading = false;
      postLoop.error = false;
      postLoop.init = false;
      postLoop.noMorePosts = payload.endOfLoop;
      postLoop.posts = postLoop.posts.concat(payload.loop);
      newState[payload.query] = postLoop;
      return newState;
    }

    case 'GET_POSTS_ERROR': {
      const newState = Object.assign({}, state);
      const postLoop = Object.assign({}, newState[payload.query]);
      postLoop.loading = false;
      postLoop.init = false;
      postLoop.error =
        payload.err || 'Could not get posts, due to an unknown error';
      newState[payload.query] = postLoop;
      return newState;
    }

    default:
      return state;
  }
};
