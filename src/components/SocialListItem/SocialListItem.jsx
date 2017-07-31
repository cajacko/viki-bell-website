import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Icon from 'components/Icon/Icon';

const SocialListItem = ({ url, icon, name, noItem }) => {
  if (noItem) {
    return null;
  }

  return (
    <li className="Social-listItem">
      <a className="Social-link" target="_blank" rel="noopener noreferrer" href={url}>
        <span className="Social-text">{name}</span>
        <Item itemId={icon} element={Icon} />
      </a>
    </li>
  );
};

SocialListItem.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  noItem: PropTypes.bool,
};

SocialListItem.defaultProps = {
  noItem: false,
};

export default SocialListItem;
