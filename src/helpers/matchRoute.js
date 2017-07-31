import routeHasVar from 'helpers/routeHasVar';
import replaceRouteVar from 'helpers/replaceRouteVar';

export default function (routes, url, fourOhFour) {
  let matchedRoute;

  if (routes) {
    routes.forEach(({ route, template, entryField, contentType }) => {
      if (matchedRoute) {
        return;
      }

      if (routeHasVar(route)) {
        const regex = replaceRouteVar(route, '(.+)');
        const re = new RegExp(regex, 'i');
        const matches = url.match(re);

        if (matches && matches[1]) {
          matchedRoute = {
            template,
            entryField,
            contentType,
            match: matches[1],
          };
        }
      } else if (route === url) {
        matchedRoute = { template };
      } else if (route === '*') {
        matchedRoute = { template };
      }
    });
  }

  if (matchedRoute) {
    return matchedRoute;
  }

  if (fourOhFour) {
    return { template: fourOhFour };
  }

  return null;
}
