export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      return Object.assign({}, state, payload.items);
    }

    default:
      return state;
  }
};
