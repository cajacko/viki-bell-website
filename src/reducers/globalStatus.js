export default (state = true, { type }) => {
  switch (type) {
    case 'GET_GLOBAL_SUCCESS':
      return 'success';

    case 'GET_GLOBAL_ERROR':
      return 'error';

    case 'GET_GLOBAL_INIT':
      return 'loading';

    default:
      return state;
  }
};
