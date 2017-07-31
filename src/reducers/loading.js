export default (state = true, { type }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS':
    case 'CONTENTFUL_ERROR': {
      return false;
    }

    case 'CONTENTFUL_INIT':
      return true;

    default:
      return state;
  }
};
