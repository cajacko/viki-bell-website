import React from 'react';
import Icon from 'components/Icon/Icon';

const SharePost = () => (
  <div className="SharePost">
    <span className="SharePost-title">Share this post on:</span>
    <div className="SharePost-links">
      <ul className="SharePost-list">
        <li className="SharePost-item">
          <a className="SharePost-Twitter SharePost-link" href="https://twitter.com/intent/tweet?url=&amp;text=&amp;via=" target="_blank" rel="noopener noreferrer">
            <Icon className="SharePost-socialIcon SharePost-icon" icon="twitter" title="Twitter" />
            <Icon className="SharePost-shareIcon SharePost-icon" icon="share" title="Share on Twitter" />
          </a>
        </li>
        <li className="SharePost-item">
          <a className="SharePost-Facebook SharePost-link" href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" rel="noopener noreferrer">
            <Icon className="SharePost-socialIcon SharePost-icon" icon="facebook" title="Facebook" />
            <Icon className="SharePost-shareIcon SharePost-icon" icon="share" title="Share on Facebook" />
          </a>
        </li>
        <li className="SharePost-item">
          <a className="SharePost-Email SharePost-link" href="mailto:?subject=&amp;body=">
            <Icon className="SharePost-socialIcon SharePost-icon" icon="email" title="Email" />
            <Icon className="SharePost-shareIcon SharePost-icon" icon="share" title="Share via email" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SharePost;
