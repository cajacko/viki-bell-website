/* eslint max-lines: 0 */

import React, { Component } from 'react';
// import TwitterApi from 'twitter';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';

class Twitter extends Component {
  componentDidMount() {
    this.props.getTweets();
  }

  render() {
    return (
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
    );
  }
}

export default Twitter;
