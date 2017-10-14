export default function (itemProps) {
  if (!itemProps) {
    return null;
  }

  if (!itemProps.sys) {
    return null;
  }

  if (!itemProps.sys.contentType) {
    return null;
  }

  if (!itemProps.sys.contentType.sys) {
    return null;
  }

  if (!itemProps.sys.contentType.sys.id) {
    return null;
  }

  return itemProps.sys.contentType.sys.id;
}
