import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function (contentType, field, value) {
  return (dispatch) => {
    dispatch({ type: 'CONTENTFUL_INIT' });

    contentful.getEntries({
      content_type: contentType,
      [`fields.${field}`]: value,
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
