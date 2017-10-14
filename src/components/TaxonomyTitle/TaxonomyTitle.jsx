import React from 'react';

const TaxonomyTitle = ({ contentType, title, noItem }) => {
  let string = '404: Page not found';

  if (contentType && title) {
    switch (contentType) {
      case 'category':
        string = `Category: ${title}`;
        break;
      default:
        return null;
    }
  }

  if (noItem) {
    return null;
  }

  return <h2 className="Title">{string}</h2>;
};

export default TaxonomyTitle;
