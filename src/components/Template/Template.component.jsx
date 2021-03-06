import React, { PureComponent } from 'react';
import Component from 'components/Component/Component';
import { ComponentLoop } from 'components/Template/Template.style';

class Template extends PureComponent {
  render() {
    let id = 0;

    return (
      <div itemScope="" itemType="http://schema.org/WebPage">
        <div
          id="MicroData-organization"
          itemProp="publisher"
          itemScope=""
          itemType="http://schema.org/Organization"
        >
          <meta itemProp="name" content="Viki Bell" />
          <meta itemProp="url" content="https://vikibell.com" />
          <link itemProp="sameAs" href="https://www.instagram.com/vikibell/" />
          <link itemProp="sameAs" href="https://twitter.com/Vikiibell/" />
          <link itemProp="sameAs" href="https://www.pinterest.com/vikiibell/" />
          <link itemProp="sameAs" href="https://www.linkedin.com/in/vikibell" />
          <div
            itemProp="logo"
            itemScope=""
            itemType="https://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="http://vikibell.com/media/banner.jpg"
            />
            <meta itemProp="width" content="600" />
            <meta itemProp="height" content="60" />
          </div>
        </div>

        <ComponentLoop>
          {this.props.components &&
            this.props.components.map((props) => {
              id += 1;

              return (
                <Component key={id} component={props.component} {...props} />
              );
            })}
        </ComponentLoop>
      </div>
    );
  }
}

export default Template;
