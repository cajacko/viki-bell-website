import React, { PureComponent } from 'react';
import { Section, Heading, Time } from 'components/Title/Title.style';

class TitleRender extends PureComponent {
  render() {
    if (!this.props.title && !this.props.dateDisplay) {
      return null;
    }

    return (
      <Section>
        <Heading>{this.props.title}</Heading>
        {this.props.dateDisplay && (
          <Time dateTime={this.props.dateString}>{this.props.dateDisplay}</Time>
        )}
      </Section>
    );
  }
}

export default TitleRender;
