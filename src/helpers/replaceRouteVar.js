export default function (route, repalce) {
  return route.replace(/{{.*}}/, repalce);
}
