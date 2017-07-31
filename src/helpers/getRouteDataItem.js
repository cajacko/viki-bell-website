export default function (routeData, contentType, entryField, match) {
  if (!routeData) {
    return null;
  }

  if (Object.keys(routeData).length === 0) {
    return null;
  }

  if (!contentType) {
    return null;
  }

  if (!entryField) {
    return null;
  }

  if (!match) {
    return null;
  }

  if (!routeData[contentType]) {
    return null;
  }

  if (!routeData[contentType][entryField]) {
    return null;
  }

  if (!routeData[contentType][entryField][match]) {
    return null;
  }

  return routeData[contentType][entryField][match];
}
