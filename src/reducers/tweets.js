export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_TWEETS_SUCCESS':
      return payload;

    default:
      return state;
  }
};
