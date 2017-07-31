const defaultState = {
  routes: [],
  routeData: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'CONTENTFUL_SUCCESS': {
      const newState = Object.assign({}, state);
      const stateRoutes = [];

      Object.keys(payload.items).forEach((id) => {
        const { contentType, uuid, routes } = payload.items[id];

        if (contentType === 'routes' && uuid === 'Routes - Live') {
          routes.forEach((routeId) => {
            const route = payload.items[routeId];

            const data = {
              route: route.regex,
              template: route.template,
            };

            if (route.varContentType) {
              data.contentType = route.varContentType;
            }

            if (route.varEntryField) {
              data.entryField = route.varEntryField;
            }

            stateRoutes.push(data);
          });
        }
      });

      if (stateRoutes.length !== 0) {
        newState.routes = stateRoutes;
      }

      const typeFields = {};

      newState.routes.forEach(({ contentType, entryField }) => {
        if (!typeFields[contentType]) {
          typeFields[contentType] = [];
        }

        typeFields[contentType].push(entryField);
      });

      Object.keys(payload.items).forEach((id) => {
        const item = payload.items[id];
        const contentType = item.contentType;

        if (typeFields[contentType]) {
          typeFields[contentType].forEach((field) => {
            if (!newState.routeData[contentType]) {
              newState.routeData[contentType] = {};
            }

            if (!newState.routeData[contentType][field]) {
              newState.routeData[contentType][field] = {};
            }

            const entryField = item[field];

            newState.routeData[contentType][field][entryField] = id;
          });
        }
      });

      return newState;
    }

    default:
      return state;
  }
};
