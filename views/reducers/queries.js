/* @flow */

let itemId = 0;

const defaultState = {
  '/': {
    items: [],
    hasMore: true,
    loading: false,
  },
};

for (let i = 0; i < 8; i += 1) {
  itemId += 1;
  defaultState['/'].items.push(itemId);
}

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case 'GET_POSTS_INIT': {
      const newState = Object.assign({}, state);
      newState[payload.query].loading = true;
      return newState;
    }
    case 'GET_POSTS_SUCCESS': {
      const newState = Object.assign({}, state);
      newState[payload.query].loading = false;

      for (let i = 0; i < 8; i += 1) {
        itemId += 1;
        newState[payload.query].items.push(itemId);
      }
      return newState;
    }
    default:
      return state;
  }
}
