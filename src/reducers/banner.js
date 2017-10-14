export default (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_GLOBAL_SUCCESS': {
      let newState = state;

      Object.keys(payload.items).forEach((id) => {
        const item = payload.items[id];

        if (item.contentType === 'fullWidthBanner' && item.status === 'Full Width Banner - Live') {
          newState = id;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
