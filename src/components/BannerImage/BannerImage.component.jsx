import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BannerImageRender from 'components/BannerImage/BannerImage.render';

class BannerImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      left: props.left ? '0' : 'auto',
      right: props.left ? 'auto' : '0',
      width: 'auto',
    };

    this.getImageWidth = this.getImageWidth.bind(this);
    this.getImagePosition = this.getImagePosition.bind(this);
    this.setImagePosition = this.setImagePosition.bind(this);
  }

  componentDidMount() {
    this.setImagePosition();
  }

  setImagePosition() {
    const width = this.getImageWidth();
    const { left, right } = this.getImagePosition(width);

    this.setState({ width: `${width}px`, left, right });
  }

  getImageWidth() {
    const { height, width } = this.props.image.details.image;

    const imageRatio = height / width;

    const imageWidth = Math.floor(this.container.clientHeight / imageRatio);

    return imageWidth;
  }

  getImagePosition(width) {
    let left = this.props.left ? '0' : 'auto';
    let right = this.props.left ? 'auto' : '0';

    if (width > this.container.clientWidth) {
      if (this.props.left) {
        right = '0';
        left = 'auto';
      } else {
        left = '0';
        right = 'auto';
      }
    }

    return { left, right };
  }

  render() {
    return (
      <BannerImageRender
        setImagePosition={this.setImagePosition}
        setContainer={(container) => {
          this.container = container;
        }}
        width={this.state.width}
        left={this.state.left}
        right={this.state.right}
        image={this.props.image}
      />
    );
  }
}

BannerImage.propTypes = {
  left: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }).isRequired,
};

BannerImage.defaultProps = {
  left: false,
};

export default BannerImage;
