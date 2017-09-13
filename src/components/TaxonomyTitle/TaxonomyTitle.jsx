import React from 'react';

const TaxonomyTitle = ({ contentType, title }) => {
  let string = '404: Page not found';

  if (contentType && title) {
    switch (contentType) {
      case 'category':
        string = `Category: ${title}`;
        break;
      default:
        break;
    }
  }

  return <h2 className="Title">{string}</h2>;
};

export default TaxonomyTitle;
