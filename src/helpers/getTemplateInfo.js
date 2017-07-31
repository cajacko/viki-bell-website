import matchRoute from 'helpers/matchRoute';
import getRouteDataItem from 'helpers/getRouteDataItem';

export default function (match, routes, fourOhFour, routeData) {
  const route = matchRoute(routes, match.url, fourOhFour);
  let templateId;
  let templateDataItem;
  let noTemplateDataItem = false;

  if (route) {
    templateId = route.template;

    if (route.match && route.entryField && route.contentType) {
      templateDataItem = getRouteDataItem(
        routeData,
        route.contentType,
        route.entryField,
        route.match,
      );

      if (templateDataItem === null) {
        noTemplateDataItem = {
          contentType: route.contentType,
          field: route.entryField,
          value: route.match,
        };
      }
    } else {
      templateDataItem = null;
    }
  } else {
    templateId = null;
    templateDataItem = null;
  }

  return { templateId, templateDataItem, noTemplateDataItem };
}
