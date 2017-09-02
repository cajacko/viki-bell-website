import React from 'react';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import SiteNavItem from 'components/SiteNavItem/SiteNavItem';

const Banner = () => (
  <nav className="SiteNav">
    <ul className="SiteNav-list u-clearFix u-wrap">
      <li className="SiteTitle SiteNav-item">
        <Link id="MicroData-person" className="SiteTitle-link SiteNav-link" to="/" itemProp="author" itemScope="" itemType="https://schema.org/Person">
          <h1 className="SiteTitle-text" itemProp="name">Viki Bell</h1>
          <meta itemProp="familyName" content="Bell" />
          <meta itemProp="givenName" content="Viki" />
          <meta itemProp="gender" content="Female" />
          <meta itemProp="nationality" content="British" />
          <link itemProp="url" href="https://vikibell.com" />
          <link itemProp="sameAs" href="https://www.instagram.com/vikibell/" />
          <link itemProp="sameAs" href="https://twitter.com/Vikiibell/" />
          <link itemProp="sameAs" href="https://www.pinterest.com/vikiibell/" />
          <link itemProp="sameAs" href="https://www.linkedin.com/in/vikibell" />
        </Link>
      </li>

      <SiteNavItem icon="instagram" to="https://www.instagram.com/vikibell/" title="Instagram" mobile />
      <SiteNavItem icon="twitter" to="https://twitter.com/Vikiibell/" title="Twitter" mobile />
      <SiteNavItem to="http://www.bloglovin.com/blog/14308057/?claim=zjrf4gtjazv" title="Follow my blog with Bloglovin" mobile hidden />

      <li>
        <div className="SiteNav-item SiteNav-item--mobile">
          <a id="MobileDropdownLink" className="SiteNav-link" aria-controls="MobileNav" aria-expanded="true">
            <Icon icon="cancel" className="SiteNav-icon icon-menu" />
          </a>
        </div>
        <ul id="MobileNav" className="SiteNavMain SiteNav-list u-clearFix" aria-hidden="false" aria-expanded="true">
          <li className="SiteNav-item SiteNavMain-item u-hasDropDown">
            <Link className="SiteNavMain-link SiteNav-link u-controlsDropdown u-clearFix" to="/about-me" aria-controls="SiteNav-subNav--1" aria-expanded="false">
              <Icon icon="female" className="SiteNav-icon" />
              <span className="SiteNav-title">About</span>
            </Link>
            <ul id="SiteNav-subNav--1" className="SiteNav-subNav SiteNav-list" aria-hidden="true" aria-expanded="false" style={{ display: 'none' }}>
              <li className="SiteNav-subItem">
                <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to="/about-me">About</Link>
              </li>
              <li className="SiteNav-subItem">
                <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to="/contact">Contact</Link>
              </li>
              <li className="SiteNav-subItem">
                <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </li>

          <SiteNavItem icon="leaf" to="/categories/life" title="Life" />
          <SiteNavItem icon="calendar" to="/categories/events" title="Events" />
          <SiteNavItem icon="plane" to="/categories/travel" title="Travel" />

          <li className="SiteNav-item SiteNavMain-item u-hasDropDown">
            <a className="SiteNavMain-link SiteNav-link u-controlsDropdown u-clearFix" href="/categories/food" aria-controls="SiteNav-subNav--2" aria-expanded="false">
              <Icon icon="cutlery" className="SiteNav-icon" />
              <span className="SiteNav-title">Food</span>
            </a>
            <ul id="SiteNav-subNav--2" className="SiteNav-subNav SiteNav-list" aria-hidden="true" aria-expanded="false" style={{ display: 'none' }}>
              <li className="SiteNav-subItem">
                <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to="/categories/recipes">Recipes</Link>
              </li>
              <li className="SiteNav-subItem">
                <Link className="SiteNavMain-link SiteNav-link SiteNav-sublink" to="/categories/restaurants">Restaurants</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Banner;
