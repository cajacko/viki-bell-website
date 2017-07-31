import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import SocialListItem from 'components/SocialListItem/SocialListItem';

const Social = ({ title, socialIcons }) => (
  <section className="Social">
    <h2 className="Social-title">{title}</h2>
    <ul className="Social-list">
      {
        socialIcons.map(id => (
          <Item element={SocialListItem} key={id} itemId={id} />
        ))
      }
    </ul>
  </section>
);

Social.propTypes = {
  title: PropTypes.string.isRequired,
  socialIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Social;
