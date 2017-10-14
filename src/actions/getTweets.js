export default function () {
  return (dispatch) => {
    const config = {};
    const url = 'https://script.google.com/macros/s/AKfycbwVCClrVgv1onW6gfOIA992__aTuZ_LmrzNWjnEN3oqTemsuVk/exec';

    dispatch({ type: 'GET_TWEETS_INIT' });

    fetch(url, config)
      .then((response) => {
        response.json()
          .then(payload => dispatch({ type: 'GET_TWEETS_SUCCESS', payload }))
          .catch(payload => dispatch({ type: 'GET_TWEETS_ERROR', payload }));
      });
  };
}
