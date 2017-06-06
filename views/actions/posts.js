// eslint-disable-next-line
export function getMorePosts(query, numberToGet, offset) {
  return (dispatch) => {
    dispatch({
      type: 'GET_POSTS_INIT',
      payload: {
        query,
        numberToGet,
        offset,
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'GET_POSTS_SUCCESS',
        payload: {
          query,
          numberToGet,
          offset,
        },
      });
    }, 3000);
  };
}
