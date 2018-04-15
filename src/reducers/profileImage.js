export default (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_GLOBAL_SUCCESS': {
      let newState = state;

      Object.keys(payload.items).forEach((id) => {
        const item = payload.items[id];

        if (
          item.contentType === 'siteSettings' &&
          item.type === 'Site Settings - Live' &&
          item.profileImage
        ) {
          newState = item.profileImage;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
