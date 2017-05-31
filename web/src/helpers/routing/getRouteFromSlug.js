export default function (slug, type) {
  let path = '';

  switch (type) {
    case 'post':
      path += '/posts/';
      break;
    case 'category':
      path += '/categories/';
      break;
    default:
      throw new Error('No type given to helpers/getRoutFromSlug.js');
  }

  path += slug;

  return path;
}
