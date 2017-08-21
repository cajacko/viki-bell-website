export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_GLOBAL_SUCCESS': {
      return Object.assign({}, state, payload.items);
    }

    default:
      return state;
  }
};
