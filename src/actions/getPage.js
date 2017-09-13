import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';

export default function (slug) {
  return (dispatch, getState) => {
    dispatch({
      type: 'GET_PAGE_INIT',
      payload: { slug },
    });

    contentful(getState().preview)
      .getEntries({
        content_type: 'page',
        'fields.postSlug': slug,
        include: 10,
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
            type: 'GET_PAGE_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'GET_PAGE_ERROR',
            payload: { slug },
          });
        }
      })
      // eslint-disable-next-line
      .catch(err => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'GET_PAGE_ERROR',
          payload: { slug, err },
        });
      });
  };
}
