import React, { PureComponent } from 'react';
import Component from 'components/Component/Component';

class BannerType extends PureComponent {
  render() {
    let contentType;

    if (this.props.banner) contentType = this.props.banner.contentType;

    if (!contentType) return null;

    return <Component component={contentType} />;
  }
}

export default BannerType;
