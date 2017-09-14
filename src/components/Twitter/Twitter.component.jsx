/* eslint max-lines: 0 */

import React, { Component } from 'react';
// import TwitterApi from 'twitter';
import Tweet from 'components/Tweet/Tweet.component';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';
import Loading from 'components/Loading/Loading';

const lastGotTweets = Date.now();

function spliceTweets(tweets) {
  const arr = Object.assign([], tweets);

  return arr.slice(0, 5);
}

class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: spliceTweets(this.props.tweets) };

    this.getTweets = this.getTweets.bind(this);
  }

  componentDidMount() {
    this.getTweets();

    this.interval = setInterval(() => {
      this.getTweets();
    }, 1000 * 60);
  }

  componentWillReceiveProps(props) {
    this.setState({ tweets: spliceTweets(props.tweets) });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTweets() {
    if (Date.now() - lastGotTweets > 1000 * 30) {
      this.props.getTweets();
    }
  }

  render() {
    return (
      <div className="TweetLoop">
        <header>
          <Link
            className="TweetLoop-headerLink"
            to="http://twitter.com/Vikiibell"
          >
            <Icon
              className="TweetLoop-headerIcon"
              icon="twitter"
              title="Twitter"
            />
            <span className="u-hide">Twitter</span>
          </Link>
        </header>

        {this.state.tweets.length === 0 && (
          <div style={{ margin: '30px 0' }}>
            <Loading noMargin />
          </div>
        )}

        <div>
          {this.state.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
        </div>

        <footer>
          <Link className="TweetLoop-follow" to="http://twitter.com/Vikiibell">
            Follow @vikibell
          </Link>
        </footer>
      </div>
    );
  }
}

export default Twitter;
