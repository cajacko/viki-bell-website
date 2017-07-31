import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';

const Now = ({ title, content, images }) => (
  <section className="Now">
    <h2 className="Now-title">{title}</h2>
    <ReactMarkdown source={content} />

    <ul className="Now-imageList">
      {
        images.map(id => (
          <li key={id} className="Now-imageListItem">
            <Item
              element={Image}
              itemId={id}
              width={360}
              height={360}
            />
          </li>
        ))
      }
    </ul>
  </section>
);

Now.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Now;
