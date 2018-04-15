/* eslint max-lines: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import Twitter from 'components/Twitter/Twitter.container';
import Image from 'components/Image/Image';

const SideBar = ({ profileImage, profileImageAlt }) => (
  <aside className="Sidebar">
    <div className="Sidebar-wrap">
      <div className="Sidebar-main u-clearFix">
        {profileImage && (
          <ul className="Profile">
            <li className="Profile-item">
              <Image
                className="Profile-image"
                title={profileImageAlt}
                file={profileImage}
                height={600}
                width={600}
              />
            </li>
          </ul>
        )}

        <div className="Sidebar-social">
          <ul className="Sidebar-socialWrap">
            <li className="Sidebar-socialItem--twitter Sidebar-socialItem">
              <Link
                noStyle
                className="Sidebar-socialLink"
                to="https://twitter.com/Vikiibell/"
              >
                <Icon
                  className="Sidebar-socialIcon"
                  icon="twitter"
                  title="Twitter"
                />
                <span className="u-hide">Twitter</span>
              </Link>
            </li>
            <li className="Sidebar-socialItem--instagram Sidebar-socialItem">
              <Link
                noStyle
                className="Sidebar-socialLink"
                to="https://www.instagram.com/vikibell/"
              >
                <Icon
                  className="Sidebar-socialIcon"
                  icon="instagram"
                  title="Instagram"
                />
                <span className="u-hide">Instagram</span>
              </Link>
            </li>
            <li className="Sidebar-socialItem--pinterest Sidebar-socialItem">
              <Link
                noStyle
                className="Sidebar-socialLink"
                to="https://www.pinterest.com/vikiibell/"
              >
                <Icon
                  className="Sidebar-socialIcon"
                  icon="pinterest"
                  title="Pinterest"
                />
                <span className="u-hide">Pinterest</span>
              </Link>
            </li>
          </ul>
        </div>

        <Twitter />
      </div>

      <a id="ToTop" className="ToTop" href="#SiteHeader">
        <Icon className="ToTop-icon" icon="up" title="Scroll to top" />
      </a>
    </div>
  </aside>
);

SideBar.propTypes = {
  profileImage: PropTypes.shape({
    url: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }),
  profileImageAlt: PropTypes.string,
};

SideBar.defaultProps = {
  profileImage: null,
  profileImageAlt: null,
};

export default SideBar;
