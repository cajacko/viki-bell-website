import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Image from 'components/Image/Image';
import style from 'components/ImageLink/ImageLink.style';

class ImageLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ hover: true });
  }

  onMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    let overlay;

    if (this.state.hover) {
      if (this.props.lighten) {
        overlay = <div style={{ ...style.overlay, ...style.lighten }} />;
      } else {
        overlay = <div style={{ ...style.overlay, ...style.darken }} />;
      }
    }

    return (
      <a
        style={style.link}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {overlay}
        <Image src={this.props.src} />
      </a>
    );
  }
}

ImageLink.propTypes = {
  lighten: PropTypes.bool,
  src: PropTypes.string,
};

ImageLink.defaultProps = {
  lighten: false,
  src: undefined,
};

export default Radium(ImageLink);
