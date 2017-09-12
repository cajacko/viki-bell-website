import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function () {
  return (dispatch, getState) => {
    dispatch({ type: 'GET_GLOBAL_INIT' });

    contentful(getState().preview)
      .getEntries({
        'sys.contentType.sys.id[in]': 'fullWidthBanner,category',
        include: 10,
      })
      .then((response) => {
        let success = true;
        let payload;

        try {
          payload = transform(response);
        } catch (err) {
          // eslint-disable-next-line
          console.warn(err);
          success = false;
        }

        if (success) {
          dispatch({
            type: 'GET_GLOBAL_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'GET_GLOBAL_ERROR',
          });
        }
      })
      // eslint-disable-next-line
      .catch(err => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'GET_GLOBAL_ERROR',
          payload: err,
        });
      });
  };
}
