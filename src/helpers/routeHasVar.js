export default function (route) {
  return route.includes('{{') && route.includes('}}');
}
