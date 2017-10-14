export default function (taxonomy, value) {
  if (!taxonomy || !value) {
    return 'home';
  }

  return `${taxonomy}:${value}`;
}
