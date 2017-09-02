const defaultPostLoop = {
  noMorePosts: false,
  posts: [],
  loading: true,
  error: false,
};

const defaultState = { home: defaultPostLoop };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS_INIT': {
      const newState = Object.assign({}, state);
      const postLoop = newState[payload.query] || defaultPostLoop;
      postLoop.loading = true;
      postLoop.error = false;
      newState[payload.query] = postLoop;
      return newState;
    }

    case 'GET_POSTS_SUCCESS': {
      const newState = Object.assign({}, state);
      const postLoop = newState[payload.query];
      postLoop.loading = false;
      postLoop.error = false;
      postLoop.posts = [1, 2, 3, 4, 5];
      newState[payload.query] = postLoop;
      return newState;
    }

    case 'GET_POSTS_ERROR': {
      const newState = Object.assign({}, state);
      const postLoop = newState[payload.query];
      postLoop.loading = false;
      postLoop.error = payload.err || true;
      newState[payload.query] = postLoop;
      return newState;
    }

    default:
      return state;
  }
};
