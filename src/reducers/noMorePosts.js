export default (state = false, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS':
      return payload.endOfLoop;

    default:
      return state;
  }
};
