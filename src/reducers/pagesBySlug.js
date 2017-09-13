export const defaultPost = {
  fourOhFour: false,
  id: null,
  loading: false,
  error: false,
  init: true,
};

export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_PAGE_INIT': {
      const newState = Object.assign({}, state);
      const post = newState[payload.slug] || defaultPost;
      post.loading = true;
      post.init = false;
      newState[payload.slug] = post;
      return newState;
    }

    case 'GET_PAGE_SUCCESS': {
      const newState = Object.assign({}, state);

      Object.keys(payload.items).forEach((id) => {
        const { contentType, postSlug } = payload.items[id];

        if (contentType === 'page') {
          const post = defaultPost;
          post.id = id;
          post.init = false;
          post.loading = false;
          newState[postSlug] = post;
        }
      });

      return newState;
    }

    case 'GET_PAGE_ERROR': {
      const newState = Object.assign({}, state);
      const post = newState[payload.slug] || defaultPost;
      post.loading = false;
      post.init = false;
      post.error = payload.err || true;
      newState[payload.slug] = post;
      return newState;
    }

    default:
      return state;
  }
};
