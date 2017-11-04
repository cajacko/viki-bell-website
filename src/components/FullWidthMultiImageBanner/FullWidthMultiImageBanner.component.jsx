import React, { PureComponent } from 'react';
import FullWidthMultiImageBannerRender from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.render';

class FullWidthMultiImageBanner extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { showImages: false };

    this.setShowImages = this.setShowImages.bind(this);
    this.setCenter = this.setCenter.bind(this);
  }

  setCenter(center) {
    this.center = center;

    this.setShowImages(window.innerWidth);
  }

  setShowImages(width) {
    if (!this.center) return;

    const imageWidth = (width - this.center.offsetWidth) / 2;

    const showImages = imageWidth > 100;

    if (showImages !== this.state.showImages) {
      this.setState({ showImages });
    }
  }

  render() {
    return (
      <FullWidthMultiImageBannerRender
        onResize={this.setShowImages}
        logoTitle={this.props.logoTitle}
        noItem={this.props.noItem}
        leftImage={this.state.showImages ? this.props.leftImage : null}
        rightImage={this.state.showImages ? this.props.rightImage : null}
        tagLine={this.props.tagLine}
        setCenter={this.setCenter}
      />
    );
  }
}

export default FullWidthMultiImageBanner;
