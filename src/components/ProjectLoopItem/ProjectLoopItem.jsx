import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import dateString from 'helpers/dateString';
import Image from 'components/Image/Image';

const ProjectLoopItem = ({
  slug,
  displayDate,
  thumbnailImage,
  title,
  excerpt,
}) => {
  const url = `/${slug}`;
  const date = dateString(displayDate);

  return (
    <article className="ProjectLoopItem">
      <Link className="ProjectLoopItem-imageLink" to={url}>
        <Item width={200} element={Image} itemId={thumbnailImage} className="ProjectLoopItem-image wp-post-image" />
      </Link>

      <div className="ProjectLoopItem-text" style={{ flex: 1 }}>
        <Link className="ProjectLoopItem-titleLink" to={url}>
          <h3 className="ProjectLoopItem-title">{title}</h3>
        </Link>

        <div className="ProjectLoopItem-meta">
          <p className="ProjectLoopItem-date">Last Updated: {date}</p>
        </div>

        <div className="ProjectLoopItem-content">
          <p>{excerpt}</p>
        </div>

        <Link className="ProjectLoopItem-readMore" to={url}>Read More</Link>
      </div>
    </article>
  );
};

ProjectLoopItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  thumbnailImage: PropTypes.string.isRequired,
  displayDate: PropTypes.string.isRequired,
};

export default ProjectLoopItem;
