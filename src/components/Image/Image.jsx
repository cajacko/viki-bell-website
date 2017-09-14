import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { divHeight: null, divWidth: null };

    this.fill = this.fill.bind(this);
    this.addRemoveListener = this.addRemoveListener.bind(this);

    this.addRemoveListener(props.fillContainer);
  }

  componentDidMount() {
    this.fill();
  }

  componentWillReceiveProps({ fillContainer }) {
    this.fill();
    this.addRemoveListener(fillContainer);
  }

  componentWillUnmount() {
    this.addRemoveListener(null, true);
  }

  addRemoveListener(fillContainer, remove) {
    if ((!fillContainer || remove) && this.listener) {
      this.listener = false;
      window.removeEventListener('resize', this.fill);
    } else if (!this.listener && !remove && fillContainer) {
      this.listener = true;
      window.addEventListener('resize', this.fill);
    }
  }

  fill() {
    if (this.props.fillContainer && this.divElement) {
      this.setState({
        divHeight: this.divElement.clientHeight,
        divWidth: this.divElement.clientWidth,
      });
    }
  }

  render() {
    if (this.props.noItem) {
      return null;
    }

    let imageHeight = this.props.file.details.image.height;
    let imageWidth = this.props.file.details.image.width;

    let fillText = '';

    if (this.props.fill) {
      fillText = '&fit=fill';
    }

    const ratio = imageHeight / imageWidth;
    let changeSize = true;

    if (this.props.height && this.props.width) {
      imageHeight = this.props.height;
      imageWidth = this.props.width;
    } else if (this.props.height && !this.props.width) {
      imageHeight = this.props.height;
      imageWidth = Math.floor(imageHeight / ratio);
      fillText = '&fit=fill';
    } else if (!this.props.height && this.props.width) {
      imageWidth = this.props.width;
      imageHeight = Math.floor(ratio * imageWidth);
      fillText = 'fit=fill';
    } else {
      changeSize = false;
    }

    const jpg = 'fm=jpg&fl=progressive';
    let url;

    if (changeSize) {
      url = `${this.props.file
        .url}?w=${imageWidth}&h=${imageHeight}&${fillText}&${jpg}`;
    } else {
      url = `${this.props.file.url}?${jpg}`;
    }

    const style = this.props.fillContainer
      ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      }
      : { paddingBottom: `${ratio * 100}%`, position: 'relative' };

    let imageStyle = { display: 'block' };

    if (this.props.fillContainer && this.divElement) {
      imageStyle = {
        ...imageStyle,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
        transition: 'opacity 0.2s',
      };

      if (ratio < 1) {
        const renderWidth = this.state.divHeight / ratio;
        imageStyle.left = -(renderWidth - this.state.divWidth) / 2;
        imageStyle.height = this.state.divHeight;
        imageStyle.width = 'auto';
      } else {
        const renderHeight = this.state.divHeight * ratio;
        imageStyle.top = -(renderHeight - this.state.divHeight) / 2;
        imageStyle.height = 'auto';
        imageStyle.width = this.state.divWidth;
      }
    } else if (this.props.fillContainer) {
      imageStyle.opacity = 0;
    } else {
      imageStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
      };
    }

    return (
      <div
        style={style}
        ref={(div) => {
          this.divElement = div;
        }}
        className={this.props.className}
      >
        <img
          width={imageWidth}
          height={imageHeight}
          style={imageStyle}
          src={url}
          alt={this.props.title}
        />
      </div>
    );
  }
}

Image.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.bool,
  title: PropTypes.string,
  noItem: PropTypes.bool,
  fillContainer: PropTypes.bool,
};

Image.defaultProps = {
  className: null,
  width: null,
  height: null,
  fill: true,
  title: 'Content editor has not supplied alt text',
  stretchWidth: null,
  noItem: false,
  file: null,
  fillContainer: false,
};

export default Image;
