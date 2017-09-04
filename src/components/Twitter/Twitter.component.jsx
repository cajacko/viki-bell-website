/* eslint max-lines: 0 */

import React, { Component } from 'react';
// import TwitterApi from 'twitter';
import Tweet from 'components/Tweet/Tweet.component';
import Link from 'components/Link/Link';
import Icon from 'components/Icon/Icon';

function spliceTweets(tweets) {
  const arr = Object.assign([], tweets);

  return arr.slice(0, 5);
}

class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: spliceTweets(this.props.tweets) };
  }

  componentDidMount() {
    this.props.getTweets();

    this.interval = setInterval(() => {
      this.props.getTweets();
    }, 1000 * 60);
  }

  componentWillReceiveProps(props) {
    this.setState({ tweets: spliceTweets(props.tweets) })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
          {this.state.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
        </div>

        <footer>
          <Link className="TweetLoop-follow" to="http://twitter.com/Vikiibell">Follow @vikibell</Link>
        </footer>
      </div>
    );
  }
}

export default Twitter;
