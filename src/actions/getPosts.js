import contentful from 'constants/contentfulClient';
import transform from 'helpers/transformApiResponse';
import queryFromTaxValue from 'helpers/queryFromTaxValue';

export default function (taxonomy, value, valueId, skip = 0, limit = 20) {
  return (dispatch) => {
    const query = queryFromTaxValue(taxonomy, value);

    dispatch({
      type: 'GET_POSTS_INIT',
      payload: { query },
    });

    const params = {
      content_type: 'post',
      include: 10,
      limit,
      skip,
      order: '-fields.postDate',
    };

    if (taxonomy && value) {
      if (taxonomy === 'category') {
        params['fields.categories.sys.id'] = valueId;
      }
    }

    contentful
      .getEntries(params)
      .then((response) => {
        let success = true;
        let payload;

        try {
          payload = transform(response, limit);
          payload.query = query;
        } catch (err) {
          // eslint-disable-next-line
          console.warn(err);
          success = false;
        }

        if (success) {
          dispatch({
            type: 'GET_POSTS_SUCCESS',
            payload,
          });
        } else {
          dispatch({
            type: 'GET_POSTS_ERROR',
            payload: { query },
          });
        }
      })
      // eslint-disable-next-line
      .catch(err => {
        // eslint-disable-next-line
        console.warn(err);

        dispatch({
          type: 'GET_POSTS_ERROR',
          payload: { query, err },
        });
      });
  };
}
