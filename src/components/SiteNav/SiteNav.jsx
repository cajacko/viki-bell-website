import React, { Component } from 'react';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import SiteNavItem from 'components/SiteNavItem/SiteNavItem';
import SiteNavSubNav from 'components/SiteNavSubNav/SiteNavSubNav';

class SiteNav extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileShow: false };
    this.mobileClick = this.mobileClick.bind(this);
  }

  mobileClick() {
    this.setState({ mobileShow: !this.state.mobileShow });
  }

  render() {
    return (
      <nav className="SiteNav">
        <ul className="SiteNav-list u-clearFix u-wrap">
          <li className="SiteTitle SiteNav-item">
            <Link
              noStyle
              id="MicroData-person"
              className="SiteTitle-link SiteNav-link"
              to="/"
              itemProp="author"
              itemScope=""
              itemType="https://schema.org/Person"
            >
              <h1 className="SiteTitle-text" itemProp="name">
                Viki Bell
              </h1>
              <meta itemProp="familyName" content="Bell" />
              <meta itemProp="givenName" content="Viki" />
              <meta itemProp="gender" content="Female" />
              <meta itemProp="nationality" content="British" />
              <link itemProp="url" href="https://vikibell.com" />
              <link
                itemProp="sameAs"
                href="https://www.instagram.com/vikibell/"
              />
              <link itemProp="sameAs" href="https://twitter.com/Vikiibell/" />
              <link
                itemProp="sameAs"
                href="https://www.pinterest.com/vikiibell/"
              />
              <link
                itemProp="sameAs"
                href="https://www.linkedin.com/in/vikibell"
              />
            </Link>
          </li>

          <SiteNavItem
            icon="instagram"
            to="https://www.instagram.com/vikibell/"
            title="Instagram"
            mobile
          />
          <SiteNavItem
            icon="twitter"
            to="https://twitter.com/Vikiibell/"
            title="Twitter"
            mobile
          />
          <SiteNavItem
            to="http://www.bloglovin.com/blog/14308057/?claim=zjrf4gtjazv"
            title="Follow my blog with Bloglovin"
            mobile
            hidden
          />

          <li>
            <div className="SiteNav-item SiteNav-item--mobile">
              <a
                id="MobileDropdownLink"
                className="SiteNav-link"
                aria-controls="MobileNav"
                aria-expanded="true"
                onClick={this.mobileClick}
              >
                <Icon
                  icon={this.state.mobileShow ? 'cancel' : 'menu'}
                  className="SiteNav-icon icon-menu"
                />
              </a>
            </div>
            <ul
              id="MobileNav"
              className="SiteNavMain SiteNav-list u-clearFix"
              aria-hidden={this.state.mobileShow ? 'false' : 'true'}
              aria-expanded={this.state.mobileShow ? 'true' : 'false'}
              style={{ display: this.state.mobileShow && 'block' }}
            >
              <SiteNavSubNav
                mainTitle="About"
                mainIcon="female"
                mainTo="/about-me"
                mobileShow={this.state.mobileShow}
                subItems={[
                  { title: 'About', to: '/about-me' },
                  { title: 'Contact', to: '/contact' },
                ]}
              />

              <SiteNavItem
                icon="leaf"
                to="/categories/life"
                title="Life"
                mobileShow={this.state.mobileShow}
              />
              <SiteNavItem
                icon="calendar"
                to="/categories/events"
                title="Events"
                mobileShow={this.state.mobileShow}
              />
              <SiteNavItem
                icon="plane"
                to="/categories/travel"
                title="Travel"
                mobileShow={this.state.mobileShow}
              />

              <SiteNavSubNav
                mainTitle="Food"
                mainIcon="cutlery"
                mainTo="/categories/food"
                mobileShow={this.state.mobileShow}
                subItems={[
                  { title: 'Recipes', to: '/Recipes' },
                  { title: 'Restaurants', to: '/categories/restaurants' },
                ]}
              />
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
