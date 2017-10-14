function doesPropExist(originalObject, property) {
  if (typeof originalObject !== 'object') {
    return false;
  }

  let propExists = true;

  const props = property.split('.');

  let currentProp = Object.assign({}, originalObject);

  props.forEach((prop) => {
    if (currentProp[prop] === undefined) {
      propExists = false;
    }

    currentProp = currentProp[prop];
  });

  return propExists;
}

function getPropertValue(originalObject, property) {
  if (typeof originalObject !== 'object') {
    // eslint-disable-next-line
    console.warn(originalObject, property);
    throw new Error('Unexpected response: 6');
  }

  const props = property.split('.');

  let currentProp = Object.assign({}, originalObject);

  props.forEach((prop) => {
    if (currentProp[prop] === undefined) {
      // eslint-disable-next-line
      console.warn(currentProp, prop);
      throw new Error('Unexpected response: 1');
    }

    currentProp = currentProp[prop];
  });

  return currentProp;
}

function addUniqueProperty(source, sourceProp, result, resultProp) {
  if (result[resultProp] !== undefined) {
    // eslint-disable-next-line
    console.warn(result[resultProp], result, resultProp);
    throw new Error('Unexpected response: 2, prop already exists');
  }

  const sourceValue = getPropertValue(source, sourceProp);
  const response = Object.assign({}, result);
  response[resultProp] = sourceValue;
  return response;
}

function mergeFields(item, currentObject, asset) {
  const itemObject = Object.assign({}, currentObject);
  const fields = getPropertValue(item, 'fields');

  Object.keys(fields).forEach((field) => {
    let value;

    if (doesPropExist(fields[field], 'en-GB')) {
      value = getPropertValue(fields[field], 'en-GB');
    } else {
      value = fields[field];
    }

    if (!asset) {
      if (Array.isArray(value)) {
        const newArray = [];

        value.forEach((arrayItem) => {
          newArray.push(getPropertValue(arrayItem, 'sys.id'));
        });

        value = newArray;
      } else if (typeof value === 'object') {
        value = getPropertValue(value, 'sys.id');
      }
    }

    if (itemObject[field] !== undefined) {
      // eslint-disable-next-line
      console.warn(itemObject, field, value);
      throw new Error('Unexpected response: 3, prop already exists');
    }

    itemObject[field] = value;
  });

  return itemObject;
}

function processEntries(entries, existingItems) {
  const items = Object.assign({}, existingItems);

  if (!Array.isArray(entries)) {
    // eslint-disable-next-line
    console.warn(entries);
    throw new Error('Unexpected response: 4');
  }

  entries.forEach((item) => {
    const id = getPropertValue(item, 'sys.id');
    let itemObject = { id };
    itemObject = addUniqueProperty(item, 'sys.createdAt', itemObject, 'createdAt');
    itemObject = addUniqueProperty(item, 'sys.updatedAt', itemObject, 'updatedAt');
    itemObject = addUniqueProperty(item, 'sys.contentType.sys.id', itemObject, 'contentType');
    itemObject = mergeFields(item, itemObject);
    items[id] = itemObject;
  });

  return items;
}

function processAssets(assets, existingItems) {
  const items = Object.assign({}, existingItems);

  if (!Array.isArray(assets)) {
    // eslint-disable-next-line
    console.warn(assets);
    throw new Error('Unexpected response: 5');
  }

  assets.forEach((item) => {
    const id = getPropertValue(item, 'sys.id');
    let itemObject = { id };
    itemObject = addUniqueProperty(item, 'sys.createdAt', itemObject, 'createdAt');
    itemObject = addUniqueProperty(item, 'sys.updatedAt', itemObject, 'updatedAt');

    if (doesPropExist('fields.file.en-GB.contentType')) {
      itemObject = addUniqueProperty(item, 'fields.file.en-GB.contentType', itemObject, 'contentType');
    } else {
      itemObject = addUniqueProperty(item, 'fields.file.contentType', itemObject, 'contentType');
    }

    itemObject = mergeFields(item, itemObject, true);
    items[id] = itemObject;
  });

  return items;
}

export default function (response, limit) {
  let items = {};
  const loop = [];
  let endOfLoop = false;

  if (response.items) {
    const responseItems = getPropertValue(response, 'items');
    items = processEntries(responseItems, items);

    if (response.includes) {
      if (response.includes.Asset) {
        const assets = getPropertValue(response, 'includes.Asset');
        items = processAssets(assets, items);
      }

      if (response.includes.Entry) {
        const entries = getPropertValue(response, 'includes.Entry');
        items = processEntries(entries, items);
      }
    }

    response.items.forEach((item) => {
      loop.push(item.sys.id);
    });

    if (response.items.length === 0) {
      endOfLoop = true;
    } else if (limit && response.items.length !== limit) {
      endOfLoop = true;
    }
  } else {
    const entries = getPropertValue(response, 'entries');
    const assets = getPropertValue(response, 'assets');

    items = processEntries(entries, items);
    items = processAssets(assets, items);
  }

  return { items, loop, endOfLoop };
}
