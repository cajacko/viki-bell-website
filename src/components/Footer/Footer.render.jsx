import React, { PureComponent } from 'react';
import { Section } from 'components/Footer/Footer.style';

class Footer extends PureComponent {
  render() {
    const year = new Date().getFullYear();

    return (
      <Section>
        Unless otherwise stated all images are owned by Viki Bell © {year}
      </Section>
    );
  }
}

export default Footer;
