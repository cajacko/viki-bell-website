export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS_SUCCESS':
    case 'GET_POST_SUCCESS':
    case 'GET_PAGE_SUCCESS':
    case 'GET_GLOBAL_SUCCESS': {
      return Object.assign({}, state, payload.items);
    }

    default:
      return state;
  }
};
