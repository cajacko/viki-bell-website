import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function (slug) {
  return (dispatch) => {
    dispatch({
      type: 'GET_POST_INIT',
      payload: { slug },
    });

    contentful
      .getEntries({
        content_type: 'post',
        'fields.postSlug': slug,
      })
      .then((response) => {
        let success = true;
        let payload;

        try {
          payload = transform(response);
          payload.slug = slug;
        } catch (err) {
          // eslint-disable-next-line
          console.warn(err);
          success = false;
        }

        if (success) {
          dispatch({
            type: 'GET_POST_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'GET_POST_ERROR',
            payload: { slug },
          });
        }
      })
      // eslint-disable-next-line
      .catch(err => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'GET_POST_ERROR',
          payload: { slug, err },
        });
      });
  };
}
