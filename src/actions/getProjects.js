import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function (limit, skip = 0) {
  return (dispatch) => {
    dispatch({ type: 'CONTENTFUL_INIT' });

    contentful.getEntries({
      content_type: 'project',
      include: 10,
      limit,
      skip,
      order: '-fields.displayDate',
    })
      .then((response) => {
        let success = true;
        let payload;

        try {
          payload = transform(response, limit);
        } catch (err) {
          // eslint-disable-next-line
          console.warn(err);
          success = false;
        }

        if (success) {
          dispatch({
            type: 'CONTENTFUL_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'CONTENTFUL_ERROR',
          });
        }
      })
      // eslint-disable-next-line
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'CONTENTFUL_ERROR',
          payload: err,
        });
      });
  };
}
