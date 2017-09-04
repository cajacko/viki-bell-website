export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS_SUCCESS':
    case 'GET_POST_SUCCESS':
    case 'GET_GLOBAL_SUCCESS': {
      const categories = Object.assign({}, state);

      Object.keys(payload.items).forEach((id) => {
        const item = payload.items[id];

        if (item.contentType === 'category') {
          categories[item.slug] = id;
        }
      });

      return categories;
    }

    default:
      return state;
  }
};
