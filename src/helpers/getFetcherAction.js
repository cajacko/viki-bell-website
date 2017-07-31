export default function getFetcherAction(action, type) {
  return `${action}_${type}`;
}
