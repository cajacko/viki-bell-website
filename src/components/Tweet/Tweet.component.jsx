/* eslint max-lines: 0 */

import React, { Component } from 'react';
import Moment from 'moment';

function tweetContent(tweet) {
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  const replaceMap = [];
  let replaceId = 0;

  let text = tweet.text;

  if (tweet.entities) {
    if (tweet.entities.media) {
      tweet.entities.media.forEach(({ url, media_url_https }) => {
        const html = `<img class="Tweet-contentImage" src="${media_url_https}" />`;
        replaceMap.push({ replaceId, html });
        text = text.replace(url, `$REPLACE_${replaceId}`);
        replaceId += 1;
      });
    }
  }

  text = text.replace(
    exp,
    '<a target="_blank" rel="noopener noreferrer" href=\'$1\'>$1</a>',
  );

  replaceMap.forEach(({ replaceId, html }) => {
    text = text.replace(`$REPLACE_${replaceId}`, html);
  });

  return text;
}

class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = { timeAgo: this.timeAgo() };
    this.timeAgo = this.timeAgo.bind(this);
  }

  componentDidMount() {
    console.warn(this.props);

    setInterval(() => {
      this.setState({ timeAgo: this.timeAgo() });
    }, 5000);
  }

  timeAgo() {
    return new Moment(this.props.created_at).fromNow();
  }

  render() {
    const date = new Moment(this.props.created_at);
    const profileUrl = `http://twitter.com/${this.props.user.screen_name}`;
    const html = tweetContent(this.props);

    return (
      <article className="Tweet">
        <header className="u-clearFix">
          <a
            className="Tweet-dateLink"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <time className="Tweet-date" dateTime={date.format()}>
              {this.state.timeAgo}
            </time>
          </a>
          <a
            className="Tweet-imageLink"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Tweet-image"
              src={this.props.user.profile_image_url_https}
              alt={`${this.props.user.name} twitter`}
            />
          </a>
          <a
            className="Tweet-nameLink"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="Tweet-name">{this.props.user.name}</h3>
          </a>
          <a
            className="Tweet-usernameLink"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Tweet-username">
              @{this.props.user.screen_name}
            </span>
          </a>
        </header>
        <div
          className="Tweet-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    );
  }
}

export default Tweet;
