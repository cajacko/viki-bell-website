export default (state = true, { type }) => {
  switch (type) {
    case 'GET_GLOBAL_SUCCESS':
    case 'GET_GLOBAL_ERROR': {
      return false;
    }

    case 'GET_GLOBAL_INIT':
      return true;

    default:
      return state;
  }
};
