/* eslint max-lines: 0 */

import React from 'react';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';

const SideBar = () => (
  <aside className="Sidebar">
    <div className="Sidebar-wrap">
      <div className="Sidebar-main u-clearFix">
        <ul className="Profile">
          <li className="Profile-item"><img className="Profile-image" src="https://admin.vikibell.com/wp-content/uploads/2016/05/profile.jpg" alt="Alt text" /></li>
        </ul>

        <div className="Sidebar-social">
          <ul className="Sidebar-socialWrap">
            <li className="Sidebar-socialItem--twitter Sidebar-socialItem">
              <Link className="Sidebar-socialLink" to="https://twitter.com/Vikiibell/">
                <Icon className="Sidebar-socialIcon" icon="twitter" title="Twitter" />
                <span className="u-hide">Twitter</span>
              </Link>
            </li>
            <li className="Sidebar-socialItem--instagram Sidebar-socialItem">
              <Link className="Sidebar-socialLink" to="https://www.instagram.com/vikibell/">
                <Icon className="Sidebar-socialIcon" icon="instagram" title="Instagram" />
                <span className="u-hide">Instagram</span>
              </Link>
            </li>
            <li className="Sidebar-socialItem--pinterest Sidebar-socialItem">
              <Link className="Sidebar-socialLink" to="https://www.pinterest.com/vikiibell/">
                <Icon className="Sidebar-socialIcon" icon="pinterest" title="Pinterest" />
                <span className="u-hide">Pinterest</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="TweetLoop">
          <header>
            <Link className="TweetLoop-headerLink" to="http://twitter.com/Vikiibell">
              <Icon className="TweetLoop-headerIcon" icon="twitter" title="Twitter" />
              <span className="u-hide">Twitter</span>
            </Link>
          </header>

          <div>
            <article className="Tweet">
              <header className="u-clearFix">
                <a className="Tweet-dateLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <time className="Tweet-date" dateTime="2017-08-07 09:21:50">4 hours ago</time>
                </a>
                <a className="Tweet-imageLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <img className="Tweet-image" src="http://pbs.twimg.com/profile_images/815141633360531456/_Ko6DRY-_normal.jpg" alt="Viki bell twitter" />
                </a>
                <a className="Tweet-nameLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <h3 className="Tweet-name">Viki Bell</h3>
                </a>
                <a className="Tweet-usernameLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <span className="Tweet-username">@Vikiibell</span>
                </a>
              </header>
              <div className="Tweet-content">
                So <a href="http://twitter.com/charliejackson" target="_blank" rel="noopener noreferrer">@charliejackson</a> set up a compliment bot to send me fun messages every Monday... this one though 😂😂😂😂😂 <a href="https://t.co/0NTNyiYaXS" target="_blank" rel="noopener noreferrer">https://t.co/0NTNyiYaXS</a>
              </div>
            </article>

            <article className="Tweet">
              <header className="u-clearFix">
                <a className="Tweet-dateLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <time className="Tweet-date" dateTime="2017-08-06 21:06:50">16 hours ago</time>
                </a>
                <a className="Tweet-imageLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <img className="Tweet-image" src="http://pbs.twimg.com/profile_images/815141633360531456/_Ko6DRY-_normal.jpg" alt="Viki bell twitter" />
                </a>
                <a className="Tweet-nameLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <h3 className="Tweet-name">Viki Bell</h3>
                </a>
                <a className="Tweet-usernameLink" href="http://twitter.com/Vikiibell" target="_blank" rel="noopener noreferrer">
                  <span className="Tweet-username">@Vikiibell</span>
                </a>
              </header>
              <div className="Tweet-content">
                Currently sat in the garden on our new sofas, listening to Soul Sunday on Spotify and watching the fire 😍 <a href="https://t.co/nMmW9zR8qC" target="_blank" rel="noopener noreferrer">https://t.co/nMmW9zR8qC</a>
              </div>
              <a className="Tweet-contentImageLink" href="">
                <img className="Tweet-contentImage" src="http://pbs.twimg.com/media/DGkmywdXcAAYTea.jpg" alt="Featured" />
              </a>
            </article>
          </div>

          <footer>
            <Link className="TweetLoop-follow" to="http://twitter.com/Vikiibell">Follow @vikibell</Link>
          </footer>
        </div>
      </div>

      <a id="ToTop" className="ToTop" href="#SiteHeader">
        <Icon className="ToTop-icon" icon="up" title="Scroll to top" />
      </a>
    </div>
  </aside>
);

export default SideBar;
