export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const typeFields = {};

      Object.keys(payload.items).forEach((id) => {
        const {
          contentType,
          varContentType,
          varEntryField,
        } = payload.items[id];

        if (contentType === 'route') {
          if (varContentType && varEntryField) {
            if (!typeFields[varContentType]) {
              typeFields[varContentType] = [];
            }

            typeFields[varContentType].push(varEntryField);
          }
        }
      });

      const routeData = Object.assign({}, state);

      Object.keys(payload.items).forEach((id) => {
        const item = payload.items[id];
        const contentType = item.contentType;

        if (typeFields[contentType]) {
          typeFields[contentType].forEach((field) => {
            if (!routeData[contentType]) {
              routeData[contentType] = {};
            }

            if (!routeData[contentType][field]) {
              routeData[contentType][field] = {};
            }

            const entryField = item[field];

            routeData[contentType][field][entryField] = id;
          });
        }
      });

      return routeData;
    }

    default:
      return state;
  }
};
