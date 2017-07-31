export default (state = null, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      let fourOhFour = state;

      Object.keys(payload.items).forEach((id) => {
        const { contentType, uuid } = payload.items[id];

        if (contentType === 'pageTemplate' && uuid === '404') {
          fourOhFour = id;
        }
      });

      return fourOhFour;
    }

    default:
      return state;
  }
};
