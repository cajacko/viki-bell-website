/* eslint max-lines: 0 */

import React from 'react';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import Twitter from 'components/Twitter/Twitter.container';

const SideBar = () => (
  <aside className="Sidebar">
    <div className="Sidebar-wrap">
      <div className="Sidebar-main u-clearFix">
        <ul className="Profile">
          <li className="Profile-item">
            <img
              className="Profile-image"
              src="https://images.contentful.com/3ctegf19trkf/do1FRI7iZasuwuKykm8ok/3f7cbee1f47f5a5777820baead45c206/profile.jpg"
              alt="Alt text"
            />
          </li>
        </ul>

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

export default SideBar;
