import React from 'react';
import Radium from 'radium';
import style from 'components/Image/Image.style';
import WindowResize from 'components/WindowResize/WindowResize';
import propTypes from 'components/Image/Image.propTypes';

let id = 0;

class Image extends React.Component {
  constructor(props) {
    super(props);
    id += 1;
    this.id = `Image-${id}`;

    this.state = {
      wrapperStyle: {
        opacity: 0,
      },
      loaded: false,
      error: false,
      positioned: false,
    };

    this.positionImage = this.positionImage.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  componentDidMount() {
    this.element = document.getElementById(this.id);

    setTimeout(() => {
      this.positionImage();
    }, 500);
  }

  handleImageErrored() {
    this.setState({ error: true });
  }

  handleImageLoaded() {
    const state = Object.assign({}, this.state);
    state.loaded = true;

    if (this.state.positioned && !this.state.error) {
      state.wrapperStyle.opacity = 1;
    }

    this.setState(state);
  }

  positionImage() {
    if (this.state.error) {
      return;
    }

    const containerHeight = this.element.clientHeight;
    const containerWidth = this.element.clientWidth;
    const containerRatio = containerHeight / containerWidth;

    const imageHeight = this.props.originalHeight;
    const imageWidth = this.props.originalWidth;
    const imageRatio = imageHeight / imageWidth;

    const wrapperStyle = {};

    if (containerRatio < imageRatio) {
      wrapperStyle.width = containerWidth;
      wrapperStyle.height = imageRatio * wrapperStyle.width;
    } else {
      wrapperStyle.height = containerHeight;
      wrapperStyle.width = wrapperStyle.height / imageRatio;
    }

    wrapperStyle.marginLeft = -(wrapperStyle.width - containerWidth) / 2;
    wrapperStyle.marginTop = -(wrapperStyle.height - containerHeight) / 2;

    if (this.state.loaded && !this.state.error) {
      wrapperStyle.opacity = 1;
    } else {
      wrapperStyle.opacity = 0;
    }

    this.setState({ wrapperStyle, positioned: true });
  }

  render() {
    const width = this.props.originalWidth;
    const height = this.props.originalHeight;
    const aspectRatio = height / width;
    const percentage = `${aspectRatio * 100}%`;
    let loading;
    let wrapperStyle = { ...style.wrapper, ...this.state.wrapperStyle };
    let wrapper;
    let showWrapper = true;
    let textStyle = style.text;

    if (this.state.error) {
      loading = <span>Oh no! Could not load this image!</span>;
      showWrapper = false;
    } else if (!this.state.loaded || !this.state.positioned || this.state.wrapperStyle.opacity === 0) {
      wrapperStyle = { ...wrapperStyle, ...style.wrapperHide };
    } else {
      textStyle = { ...textStyle, opacity: 0 };
    }

    if (!this.state.error) {
      loading = <span>Loading</span>;
    }

    loading = <div style={textStyle}>{loading}</div>;

    if (showWrapper) {
      wrapper = (
        <div style={wrapperStyle}>
          <img
            src={this.props.src}
            alt={this.props.alt}
            height={this.props.originalHeight}
            width={this.props.originalWidth}
            style={style.image}
            onLoad={this.handleImageLoaded}
            onError={this.handleImageErrored}
          />
          <div style={{ paddingBottom: percentage }} />
        </div>
      );
    }

    return (
      <WindowResize onWindowResize={this.positionImage} runOnMount={false}>
        <div id={this.id} style={style.container}>
          {wrapper}
          {loading}
        </div>
      </WindowResize>
    );
  }
}

Image.propTypes = propTypes;

export default Radium(Image);
