function getParameterByName(nameParam, urlParam) {
  let name = nameParam;
  let url = urlParam;
  if (!url) url = window.location.href;
  // eslint-disable-next-line
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const defaultValue = !!getParameterByName('maxPostLimit');

export default (state = defaultValue) => state;
